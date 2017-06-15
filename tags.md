---
layout: default
title: Search by Tags
---
<p>
{% for tag in site.tags %}
    <a href="#{{ tag[0] | slugify }}" class = "tag">{{ tag[0] }}</a>
{% endfor %}
</p>

<div>
{% for tag in site.tags %}
    <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
    <ul>
    {% for post in tag[1] %}
        <a href="{{ site.baseurl }}{{ post.url }}">
            <li>
                {{ post.title }}
                <small>{{ post.date | date_to_string }}</small>
            </li>
        </a>
    {% endfor %}
    </ul>
{% endfor %}
</div>
