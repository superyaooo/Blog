---
layout: post
title: Custom subdomain for your Github project pages site
tags: [github, github pages, dreamhost]
---

I recently built my technical blog via Github Pages. Since I have my personal website at <em>yaowangdev.com</em>, I wanted to give my technical blog a custom domain as <em><strong>blog</strong>.yaowangdev.com</em>.

Because it's a project pages site instead of a user pages site <!--more--> (see differences [here](https://help.github.com/articles/user-organization-and-project-pages/)), and the custom domain I wanted is a subdomain of a root domain that is fully hosted on Dreamhost, I ran into some confusions while trying to make it work. I figured I'd write a post to save some head scratches and face pulling for those that are in the same situation.

If you haven't read Github's documentation on using custom domains, I suggest you [read it first](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) to get a general understanding. In my case, I wanted to set up a custom subdomain <em>blog.yaowangdev.com</em>. Here's what I did that made it work:
* Follow Github's warning and add the custom subdomain to the Github Pages setting first, see documentation [here](https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/).
![github warning]({{ site.baseurl }}/assets/images/posts/customdomainwarning.png)
* Then login to Dreamhost where your personal website is hosted (Dreamhost also has documentation on how to add a subdomain, read it [here](https://help.dreamhost.com/hc/en-us/articles/215457827-How-do-I-add-a-subdomain-)). Since Github already hosts the blog content, we need to add the subdomain as a custom DNS record to point to the actual Github server. To do that:
    * Go to <strong>Manage Domains</strong>
    * Find the domain you want to add the subdomain to, in my case it's <em>yaowangdev.com</em>
    * Click <strong>DNS</strong> under the domain, find the section to add a custom DNS record:
    ![add DNS record]({{ site.baseurl }}/assets/images/posts/DNSdreamhost.png)
    * For <strong>Name</strong>, put down your subdomain name only (in my case it's "blog")
    * for <strong>Type</strong> select "CNAME"
    * then for <strong>Value</strong> put down "<strong>YOUR-GITHUB-USERNAME</strong>.github.io" (in my case it's "superyaooo.github.io")
    * Click <strong>Add Record Now!</strong> and we're good to go!
* Wait with patience, <strong>patience</strong>! This step is very important because your DNS needs time to propagate. Do not keep refreshing your subdomain url because you'll see a 404 page for quite a while (a few hours in my case)...Go do something fun instead.

Note that before the DNS finishes its propagation, on your Github Pages settings you will see a warning stating that your site's DNS settings are using a custom subdomain that's set up as an A record, and to change this to a CNAME - even though you <strong>did</strong> add the subdomain as a CNAME record. This warning will go away and your site will be up and running with the custom domain once your DNS is propagated. Enjoy!
