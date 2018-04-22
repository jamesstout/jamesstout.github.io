---
layout: single
title: OPML to Markdown
date:   2018-04-22 16:29:01 +0800
categories: code
tags: podcasts overcast python opml markdown
excerpt: "How to convert OPML to Markdown."
---

When you export your podcast subscriptions from [Overcast](https://overcast.fm/), you get an [OPML](https://en.wikipedia.org/wiki/OPML) file something like this:

<script src="https://gist.github.com/jamesstout/a4050fdfda4f1fad5d5637ff35293549.js"></script>

> warning ""
> Note that the file contains usernames and passwords in the feed URL

I wanted to convert the OPML to a Markdown list. Something like this:

```markdown
* [text](htmlUrl) [RSS](xmlUrl)
```

Well a little fancier, I wanted a [FontAwesome](https://fontawesome.com/icons/rss-square?style=solid) RSS SVG icon as the feed link:

```markdown
* [text](htmlUrl) <a style="color:#fa9b39" href="xmlURL" itemprop="sameAs">
<i class="fas fa-fw fa-rss-square" aria-hidden="true"></i></a>
```

I customized a [Python script](https://gist.github.com/domdavis/9988867) by Dom Davis to:

* Output an unordered list instead of headers.
* Sort the list alphabetically.
* In addition to the title (`text`)
  * extract the feed URL (`xmlUrl`)
  * and the podcast home page (`htmlUrl`)
* Strip username:password from feed URLs.
* Strip `(Ad-Free)` from titles as they made each line too long.

<script src="https://gist.github.com/jamesstout/39405a465e94bde0c6478a1a1dcf64f4.js"></script>

This generates the Markdown for you to paste into your post:
<script src="https://gist.github.com/jamesstout/213b9376d740b8b2234d1e4a7f3025b3.js"></script>

> info "TIP"
> To remove the real username:password from `opml2md-py` before posting the gist, a little `sed`:

```bash
sed -i '' "s/passwd = .*/passwd = \"username:password@\"/" opml2md.py
```
