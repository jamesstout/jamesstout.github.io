---
layout: single
title: asciinema
date:   2018-09-20 01:56:01 +0800
categories: macOS
tags: terminal macOS bash
excerpt: "asciinema. Record and share your terminal sessions, the right way."
---

I've been playing around with [asciinema](https://asciinema.org/):

>Record and share your terminal sessions, the right way.
>
>Forget screen recording apps and blurry video. Enjoy a lightweight, purely text-based approach to terminal recording.

It's simple to [install](https://asciinema.org/docs/installation)[^fn-req] and [use](https://asciinema.org/docs/usage) and has a few [sharing and embedding](https://asciinema.org/docs/embedding) options.

Here's me starting up a [Vagrant](https://www.vagrantup.com/) box:

<script src="https://asciinema.org/a/MEjWz4OBlLHalz4xuyTHkCaSH.js" id="asciicast-MEjWz4OBlLHalz4xuyTHkCaSH" async data-preload="false" ></script>

A nice feature is being able to record some casts, before creating an account, then later, if you create an account, your recordings[^fn-id] associated with your account:

>Install ID is a random ID (UUID v4) generated locally when you run asciinema for the first time, and saved at $HOME/.config/asciinema/install-id. It’s purpose is to connect local machine with uploaded recordings, so they can later be associated with asciinema.org 15 account. This way we decouple uploading from account creation, allowing them to happen in any order.

[^fn-req]: Requires [Python 3](https://www.python.org/), or you could use a [Docker container](https://asciinema.org/docs/installation#running-in-docker-container).
[^fn-id]: From that specific machine.

***