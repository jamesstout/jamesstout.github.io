#!/usr/bin/env bash
# shellcheck shell=bash

# ------------------------------------
# LOGGING UTILS
# ------------------------------------
# debug logging
info() {
    printf "$(tput setaf 2)%s$(tput sgr0)\\n" "$@"
}

# Error logging
error() {
    printf "$(tput setaf 1)x %s$(tput sgr0)\\n" "$@"
}

if hash upnpc &>/dev/null; then
  info  "upnpc is installed"
else
  error "upnpc is NOT installed, brew install miniupnpc, or build from source: https://miniupnp.tuxfamily.org/files/"
  exit 255
fi

if hash iperf &>/dev/null; then
  info  "iperf is installed"
else
  error "iperf is NOT installed, brew install iperf, or build from source: https://downloads.sourceforge.net/project/iperf/iperf-2.0.5.tar.gz"
  exit 255
fi

iperfApp=$(command -v iperf)
upnp=$(command -v upnpc)

TMP_DIR=$(/usr/bin/mktemp -d 2> /dev/null || /usr/bin/mktemp -d -t tmp)

info "TMP_DIR = $TMP_DIR"

# cleanup temp dir on exit
trap 'rm -rf $TMP_DIR' EXIT

upnp_txt="$TMP_DIR/upnp.txt"
err_txt="$TMP_DIR/error.txt"
res_txt="$TMP_DIR/result.txt"

load_url="http://reg.hkbn.net/DosPatch_PingTest/mac/en/loading.html"

echo "iper = $iperfApp"

# shellcheck disable=SC2009
psg ()
{
    ps -aef | grep --color=auto -i "[${1:0:1}]${1:1}";
    return 0
}

osascript -e 'on run {load_url}' -e 'tell application "Safari" to activate' -e 'tell application "Safari" to make new document with properties{URL:load_url}'  -e 'end run' $load_url

$upnp -r 6001 tcp 2> /dev/null 1> "$upnp_txt"

if [ -f /usr/bin/dscacheutil ]; 
then 
  /usr/bin/dscacheutil -flushcache; 
else 
  lookupd -flushcache; 
fi

$iperfApp -p 6001 -s -f m -w 1M 2>> "$err_txt" 1>> "$res_txt" & 

PID=$!
psg iperf

echo "iperf pid = $PID"

$iperfApp -c iperfmac.speedtest.com.hk -p 6001 -t 10 -P 35 -f m 2> "$err_txt" 1> "$res_txt"

psg iperf
info "sleeping for 20"
sleep 20

kill $PID

$upnp -d 6001 tcp 2> /dev/null 1>> "$upnp_txt"

IFS=$'\n' read -d '' -r -a msgArray < "$res_txt"

errmsg=$(<"$err_txt")

if [ -n "$errmsg" ]  
then
  error "not ok"
osascript <<'END'
tell application "Safari"
  do JavaScript "alert('Exceed maximum number of speed test, please try again later. （1004）');" in document 1
end tell
END
exit 255
else
  info "all ok"
  listSize=${#msgArray[@]}

  info "msgs size is $listSize"

  server_txt=""
  dl_int=""
  dl_trn=""
  dl_bdw=""
  declare -i dl_bdw_int
      
  ul_int=""
  ul_trn=""
  ul_bdw=""
  declare -i ul_bdw_int

  status_flag="UL"

  for index in "${!msgArray[@]}"; do
    echo "$index" = "${msgArray[index]}"

    if [[ "${msgArray[index]}" == *"Client connecting to"* ]]
    then
        echo "It's there!"
        server_txt=$(echo "${msgArray[index]}" | awk '{print $4}')
    fi

    if [[ "${msgArray[index]}" == *"[SUM]"* ]]
    then
        echo "got sum It's there!"
        echo "in SUM status_flag now = $status_flag"
        
        if [ "$status_flag" == "DL" ]
        then
          echo "in DL status_flag = $status_flag"
          dl_int=$(echo "${msgArray[index]}" | awk '{print $2}')
          dl_trn=$(echo "${msgArray[index]}" | awk '{print $4}')
          dl_bdw=$(echo "${msgArray[index]}" | awk '{print $6}')
        fi

        if [ "$status_flag" == "UL" ]
        then
          echo "in UL status_flag = $status_flag"
          ul_int=$(echo "${msgArray[index]}" | awk '{print $2}')
          ul_trn=$(echo "${msgArray[index]}" | awk '{print $4}')
          ul_bdw=$(echo "${msgArray[index]}" | awk '{print $6}')
          status_flag="DL"
          echo "in UL status_flag now = $status_flag"
        fi
    fi

  done

ul_bdw_int=$(("$ul_bdw" + 0));
dl_bdw_int=$(("$dl_bdw" + 0));

ul_bdw_int=$((ul_bdw_int*1024/8));
dl_bdw_int=$((dl_bdw_int*1024/8));

info "server = $server_txt"

info "DL: interval=$dl_int transfer=$dl_trn bandwidth=$dl_bdw bandwidth_int=$dl_bdw_int"
info "UL: interval=$ul_int transfer=$ul_trn bandwidth=$ul_bdw bandwidth_int=$ul_bdw_int"

fi  

osascript <<'END'
tell application "Safari"
  do JavaScript "window.close();" in document 1
end tell
END

res_url="http://reg.hkbn.net/DosPatch_PingTest/mac/en/mac.jsp?DOWNsize=$dl_trn&DOWNduration=$dl_int&DOWNspeed=$dl_bdw&UPsize=$ul_trn&UPduration=$ul_int&UPspeed=$ul_bdw"

osascript -e 'on run {res_url}' -e 'tell application "Safari" to activate' -e 'tell application "Safari" to make new document with properties{URL:res_url}' -e 'tell application "Safari" to set the URL of document 1 to res_url' -e 'end run' "$res_url"
