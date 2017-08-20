---
layout: post
title: Jackson ObjectMapper to pretty print Json string
tags: [json, jackson ObjectMapper, html]
---

A couple weeks ago I used the Jackson ObjectMapper to convert an object into Json string to put in an email, like so:
```groovy
ObjectMapper objectMapper = new ObjectMapper()
String jsonStr = objectMapper.writeValueAsString(myObject)
```
While it did work turning the object into a Json string, it looked like this in the email:<!--more-->
<br />
![flat json string]({{ site.baseurl }}/assets/images/posts/jackson-objectmapper/flat-json.png)

It worked, BUT I wanted to make it stand up for readability, you know, like all the pretty Json strings you see on the Internet.

To make that work, I did something like this:
```groovy
String jsonStr = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(myObject)
```
It somehow didn't make the Json string stand up in my email.

To test if the code worked at all, I printed the string out in the terminal. And it looked perfect in the terminal:
<br />
![terminal json string]({{ site.baseurl }}/assets/images/posts/jackson-objectmapper/terminal-prettyprint.png)

So something else was causing the pretty print not working in the email. Could it be the HTML code that I wrapped the Json string in?
```
String emailContent = "<html><body><h4>Client Detail:</h4><p>$jsonStr</p></body></html>"
```
After some research and experiment, I replaced the <p> tag with the <pre> tag, like so:
```
<pre>$jsonStr</pre>
```
And then some miracle happened. The Json string stood up with pride in the email:
<br />
![stand json string]({{ site.baseurl }}/assets/images/posts/jackson-objectmapper/stand-json.png)

But <strong>WHY</strong>? According to the [w3c documentation](https://www.w3.org/TR/html401/struct/text.html#edef-PRE):
> The PRE element tells visual user agents that the enclosed text is "preformatted". When handling preformatted text, visual user agents:
* May leave white space intact.
* May render text with a fixed-pitch font.
* May disable automatic word wrap.
* Must not disable bidirectional processing.

Ha!
