---
layout: default
title:  All Posts &infin;
index: 1
allposts: true
---
<div>
{% for p in site.posts %}
    <div class="excerpt-block">
        <h3>{{ p.title }}</h3>
        <p>{{ p.excerpt }}</p>
        <a href="{{ site.baseurl }}{{ p.url }}"> >> Read more... </a>
    </div>
{% endfor %}
</div>
