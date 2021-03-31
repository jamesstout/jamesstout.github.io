var store = [{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll"],
        "tags": [],
        "url": "/jekyll/2018/04/01/welcome-to-jekyll/",
        "teaser": null
      },{
        "title": "Automate SHA Checksum Checks For Asuswrt-Merlin Firmware With Hazel",
        "excerpt":"When a new firmware is released by Asuswrt-Merlin, the download comes with a checksum file (sha256sum.sha256) enabling you to check the validity of the firmware you downloaded. You could do this manually: james@Jamess-iMac: ~/Downloads/RT-AC66U_380.70_beta1-gc8353dc $ shasum -a 256 -c sha256sum.sha256 RT-AC66U_380.70_beta1-gc8353dc.trx: OK However, I automated the check with Hazel and...","categories": ["automation"],
        "tags": ["hazel","asuswrt-merlin","checksum","shasum","shell","AppleScript","macOS"],
        "url": "/automation/2018/04/04/hazel/",
        "teaser": null
      },{
        "title": "Adobe Shenanigans",
        "excerpt":"What on Earth are Adobe up to? I found a random folder in my ~/.gitignore-boilerplates repo (created by gibo): james@Jamess-iMac: ~/.gitignore-boilerplates on master $ ls -ld */ drwxr-xr-x 10 james staff 320 Apr 15 00:54 .git/ drwxr-xr-x 3 james staff 96 Mar 17 15:09 .github/ drwxr-xr-x 61 james staff 1952...","categories": ["macOS"],
        "tags": ["adobe","adobegcclient","adobedownload"],
        "url": "/macos/2018/04/15/adobe-shenanigans/",
        "teaser": null
      },{
        "title": "First and Twenty",
        "excerpt":"First &amp; 20 - well, 28 now (on an iPhone 8).   Initially inspired by the (now defunct) First &amp; 201.    My current iPhone 8 Home Screen                    A Collection of iPhone &amp; iPad Home Screens from some very talented designers, developers and tech writers. &#8617;           ","categories": ["iOS"],
        "tags": ["iOS","apps"],
        "url": "/ios/2018/04/15/first-and-twenty/",
        "teaser": null
      },{
        "title": "Podcasts",
        "excerpt":"I listen to quite a few podcasts. My podcatcher of choice is Overcast1 from Marco Arment. If you’re interested in how I generated this list, see my next post. Here’s the list… 5by5 at the Movies A Cast of Kings - A Game of Thrones Podcast A STORM OF SPOILERS...","categories": ["podcasts"],
        "tags": ["podcasts","overcast","python","OPML"],
        "url": "/podcasts/2018/04/22/podcasts/",
        "teaser": null
      },{
        "title": "OPML to Markdown",
        "excerpt":"When you export your podcast subscriptions from Overcast, you get an OPML file something like this: Note that the file contains usernames and passwords in the feed URL I wanted to convert the OPML to a Markdown list. Something like this: * [text](htmlUrl) [RSS](xmlUrl) Well a little fancier, I wanted...","categories": ["code"],
        "tags": ["podcasts","overcast","python","OPML","markdown"],
        "url": "/code/2018/04/22/opml-to-markdown/",
        "teaser": null
      },{
        "title": "Westworld: Eight Lingering Questions from Season 1",
        "excerpt":" ","categories": ["links"],
        "tags": ["link"],
        "url": "/links/2018/04/22/westworld-catchup/",
        "teaser": null
      },{
        "title": "Prince estate releases original version of 'Nothing Compares 2 U'",
        "excerpt":"             [Link]  ","categories": ["music"],
        "tags": ["music","youtube","prince"],
        "url": "/music/2018/04/22/prince/",
        "teaser": null
      },{
        "title": "APFS Snapshots Saved The Day",
        "excerpt":"I had a shocker earlier with an out of control1 shell script that was supposed to tidy up a load of empty directories on my Mac. Just in my home dir I had nearly 18,000 empty directories: james@Jamess-iMac: ~ $ find . -not \\( -name .svn -prune -o -name .git...","categories": ["macOS"],
        "tags": ["APFS","macOS","snapshots","filesystems","tmutil"],
        "url": "/macos/2018/05/01/apfs-snapshots/",
        "teaser": null
      },{
        "title": "Essential macOS Software: Suspicious Package",
        "excerpt":"I always try to view package contents when I download a .pkg file, with something like Pacifist. The other day, doing that installed some malware: I hadn’t run it, just opened in Pacifist. Bitdefender caught and deleted it, but it’s the first time I’ve seen malware on my Mac. After...","categories": ["macOS"],
        "tags": ["macOS","software","malware"],
        "url": "/macos/2018/05/05/suspicious-package/",
        "teaser": null
      },{
        "title": "Creative Selection: Inside Apple's Design Process During the Golden Age of Steve Jobs",
        "excerpt":" ","categories": ["links"],
        "tags": ["link"],
        "url": "/links/2018/07/08/creative-selection/",
        "teaser": null
      },{
        "title": "Neofetch",
        "excerpt":"Neofetch is a command-line system information tool written in bash 3.2+. Neofetch displays information about your operating system, software and hardware in an aesthetic and visually pleasing way. Here’s my MacBook Air info: Neofetch supports almost 150 different operating systems. From Linux to Windows, all the way to more obscure...","categories": ["macOS"],
        "tags": ["neofetch","GitHub"],
        "url": "/macos/2018/07/08/neofetch/",
        "teaser": null
      },{
        "title": "HTTP vs HTTPS Test",
        "excerpt":"   Encrypted Websites Protect Our Privacy and are Significantly Faster.    HTTP vs HTTPS Test     ","categories": ["internet"],
        "tags": ["https"],
        "url": "/internet/2018/07/08/httpvshttps/",
        "teaser": null
      },{
        "title": "Debugging PHP with VS Code, Vagrant and Xdebug",
        "excerpt":"How to configure VS Code and Xdebug to debug PHP1 running in a Vagrant box.     Finally:                       What? No HTTPS PHP.net? Come on… &#8617;           ","categories": ["webdev"],
        "tags": ["vagrant","vscode","php","xdebug"],
        "url": "/webdev/2018/07/14/vagrant-vscode-php-xdebug/",
        "teaser": null
      },{
        "title": "Reverse Engineering HKBN Speed Test for macOS",
        "excerpt":"HKBN seem to no longer have a macOS app to test local broadband speeds, only Windows. They previously had an app called HKBNLocalSpeedTest. Sure you could just use speedtest.net, but I wondered if I could reverse engineer their old app? Alas I no longer have the app, but analysed it...","categories": ["macOS"],
        "tags": ["HKBN","macOS","iperf","upnpc","bash","AppleScript","speedtest"],
        "url": "/macos/2018/08/18/hkbn/",
        "teaser": null
      },{
        "title": "asciinema",
        "excerpt":"I’ve been playing around with asciinema: Record and share your terminal sessions, the right way. Forget screen recording apps and blurry video. Enjoy a lightweight, purely text-based approach to terminal recording. It’s simple to install1 and use and has a few sharing and embedding options. Here’s me starting up a...","categories": ["macOS"],
        "tags": ["terminal","macOS","bash"],
        "url": "/macos/2018/09/20/asciinema/",
        "teaser": null
      },{
        "title": "Dotfiles",
        "excerpt":"An excellent list of dotfile resources on GitHub. What are dotfiles? (I can’t believe I’m linking to Quora) In UNIX file systems, dotfiles are text-based configurations files that stores settings of almost every application, service and tool running on your system. These files control the behavior of applications from boot...","categories": ["unix"],
        "tags": ["terminal","macOS","bash"],
        "url": "/unix/2019/09/30/dotfiles/",
        "teaser": null
      },{
        "title": "Nextcloud Installation Scripts",
        "excerpt":"Some great shell scripts from Nextcloud.   :boom: #DropDropbox  ","categories": ["unix"],
        "tags": ["terminal","bash","nextcloud"],
        "url": "/unix/2019/09/30/nextcloud-installation-scripts/",
        "teaser": null
      },{
        "title": "Mac Pro Pricing",
        "excerpt":"Back in June 2019, Apple announced the new Mac Pro: Designed for maximum performance, expansion and configurability, the all-new Mac Pro features workstation-class Xeon processors up to 28 cores, a high-performance memory system with a massive 1.5TB capacity, eight PCIe expansion slots and a graphics architecture featuring the world’s most...","categories": ["apple","hardware"],
        "tags": ["apple","Mac Pro","iMac Pro","Pro Display XDR"],
        "url": "/apple/hardware/2019/12/13/mac-pro/",
        "teaser": null
      },{
        "title": "Managing OneSignal Tags",
        "excerpt":"I use OneSignal to send push notifications to my iOS app HKWarnings. It’s great, fast and has a very active open source community on GitHub, even I’ve contributed. Anyway, it’s been free for about 5(?) years, but every startup eventually needs to make money, so they recently announced paid plans...","categories": ["unix","iOS"],
        "tags": ["onesignal","tagging","push notifications","php","ios"],
        "url": "/unix/ios/2019/12/14/onesignal-tags/",
        "teaser": null
      },{
        "title": "A Night At The Hip-Hopera",
        "excerpt":"Your yearly reminder that A Night At The Hip-Hopera by The Kleptones is available in FLAC format.   Lay back and hit the playback:   /assets/images/posts/a-night-at-the-hip-hopera/layback2.mp3  ","categories": ["music"],
        "tags": ["kleptones","flac"],
        "url": "/music/2019/12/14/a-night-at-the-hip-hopera/",
        "teaser": null
      },{
        "title": "Automatically exclude development dependencies from Apple Time Machine backups",
        "excerpt":"Asimov is a very handy tool from Steve Grunwell that scans your home directory for development dependencies for Node, CocoaPods etc, then excludes them from Time Machine backups.  ","categories": ["macOS"],
        "tags": ["Time Machine"],
        "url": "/macos/2019/12/14/asimov/",
        "teaser": null
      },{
        "title": "Gitea - Git with a cup of tea",
        "excerpt":"Gitea is a painless self-hosted Git service. It’s a community managed lightweight code hosting solution written in Go, similar to GitHub, Bitbucket, and GitLab.1 I’ve used GitHub - code on someone else’s server.2 I’ve used Bitbucket - ditto. I’ve used GitLab on my NAS in a Docker container - but...","categories": ["git"],
        "tags": ["git","GitHub","GitLab","self-hosted","Go"],
        "url": "/git/2020/03/11/gitea/",
        "teaser": null
      },{
        "title": "Zoom for Mac Entitlements",
        "excerpt":"Zoom for macOS versions &lt; v4.6.9 had a very dodgy installer, detailed extensively by Patrick Wardle and by Felix Seele. The app itself had entitlements to circumvent the hardened runtime on the Mac: Per Patrick: However the com.apple.security.cs.disable-library-validation entitlement is interesting. In short it tells macOS, “hey, yah I still...","categories": ["macOS"],
        "tags": ["macOS","Zoom","security"],
        "url": "/macos/2020/04/05/zoom/",
        "teaser": null
      },{
        "title": "Recovering iTunes Playlists",
        "excerpt":"I moved my iTunes Music folder to a new disc, I don’t think I did it properly, so all my playlists were empty, the tracks in the exported playlist XML had new IDs and locations. There might be a way to recover using iTunes, but with a 250GB library, it’s...","categories": ["iTunes"],
        "tags": ["iTunes","PHP","playlists"],
        "url": "/itunes/2020/04/06/itunes-playlist-recovery/",
        "teaser": null
      },{
        "title": "Finding duplicate files",
        "excerpt":"I’ve been using PhotoSync to automatically transfer any new photos from my iPhone to my NAS. It’s a pretty wonderful app, here’s the NAS part: Securely backup photos &amp; videos directly from your iPhone, iPad and Android devices to any NAS, remote server or personal cloud over (S)FTP, SMB or...","categories": ["unix"],
        "tags": ["duplicates","unix","fdupes","fslint","find","photo sync","NAS"],
        "url": "/unix/2020/04/16/dupes/",
        "teaser": null
      },{
        "title": "Live Lounge Allstars - Times Like These",
        "excerpt":"             ","categories": ["music"],
        "tags": ["music","youtube","foo fighters"],
        "url": "/music/2020/04/25/times-like-these/",
        "teaser": null
      },{
        "title": "Synology DSM 6.2.3 Update",
        "excerpt":"I was thinking that there hadn’t been a DSM upgrade for my DS1817+ for a while. I check the update screen quite often: v6.2.2-24922-6 was released on 17th March 2020. Anyway, my system still says there is no new update. However, the release notes page says there is a new...","categories": ["synology"],
        "tags": ["synology","DSM 6.2.3","NAS"],
        "url": "/synology/2020/04/28/dsm/",
        "teaser": null
      },{
        "title": "Does My Site Need HTTPS?",
        "excerpt":"Does My Site Need HTTPS? Yes, yes it does. Also see: istlsfastyet.com and h2setup. I run a few sites, all over HTTPS, using SSL/TLS certificates from Let’s Encrypt: stouty.xyz - this site. git.stouty.xyz - my painless, self-hosted Git service. cloud.stouty.xyz - my self-hosted Nextcloud instance. hkwarnings.com - blog and server...","categories": ["internet"],
        "tags": ["HTTPS","SSL","web servers"],
        "url": "/internet/2020/04/28/ssl/",
        "teaser": null
      },{
        "title": "Using Git to Deploy a Static Website",
        "excerpt":"This site is static, built using Jekyll and the Minimal Mistakes theme. Once you have it set up, a new post is as simple as writing a new Markdown file, like this one, with the correct Front Matter: Then building: james@Jamess-iMac: ~/Projects/jamesstout.github.io on master[!?$] $ JEKYLL_ENV=production bundle exec jekyll build...","categories": ["webdev"],
        "tags": ["git","Jekyll","git hooks","deployment"],
        "url": "/webdev/2020/04/28/git-deploy/",
        "teaser": null
      },{
        "title": "Update to MobileDevice.framework on macOS Breaks Old GarageBand",
        "excerpt":"My old iMac isn’t supported by Mojave or Catalina, so I’m still on High Sierra. Whenever I update to a new iOS version, I get a prompt from iTunes saying A Software Update Is Required to Connect to Your iPhone, and I just blindly install. However, the latest install seems...","categories": ["macOS"],
        "tags": ["macOS","iTunes","GarageBand","MobileDevice.framework"],
        "url": "/macos/2020/04/29/mobile-device/",
        "teaser": null
      },{
        "title": "HKWarnings v5.0.0",
        "excerpt":"When I initially made HKWarnings universal and added an iPad interface, I based the interface on a MultipleDetailViews demo from Apple. That version is updated, I used the older code from 2010, so it’s 10 years old and built for iOS 3.2. Architecturally, there’s a Master ViewController that displays multiple...","categories": ["iOS"],
        "tags": ["iOS","HKWarnings","Xcode","iPad","UISplitViewController"],
        "url": "/ios/2020/05/04/hkwarnings/",
        "teaser": null
      },{
        "title": "Nextcloud Sync Client for Docker",
        "excerpt":"I’ve found the ‘native’ macOS Nextcloud client to be a bit flakey. It’s all Qt and C++ and times out all the time. I’m trying to replace Dropbox on my Mac, as they get up to all sorts of scummy behaviour, but it’s a little harder than expected. I mentioned...","categories": ["nextcloud"],
        "tags": ["Nextcloud","Docker","NAS","Synology","docker build","sync","Dockerfile","docker images","dive","docker layers"],
        "url": "/nextcloud/2020/05/08/nextcloud-sync/",
        "teaser": null
      },{
        "title": "Compress-Upload-CocoaLumberjack - My First CocoaPod",
        "excerpt":"I just published my first CocoaPod: Compress-Upload-CocoaLumberjack: Remote logging via NSURLSession transfer to upload compressed CocoaLumberjack logs to an HTTP server. james@Jamess-iMac: ~/Projects/Compress-Upload-CocoaLumberjack on master[?] $ pod trunk me - Name: James Stout - Email: stoutyhk@gmail.com - Since: May 7th, 20:14 - Pods: - Compress-Upload-CocoaLumberjack - Sessions: - May 7th,...","categories": ["iOS"],
        "tags": ["CocoaLumberjack","logging","remote logging","compression","CocoaPods","pod"],
        "url": "/ios/2020/05/09/compress-upload-cocoalumberjack/",
        "teaser": null
      },{
        "title": "A Quick Update on Zoom Code Signing",
        "excerpt":"A quick update to my previous post on Zoom security. Per @scotteh and @patrickwardle, you can still unsign the app and load any dylibs you like: Sure! a) Unsign (via --remove-signature) b) Load any dylibs 🤭 e.g. DYLD_INSERT_LIBRARIES=zoomzoom.dylib /Applications/zoomzoom.us .app/Contents/MacOS/zoom.us You&#39;ll have to (re)grant access to mic/webcam and notarization would...","categories": ["macOS"],
        "tags": ["macOS","Zoom","security","code signing","spctl"],
        "url": "/macos/2020/05/11/zoom-update/",
        "teaser": null
      },{
        "title": "A Jekyll Hook to Copy Pre-Built Site to Another Directory",
        "excerpt":"This site doesn’t build as a GitHub Page as it uses unsupported gems and plugins. So when I push to jamesstout.github.io.git I get build failures. My solution is to have two repositories, the source where I write and build the site, and a destination repo that points to the jamesstout.github.io.git...","categories": ["webdev"],
        "tags": ["jekyll","hooks","ruby","github.io","jekyll plugins"],
        "url": "/webdev/2020/05/11/copy-site-jekyll-hook/",
        "teaser": null
      },{
        "title": "Firebase Crashlytics - Are They Having a Laugh?",
        "excerpt":"Crash reporting is an important part of app development, you don’t want your app to crash on users, so when it does it’s important to know when and why and be able to fix the issue. I was a beta tester for Crashlytics back in 2012, exchanging emails with Wayne...","categories": ["iOS"],
        "tags": ["iOS","crash reporting","Firebase","Crashlytics"],
        "url": "/ios/2020/05/15/firebase-crashlytics/",
        "teaser": null
      },{
        "title": "Fixing Nextcloud Conflicting Files",
        "excerpt":"I made a bit of a mess with my Nextcloud sync yesterday. I have my Dropbox folder synced to my Mac Nextcloud folder, but not to the sync folder on my NAS. I thought I would save time and bandwidth by copying the folder from my Mac to my NAS...","categories": ["nextcloud"],
        "tags": ["nextcloud","bash","stat","find","sync"],
        "url": "/nextcloud/2020/05/17/nextcloud-conflicting-files/",
        "teaser": null
      },{
        "title": "Countly For iOS and Web Analytics",
        "excerpt":"I previously mentioned that I wasn’t too keen on all the things Firebase Crashlytics installed and would look at Countly as an alternative. Countly is impressive. They have loads of documentation, and support loads of platforms. They offer a paid Enterprise version or a free Community, self-hosted, option. I went...","categories": ["iOS"],
        "tags": ["iOS","webdev","crash logs","analytics crashlytics","firebase"],
        "url": "/ios/2020/05/18/countly/",
        "teaser": null
      },{
        "title": "Automate Docker Image Updates on Synology NAS",
        "excerpt":"I can’t believe it’s taken me this long to find Watchtower1 for Docker. My previous process for updating containers to the latest images was a weekly job that ran a script like this: logExt=\"$(date +%Y-%m-%d).log\" LOG_FILE=\"/var/services/homes/stouty/logs/$(basename \"$0\").$logExt\" # get list of all image:rev # not mariadb|redis as they cause issues...","categories": ["synology","docker"],
        "tags": ["synology","NAS","docker","automation","Shoutrrr","Telegram","Pushover"],
        "url": "/synology/docker/2021/03/31/automate-docker-updates/",
        "teaser": null
      }]
