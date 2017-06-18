---
layout: home
title: Home
home: true
---

<div class = "nav-block">
{% for page in site.pages %}
    {% if page.home %}
    {% else %}
        {% if page.title %}
            <a href = "{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a>
        {% endif %}
    {% endif %}
{% endfor %}
</div>
