# Hazel #


Some text

An image:

 ![image](/assets/images/hazel1.png) 

Link to [file](/assets/files/hazelLabelForASUS.sh)

```` bash
#!/usr/bin/env bash
# shellcheck shell=bash

label(){
  if [ $# -lt 2 ]; then
    echo "USAGE: label [0-7] file1 [file2] ..."
    echo "Sets the Finder label (color) for files"
    echo "Default colors:"
    echo " 0  No color"
    echo " 1  Orange"
    echo " 2  Red"
    echo " 3  Yellow"
    echo " 4  Blue"
    echo " 5  Purple"
    echo " 6  Green"
    echo " 7  Gray"
  else
    /usr/bin/osascript - "$@" << EOF
    on run argv
        set labelIndex to (item 1 of argv as number)
        repeat with i from 2 to (count of argv)
          tell application "Finder"
              set theFile to POSIX file (item i of argv) as alias
              set label index of theFile to labelIndex
          end tell
        end repeat
    end run
EOF
  fi
}

file_exists() {
    if [ -e "$1" ]; then
      return 0
    fi
    return 1
}

#logger "path is is $PATH"
export PATH="/usr/local/bin:$PATH"
#logger "path is is $PATH"

if ! file_exists "$1"; then
  # must exit with zero so Hazel does't retry it
  exit 0;
fi

#say "The file $1 matches this rule’s conditions."
logger "Directory is $1"
logger "Checking for shasum binaries"

if hash sha256deep 2> /dev/null; then
  logger "found sha256deep"
  cmd="sha256deep"
elif shasum -a 256 < /dev/null > /dev/null 2>&1 ; then
  logger "found shasum"
  cmd="shasum -a 256"
else
  logger "No binary found to compute and compare SHA-256 message digests"
  osascript -e 'display notification "No binary found to compute and compare SHA-256 message digests" with title "ERROR"'
  exit 0;
fi

cd "$1" || exit 0;

firmwareFile=$(ls -- *.trx)
sha256sumFile=$(ls -- *.sha256)

if ! file_exists "$firmwareFile"; then
  # must exit with zero so Hazel does't retry it
  exit 0;
fi

logger "firmwareFile is $firmwareFile"

if ! file_exists "$sha256sumFile"; then
  # must exit with zero so Hazel does't retry it
  exit 0;
fi

logger "sha256sumFile is $sha256sumFile"

sha256sum=$(awk '{print $1}' "$sha256sumFile")
firmwareFileFromSha256sumFile=$(awk '{print $2}' "$sha256sumFile")

if [ "$firmwareFileFromSha256sumFile" != "$firmwareFile" ]; then
  logger "Filename mismatch: $firmwareFileFromSha256sumFile != $firmwareFile"
  exit 0;
fi

sha256deepFromFirmware=$($cmd "$firmwareFile" | awk '{print $1}')

if [ "$sha256deepFromFirmware" != "$sha256sum" ]; then
  logger "sha256deep mismatch: $sha256deepFromFirmware != $sha256sum set label to red"
   label 2 "$1/$firmwareFile" >> /dev/null
   #also set folder to green so we don't process it again
   label 2 "$1" >> /dev/null
   osascript -e 'display notification "shasums mismatch for firmware" with title "INVALID ASUS Firmware"'
  exit 0;
else
    logger "sha256deep match: $sha256deepFromFirmware == $sha256sum, set label to green"
    label 6 "$1/$firmwareFile" >> /dev/null
    #also set folder to green so we don't process it again
    label 6 "$1" >> /dev/null
    osascript -e 'display notification "shasums match for firmware" with title "Valid ASUS Firmware"'
fi

exit 0;

````
