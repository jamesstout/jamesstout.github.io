---
layout: single
title: Adobe Shenanigans
date:   2018-04-15 01:29:01 +0800
categories: macOS
tags: adobe adobegcclient adobedownload
---
_What on Earth are Adobe up to?_

I found a random folder in my [`~/.gitignore-boilerplates`](https://github.com/github/gitignore) repo (created by [gibo](https://github.com/simonwhitaker/gibo)):

```bash
james@Jamess-iMac: ~/.gitignore-boilerplates on master
$ ls -ld */
drwxr-xr-x  10 james  staff   320 Apr 15 00:54 .git/
drwxr-xr-x   3 james  staff    96 Mar 17 15:09 .github/
drwxr-xr-x  61 james  staff  1952 Mar 17 15:09 Global/
drwx------+  3 root   staff    96 Apr 15 00:39 Library/
```

The `Library` folder, created by `root` contains an Adobe log file:

```bash
$ ls -l Library/Logs/AdobeDownload/*
-rw-rw-rw-@ 1 root  staff  5184 Mar 27 01:14 Library/Logs/AdobeDownload/DLM.log
```

```bash
$ cat Library/Logs/AdobeDownload/DLM.log | grep extra

Going to download the file at /Users/james/.extra/Adobe/AdobeGCClient/AdobeGCClient.zip
Unable to create directory /Users/james/.extra/Adobe/AdobeGCClient/. Error is 512 and error domain is NSCocoaErrorDomain.
The file “.extra” couldn’t be saved in the folder “james”.
failed to create a dir - /Users/james/.extra/Adobe/AdobeGCClient/ on local disk.
```

Eh? `.extra`? I already have a file named that in that location, hence the error. What's it up to?

I found another log file here `/Users/james/Library/Logs/AdobeDownload/DLM.log`

```text
| *******************start of Download****************
| GDE Version is 9.0.0.4 (BuildVersion: 6.0; BuildDate: Wed Mar 04 2015 21:34:10 )
| The file to be downloaded is http://agsupdate.adobe.com/osx/AGC_4_5_0_814_osx10_cef.zip
| Going to download the file at /Users/james/Library/Application Support/ImageOptim/Adobe/AdobeGCClient/AdobeGCClient.zip
| Preference: Client has set the preference for single stream download
| **File download complete.**
| *******************End****************
```

Eh? `.../ImageOptim/Adobe/AdobeGCClient/AdobeGCClient.zip`

So I went searching:

```bash
find /  -name AdobeGCClient -print 2>/dev/null
find ~  -name AdobeGCClient -print 2>/dev/null
```

After a bit of `awk` and `uniq`, I found:

```text
/Adobe/AdobeGCClient/AdobeGCClient.app
/Adobe/AdobeGCClient/AdobeGCClientNew.app
/Adobe/AdobeGCClient/temp
/Applications/Utilities/Adobe Application Manager/AdobeGCClient
/Library/Application Support/Adobe/AdobeGCClient/AdobeGCClient.app
/Library/QuickTime/DVCPROHDCodec.component/Adobe/AdobeGCClient/AdobeGCClient.app
/Library/QuickTime/DVCPROHDCodec.component/Adobe/AdobeGCClient/AdobeGCClientNew.app
/Users/james/Library/Application Support/Bartender/Adobe
/Users/james/Library/Application Support/Dropbox/Adobe/AdobeGCClient/AdobeGCClient.app
/Users/james/Library/Application Support/Dropbox/Adobe/AdobeGCClient/AdobeGCClientNew.app
/Users/james/Library/Application Support/Google/Chrome/Default/Extensions/kbmfpngjjgdllneeigpgjifpgocmfgmb/Adobe/AdobeGCClient
/Users/james/Library/Application Support/ImageOptim/Adobe/AdobeGCClient/AdobeGCClient.app
/Users/james/Library/Application Support/ImageOptim/Adobe/AdobeGCClient/AdobeGCClientNew.app
/Users/james/Library/Application Support/Quick Look/Adobe/AdobeGCClient/AdobeGCClient.app
/Users/james/Library/Application Support/Quick Look/Adobe/AdobeGCClient/AdobeGCClientNew.app
```

Adobe apps and files in random places. They all look like this:

<img data-src="{% asset_path Adobe-Screen-Shot.png %}" src="{% asset_path Adobe-Screen-Shot-lq.png %}" class="lazyload blur-up" alt="macOS Finder screenshot"/>

I've deleted them all for now, no one else seems to have reported this when I search on Google.