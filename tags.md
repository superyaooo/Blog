---
layout: default
title: Search by Tags &there4;
index: 2
---
<div>
{% for tag in site.tags %}
    <span class = "tag">
        <a href="#{{ tag[0] | slugify }}"> &raquo; {{ tag[0] }} <small>[{{ tag[1].size }}]</small></a>
    </span>
{% endfor %}
</div>

<br/>

<div>
{% for tag in site.tags %}
    <h3 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h3>
    <ul>
    {% for post in tag[1] %}
        <li>
            <a href="{{ site.baseurl }}{{ post.url }}"><span class="post-title">{{ post.title }}</span>
            <small class = "post-date">{{ post.date | date: "%B %-d, %Y" }}</small>
            </a>
        </li>
    {% endfor %}
    </ul>
{% endfor %}
</div>
