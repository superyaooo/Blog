---
layout: post
title: Byebye Dreamhost & Hello AWS
tags: [dreamhost, aws]
---

Today is the day I say farewell to Dreamhost and hello to AWS.<!--more-->

Ever since Dreamhost dropped support for [Passanger](https://www.phusionpassenger.com/docs/tutorials/what_is_passenger/) in their Shared Hosting plan, both my [personal website](yaowangdev.com) and BrokenToyStory site went down. In an effort to save money, I turned my personal site to a static website and moved it to an AWS S3 bucket. I then transferred my domains to AWS Route 53, and there I created a hosted zone for DNS setup. In order to get HTTPS on my site, I added AWS Cloudfront to the formula. Now I have a working personal site hosted on AWS with HTTPS!

Since AWS' official documents are already clear enough, I won't be adding any instructions here. The only silly thing I ran into was that I forgot to update the name servers on the domains after setting up the hosted zone, so for a short period I had a server not found error on my website because the domain was still pointing to dreamhost name servers (HA!).

Now time to figure out where to migrate BrokenToyStory to. 