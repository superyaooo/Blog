---
layout: default
title: Search by Tags
---
<div>
{% for tag in site.tags %}
    <div class = "tag"><a href="#{{ tag[0] | slugify }}">{{ tag[0] }} [{{ tag[1].size }}]</a></div>
{% endfor %}
</div>

<br/>

<div>
{% for tag in site.tags %}
    <h3 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h3>
    <ul>
    {% for post in tag[1] %}
        <a href="{{ site.baseurl }}{{ post.url }}">
            <li>
                {{ post.title }}
                <small>{{ post.date | date_to_long_string }}</small>
            </li>
        </a>
    {% endfor %}
    </ul>
{% endfor %}
</div>
