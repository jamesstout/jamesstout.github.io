---
layout: single
title: APFS Snapshots Saved The Day
date:   2018-05-01 09:29:01 +0800
categories: macOS
tags: APFS macOS snapshots filesystems tmutil
excerpt: The perils of `rm -rf` and the wonder of filesystem snapshots.
---

I had a shocker earlier with an out of control[^fn-bad-code] shell script that was supposed to tidy up a load of empty directories on my Mac. Just in my home dir I had nearly 18,000 empty directories:

```bash
james@Jamess-iMac: ~
$ find . -not \( -name .svn -prune -o -name .git -prune \) -type d -empty | wc -l
   17825
```

I wrote a _test_ script to try out on a few directories. The next thing I saw ... `rm -rf /` commands whizzing past on my terminal. Then things stopped working: `bash` had been deleted.

I use [Homebrew](https://brew.sh/) so `/usr/local` is writable by my user. And deletable. So my `/usr/local/bin` dir was gone, along with some other files.

I'm a proper backup nerd and have multiple backup strategies:

* [Time Machine](https://en.wikipedia.org/wiki/Time_Machine_(macOS)) to my [NAS](https://www.synology.com/en-global/products/DS1817+).
* [ChronoSync](https://www.econtechnologies.com/chronosync/overview.html) to a [Docker](https://www.docker.com/) container running [CrashPlan](https://www.crashplan.com/en-us/business/).
* [Backblaze](https://secure.backblaze.com/r/001z1s).[^fn-ref-link]
* Finally, and this is what let me down, a [Carbon Copy](https://bombich.com/) clone of my main drive.

The clone was a few weeks old, my `/usr/local` changes all the time. It wasn't usable.

> warning "TIP"
> Clone your drive often and test that it [works](https://bombich.com/kb/ccc5/how-verify-or-test-your-backup)!

However, I'd been learning about APFS, and had taken a snapshot .. yesterday.

[APFS](https://developer.apple.com/library/content/documentation/FileManagement/Conceptual/APFS_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40016999-CH1-DontLinkElementID_19) is Apple's new filesystem:

> Apple File System is a new, modern file system for iOS, macOS, tvOS, and watchOS. It is optimized for Flash/SSD storage and features strong encryption, copy-on-write metadata, space sharing, cloning for files and directories, snapshots, fast directory sizing, atomic safe-save primitives, and improved file system fundamentals.

What's a [snapshot](https://developer.apple.com/library/content/documentation/FileManagement/Conceptual/APFS_Guide/Features/Features.html#//apple_ref/doc/uid/TP40016999-CH5-DontLinkElementID_5)?
> A volume snapshot is a point-in-time, read-only instance of the file system.

Time Machine also takes local snapshots if your [backup drive isn't available](https://support.apple.com/en-hk/HT204015), so I actually had a few snapshots:

```bash
$ tmutil listlocalsnapshots /
com.apple.TimeMachine.2018-04-30-165525
com.apple.TimeMachine.2018-04-30-175518
com.apple.TimeMachine.2018-04-30-185503
com.apple.TimeMachine.2018-04-30-195506
com.apple.TimeMachine.2018-04-30-205509
com.apple.TimeMachine.2018-04-30-215522
com.apple.TimeMachine.2018-04-30-225512
com.apple.TimeMachine.2018-04-30-235517
com.apple.TimeMachine.2018-05-01-005520
com.apple.TimeMachine.2018-05-01-015548
com.apple.TimeMachine.2018-05-01-025524
```

You can use `tmutil` to [compare and restore](http://krypted.com/mac-os-x/ins-outs-using-tmutil-backup-restore-review-time-machine-backups/), or simply Time Machine, but the files are available right there on the filesystem, I just had to copy my missing files back into the right places from the local snapshot dir:

```bash
$ cd /Volumes/com.apple.TimeMachine.localsnapshots/Backups.backupdb/James’s\ iMac/2018-05-01-025524/Macintosh\ HD/usr/local/

james@Jamess-iMac: /Volumes/com.apple.TimeMachine.localsnapshots/Backups.backupdb/James’s iMac/2018-05-01-025524/Macintosh HD/usr/local
$ ls
Caskroom      Frameworks    MacGPG2       etc           lib           opt           remotedesktop share
Cellar        Homebrew      bin           include       man           pear          sbin          var
```

Phew. All fixed.

Do I like APFS?

<video width="240" height="240" autoplay muted loop playsinline poster="/assets/images/bale.gif">
  <source src="/assets/images/bale.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

[^fn-bad-code]: Er, poorly written.
[^fn-ref-link]: Referral link.

***
