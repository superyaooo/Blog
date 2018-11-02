---
layout: post
title: MacOS update broke Xcode Command Line Tool
tags: [xcode, git]
---
Once again, the good old Xcode Command Line Tool on my machine disappeared(broke?) after a recent MacOS update to Mojave.

Somehow, `xcode-select --install` quit working because the software "is not currently available from the Software Update server".<!--more--> Some posts on the internet suggested to download Xcode from the app store, which is > 6GB (How about NO?). After further searching, I ended up going to https://developer.apple.com/download/more/ and downloading Command Line Tools for Xcode only, without the actual Xcode.

And IT WORKED!!
