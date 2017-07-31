---
layout: post
title: Configure Tomcat with Spring Tool Suite on Mac
tags: [tomcat, spring tool suite]
---

Earlier today when I resumed to work on a SpringMVC project, the local Tomcat server in Spring Tool Suite (aka. Spring STS) refused to start up <strong>AGAIN</strong>. Since I've had similar issues in the past and had gone through lots of trouble to make it work again, it's only wise to write a post on how to (re)configure Tomcat in Spring STS on a Mac, to save some time in the future for me or anyone that's reading this post. <!--more-->

Let's get started:
1. If you already have a Tomcat server configured that stopped working all a sudden in Spring STS, delete the old server. Your <strong>Servers</strong> tab in STS should look like this - just like when you first started:
<br />
![no servers]({{ site.baseurl }}/assets/images/posts/tomcat-sts/no-servers.png)
2. Click the link to add a new server. Select the Tomcat version you want. Use localhost as the host name, the server name should appear automatically like in the image below:
<br />
![add new server]({{ site.baseurl }}/assets/images/posts/tomcat-sts/new-server.png)
3. (If the <strong>Next</strong> button is clickable to you, skip this step and go to  step 4.) If the server name doesn't auto fill and it won't allow you to fill it in, you probably selected the same version as your previously corrupted server. In this case, restart your computer and STS. If the problem persists, the easiest and hardcore way is to reinstall/re-download STS. Do it and restart your Mac to avoid any weird cache issues.
4. After selecting the Tomcat version, you will come to this interface to set  your Tomcat Installation Directory. The directory is the path where Tomcat is installed on your machine. Continue to step 5 for details on setting the directory.
<br />
![tomcat installation directory]({{ site.baseurl }}/assets/images/posts/tomcat-sts/tomcat-installation-dir.png)
5. Install Tomcat via Homebrew (see general homebrew instructions [here](https://brew.sh)) if you haven't already. Then find out where Tomcat is installed by `brew ls tomcat` , in my case, the Tomcat installation directory is `/usr/local/Cellar/tomcat/8.5.16_1/libexec` . Go ahead and put down your Tomcat path as shown in step 4 and click <strong>Next</strong>.
<br />
![find tomcat]({{ site.baseurl }}/assets/images/posts/tomcat-sts/find-tomcat.png)
6. Add your project and click <strong>Finish</strong>.
<br />
![add project]({{ site.baseurl }}/assets/images/posts/tomcat-sts/add-project.png)
7. <strong>Et voilà!</strong> You have a running server now.
<br />
![running server]({{ site.baseurl }}/assets/images/posts/tomcat-sts/up-running.png)
