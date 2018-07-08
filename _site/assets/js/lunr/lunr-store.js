var store = [{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when...","categories": ["jekyll"],
        "tags": [],
        "url": "https://stouty.xyz/jekyll/2018/04/01/welcome-to-jekyll/",
        "teaser":null},{
        "title": "Automate SHA Checksum Checks For Asuswrt-Merlin Firmware With Hazel",
        "excerpt":"When a new firmware is released by [Asuswrt-Merlin](https://asuswrt.lostrealm.ca/), the download comes with a checksum file (`sha256sum.sha256`) enabling you to check the validity of the firmware you downloaded.You could do this manually:```bashjames@Jamess-iMac: ~/Downloads/RT-AC66U_380.70_beta1-gc8353dc$ shasum -a 256 -c sha256sum.sha256RT-AC66U_380.70_beta1-gc8353dc.trx: OK```However, I automated the check with [Hazel](https://www.noodlesoft.com/) and a shell script.Setup Hazel rules...","categories": ["automation"],
        "tags": ["hazel","asuswrt-merlin","checksum","shasum","shell","AppleScript","macOS"],
        "url": "https://stouty.xyz/automation/2018/04/04/hazel/",
        "teaser":null},{
        "title": "Adobe Shenanigans",
        "excerpt":"_What on Earth are Adobe up to?_I found a random folder in my [`~/.gitignore-boilerplates`](https://github.com/github/gitignore) repo (created by [gibo](https://github.com/simonwhitaker/gibo)):```bashjames@Jamess-iMac: ~/.gitignore-boilerplates on master$ ls -ld */drwxr-xr-x 10 james staff 320 Apr 15 00:54 .git/drwxr-xr-x 3 james staff 96 Mar 17 15:09 .github/drwxr-xr-x 61 james staff 1952 Mar 17 15:09 Global/drwx------+ 3 root...","categories": ["macOS"],
        "tags": ["adobe","adobegcclient","adobedownload"],
        "url": "https://stouty.xyz/macos/2018/04/15/adobe-shenanigans/",
        "teaser":null},{
        "title": "First and Twenty",
        "excerpt":"First & 20 - well, 28 now (on an iPhone 8).Initially inspired by the (now defunct) [First & 20](https://web.archive.org/web/20150410090518/http://www.firstand20.com)[^fn-first]._My current iPhone 8 Home Screen_***[^fn-first]: A Collection of iPhone & iPad Home Screens from some very talented designers, developers and tech writers.","categories": ["iOS"],
        "tags": ["iOS","apps"],
        "url": "https://stouty.xyz/ios/2018/04/15/first-and-twenty/",
        "teaser":null},{
        "title": "Podcasts",
        "excerpt":"I listen to quite a few [podcasts](https://en.wikipedia.org/wiki/Podcast). My podcatcher of choice is [Overcast](https://overcast.fm/)[^fn-icon] from [Marco Arment](https://marco.org/).If you're interested in how I generated this list, see my [next post]({% post_url 2018-04-22-opml-to-markdown %}).Here's the list...* [5by5 at the Movies](http://5by5.tv/movies) * [A Cast of Kings - A Game of Thrones Podcast](http://www.slashfilm.com/) * [A...","categories": ["podcasts"],
        "tags": ["podcasts","overcast","python","OPML"],
        "url": "https://stouty.xyz/podcasts/2018/04/22/podcasts/",
        "teaser":null},{
        "title": "OPML to Markdown",
        "excerpt":"When you export your podcast subscriptions from [Overcast](https://overcast.fm/), you get an [OPML](https://en.wikipedia.org/wiki/OPML) file something like this:> warning \"\"> Note that the file contains usernames and passwords in the feed URLI wanted to convert the OPML to a Markdown list. Something like this:```markdown* [text](htmlUrl) [RSS](xmlUrl)```Well a little fancier, I wanted a...","categories": ["code"],
        "tags": ["podcasts","overcast","python","OPML","markdown"],
        "url": "https://stouty.xyz/code/2018/04/22/opml-to-markdown/",
        "teaser":null},{
        "title": "Westworld: Eight Lingering Questions from Season 1",
        "excerpt":"","categories": ["links"],
        "tags": ["link"],
        "url": "https://stouty.xyz/links/2018/04/22/westworld-catchup/",
        "teaser":null},{
        "title": "Prince estate releases original version of 'Nothing Compares 2 U'",
        "excerpt":"{% include video id=\"cpGA0azFdCs\" provider=\"youtube\" %}[[Link](https://www.dailydot.com/upstream/prince-estate-original-nothing-compares-2-u/)]","categories": ["music"],
        "tags": ["music","youtube","prince"],
        "url": "https://stouty.xyz/music/2018/04/22/prince/",
        "teaser":null},{
        "title": "APFS Snapshots Saved The Day",
        "excerpt":"I had a shocker earlier with an out of control[^fn-bad-code] shell script that was supposed to tidy up a load of empty directories on my Mac. Just in my home dir I had nearly 18,000 empty directories:```bashjames@Jamess-iMac: ~$ find . -not \\( -name .svn -prune -o -name .git -prune \\)...","categories": ["macOS"],
        "tags": ["APFS","macOS","snapshots","filesystems","tmutil"],
        "url": "https://stouty.xyz/macos/2018/05/01/apfs-snapshots/",
        "teaser":null},{
        "title": "Essential macOS Software: Suspicious Package",
        "excerpt":"I always try to view package contents when I download a `.pkg` file, with something like [Pacifist](https://www.charlessoft.com/). The other day, doing that installed some malware:I hadn't run it, just opened in Pacifist. [Bitdefender](https://www.bitdefender.com/solutions/antivirus-for-mac.html) caught and deleted it, but it’s the first time I've seen malware on my Mac.After that scare,...","categories": ["macOS"],
        "tags": ["macOS","software","malware"],
        "url": "https://stouty.xyz/macos/2018/05/05/suspicious-package/",
        "teaser":null},{
        "title": "Creative Selection: Inside Apple's Design Process During the Golden Age of Steve Jobs",
        "excerpt":"","categories": ["links"],
        "tags": ["link"],
        "url": "https://stouty.xyz/links/2018/07/08/creative-selection/",
        "teaser":null},{
        "title": "Neofetch",
        "excerpt":"[Neofetch](https://github.com/dylanaraps/neofetch) is a command-line system information tool written in bash 3.2+. >Neofetch displays information about your operating system, software and hardware in an aesthetic and visually pleasing way.Here's my MacBook Air info:>Neofetch supports almost 150 different operating systems. From Linux to Windows, all the way to more obscure operating systems...","categories": ["macOS"],
        "tags": ["neofetch","github"],
        "url": "https://stouty.xyz/macos/2018/07/08/neofetch/",
        "teaser":null},{
        "title": "HTTP vs HTTPS Test",
        "excerpt":">Encrypted Websites Protect Our Privacy and are Significantly Faster.[HTTP vs HTTPS Test](https://www.httpvshttps.com/)","categories": ["internet"],
        "tags": ["https"],
        "url": "https://stouty.xyz/internet/2018/07/08/httpvshttps/",
        "teaser":null}]
