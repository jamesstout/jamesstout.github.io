var store = [{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll"],
        "tags": [],
        "url": "https://stouty.xyz/jekyll/2018/04/01/welcome-to-jekyll/",
        "teaser":null},{
        "title": "Automate SHA Checksum Checks For Asuswrt-Merlin Firmware With Hazel",
        "excerpt":"When a new firmware is released by Asuswrt-Merlin, the download comes with a checksum file (sha256sum.sha256) enabling you to check the validity of the firmware you downloaded. You could do this manually: james@Jamess-iMac: ~/Downloads/RT-AC66U_380.70_beta1-gc8353dc $ shasum -a 256 -c sha256sum.sha256 RT-AC66U_380.70_beta1-gc8353dc.trx: OK However, I automated the check with Hazel and...","categories": ["automation"],
        "tags": ["hazel","asuswrt-merlin","checksum","shasum","shell","AppleScript","macOS"],
        "url": "https://stouty.xyz/automation/2018/04/04/hazel/",
        "teaser":null},{
        "title": "Adobe Shenanigans",
        "excerpt":"What on Earth are Adobe up to? I found a random folder in my ~/.gitignore-boilerplates repo (created by gibo): james@Jamess-iMac: ~/.gitignore-boilerplates on master $ ls -ld */ drwxr-xr-x 10 james staff 320 Apr 15 00:54 .git/ drwxr-xr-x 3 james staff 96 Mar 17 15:09 .github/ drwxr-xr-x 61 james staff 1952...","categories": ["macOS"],
        "tags": ["adobe","adobegcclient","adobedownload"],
        "url": "https://stouty.xyz/macos/2018/04/15/adobe-shenanigans/",
        "teaser":null},{
        "title": "First and Twenty",
        "excerpt":"First &amp; 20 - well, 28 now (on an iPhone 8).   Initially inspired by the (now defunct) First &amp; 201.    My current iPhone 8 Home Screen                    A Collection of iPhone &amp; iPad Home Screens from some very talented designers, developers and tech writers. &#8617;           ","categories": ["iOS"],
        "tags": ["iOS","apps"],
        "url": "https://stouty.xyz/ios/2018/04/15/first-and-twenty/",
        "teaser":null},{
        "title": "Podcasts",
        "excerpt":"I listen to quite a few podcasts. My podcatcher of choice is Overcast1 from Marco Arment. If you’re interested in how I generated this list, see my next post. Here’s the list… 5by5 at the Movies A Cast of Kings - A Game of Thrones Podcast A STORM OF SPOILERS...","categories": ["podcasts"],
        "tags": ["podcasts","overcast","python","OPML"],
        "url": "https://stouty.xyz/podcasts/2018/04/22/podcasts/",
        "teaser":null},{
        "title": "OPML to Markdown",
        "excerpt":"When you export your podcast subscriptions from Overcast, you get an OPML file something like this: Note that the file contains usernames and passwords in the feed URL I wanted to convert the OPML to a Markdown list. Something like this: * [text](htmlUrl) [RSS](xmlUrl) Well a little fancier, I wanted...","categories": ["code"],
        "tags": ["podcasts","overcast","python","OPML","markdown"],
        "url": "https://stouty.xyz/code/2018/04/22/opml-to-markdown/",
        "teaser":null},{
        "title": "Westworld: Eight Lingering Questions from Season 1",
        "excerpt":" ","categories": ["links"],
        "tags": ["link"],
        "url": "https://stouty.xyz/links/2018/04/22/westworld-catchup/",
        "teaser":null},{
        "title": "Prince estate releases original version of 'Nothing Compares 2 U'",
        "excerpt":"          [Link]  ","categories": ["music"],
        "tags": ["music","youtube","prince"],
        "url": "https://stouty.xyz/music/2018/04/22/prince/",
        "teaser":null},{
        "title": "APFS Snapshots Saved The Day",
        "excerpt":"I had a shocker earlier with an out of control1 shell script that was supposed to tidy up a load of empty directories on my Mac. Just in my home dir I had nearly 18,000 empty directories: james@Jamess-iMac: ~ $ find . -not \\( -name .svn -prune -o -name .git...","categories": ["macOS"],
        "tags": ["APFS","macOS","snapshots","filesystems","tmutil"],
        "url": "https://stouty.xyz/macos/2018/05/01/apfs-snapshots/",
        "teaser":null},{
        "title": "Essential macOS Software: Suspicious Package",
        "excerpt":"I always try to view package contents when I download a .pkg file, with something like Pacifist. The other day, doing that installed some malware: I hadn’t run it, just opened in Pacifist. Bitdefender caught and deleted it, but it’s the first time I’ve seen malware on my Mac. After...","categories": ["macOS"],
        "tags": ["macOS","software","malware"],
        "url": "https://stouty.xyz/macos/2018/05/05/suspicious-package/",
        "teaser":null},{
        "title": "Creative Selection: Inside Apple's Design Process During the Golden Age of Steve Jobs",
        "excerpt":" ","categories": ["links"],
        "tags": ["link"],
        "url": "https://stouty.xyz/links/2018/07/08/creative-selection/",
        "teaser":null},{
        "title": "Neofetch",
        "excerpt":"Neofetch is a command-line system information tool written in bash 3.2+. Neofetch displays information about your operating system, software and hardware in an aesthetic and visually pleasing way. Here’s my MacBook Air info: Neofetch supports almost 150 different operating systems. From Linux to Windows, all the way to more obscure...","categories": ["macOS"],
        "tags": ["neofetch","github"],
        "url": "https://stouty.xyz/macos/2018/07/08/neofetch/",
        "teaser":null},{
        "title": "HTTP vs HTTPS Test",
        "excerpt":"   Encrypted Websites Protect Our Privacy and are Significantly Faster.    HTTP vs HTTPS Test     ","categories": ["internet"],
        "tags": ["https"],
        "url": "https://stouty.xyz/internet/2018/07/08/httpvshttps/",
        "teaser":null},{
        "title": "Debugging PHP with VS Code, Vagrant and Xdebug",
        "excerpt":"How to configure VS Code and Xdebug to debug PHP1 running in a Vagrant box.     Finally:    [Biggify]                    What? No HTTPS PHP.net? Come on… &#8617;           ","categories": ["webdev"],
        "tags": ["vagrant","vscode","php","xdebug"],
        "url": "https://stouty.xyz/webdev/2018/07/14/vagrant-vscode-php-xdebug/",
        "teaser":null},{
        "title": "Reverse Engineering HKBN Speed Test for macOS",
        "excerpt":"HKBN seem to no longer have a macOS app to test local broadband speeds, only Windows. They previously had an app called HKBNLocalSpeedTest. Sure you could just use speedtest.net, but I wondered if I could reverse engineer their old app? Alas I no longer have the app, but analysed it...","categories": ["macOS"],
        "tags": ["HKBN","macOS","iperf","upnpc","bash","AppleScript","speedtest"],
        "url": "https://stouty.xyz/macos/2018/08/18/hkbn/",
        "teaser":null},{
        "title": "asciinema",
        "excerpt":"I’ve been playing around with asciinema: Record and share your terminal sessions, the right way. Forget screen recording apps and blurry video. Enjoy a lightweight, purely text-based approach to terminal recording. It’s simple to install1 and use and has a few sharing and embedding options. Here’s me starting up a...","categories": ["macOS"],
        "tags": ["terminal","macOS","bash"],
        "url": "https://stouty.xyz/macos/2018/09/20/asciinema/",
        "teaser":null},{
        "title": "Dotfiles",
        "excerpt":"An excellent list of dotfile resources on GitHub. What are dotfiles? (I can’t believe I’m linking to Quora) In UNIX file systems, dotfiles are text-based configurations files that stores settings of almost every application, service and tool running on your system. These files control the behavior of applications from boot...","categories": ["unix"],
        "tags": ["terminal","macOS","bash"],
        "url": "https://stouty.xyz/unix/2019/09/30/dotfiles/",
        "teaser":null},{
        "title": "Nextcloud Installation Scripts",
        "excerpt":"Some great shell scripts from Nextcloud.   :boom: #DropDropbox  ","categories": ["unix"],
        "tags": ["terminal","bash","nextcloud"],
        "url": "https://stouty.xyz/unix/2019/09/30/nextcloud-installation-scripts/",
        "teaser":null},{
        "title": "Mac Pro Pricing",
        "excerpt":"Back in June 2019, Apple announced the new Mac Pro: Designed for maximum performance, expansion and configurability, the all-new Mac Pro features workstation-class Xeon processors up to 28 cores, a high-performance memory system with a massive 1.5TB capacity, eight PCIe expansion slots and a graphics architecture featuring the world’s most...","categories": ["apple","hardware"],
        "tags": ["apple","Mac Pro","iMac Pro","Pro Display XDR"],
        "url": "https://stouty.xyz/apple/hardware/2019/12/13/mac-pro/",
        "teaser":null},{
        "title": "Managing OneSignal Tags",
        "excerpt":"I use OneSignal to send push notifications to my iOS app HKWarnings. It’s great, fast and has a very active open source community on GitHub, even I’ve contributed. Anyway, it’s been free for about 5(?) years, but every startup eventually needs to make money, so they recently announced paid plans...","categories": ["unix","iOS"],
        "tags": ["onesignal","tagging","push notifications","php","ios"],
        "url": "https://stouty.xyz/unix/ios/2019/12/14/onesignal-tags/",
        "teaser":null},{
        "title": "A Night At The Hip-Hopera",
        "excerpt":"Your yearly reminder that A Night At The Hip-Hopera by The Kleptones is available in FLAC format.   Lay back and hit the playback:   /assets/images/posts/a-night-at-the-hip-hopera/layback2.mp3  ","categories": ["music"],
        "tags": ["kleptones","flac"],
        "url": "https://stouty.xyz/music/2019/12/14/a-night-at-the-hip-hopera/",
        "teaser":null},{
        "title": "Automatically exclude development dependencies from Apple Time Machine backups",
        "excerpt":"Asimov is a very handy tool from Steve Grunwell that scans your home directory for development dependencies for Node, CocoaPods etc, then excludes them from Time Machine backups.  ","categories": ["macOS"],
        "tags": ["Time Machine"],
        "url": "https://stouty.xyz/macos/2019/12/14/asimov/",
        "teaser":null},{
        "title": "Gitea - Git with a cup of tea",
        "excerpt":"Gitea is a painless self-hosted Git service. It’s a community managed lightweight code hosting solution written in Go, similar to GitHub, Bitbucket, and GitLab.1 I’ve used GitHub - code on someone else’s server.2 I’ve used Bitbucket - ditto. I’ve used GitLab on my NAS in a Docker container - but...","categories": ["git"],
        "tags": ["git","GitHub","GitLab","self-hosted","Go"],
        "url": "https://stouty.xyz/git/2020/03/11/gitea/",
        "teaser":null}]
