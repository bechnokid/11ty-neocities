---
title: Links
freezeframe: true
displayOrder: 31
permalink: '/links/index.html'
---

## Fellow Netizens

Here are some sites whose webmasters are friends, affiliates, or people who I think are just cool in general!

If you already added my button to your site, let me know and I'll add you here!

{% galleryBox { markdown: { inline: true }, sidebarClass: 'mb-4', contentClass: 'justify-content-center align-items-center' } %}
{% for link in netizenLinks %}[![{{ (altText + link.desc) if link.desc else (altText + link.name) }}]({{ imgLink + link.name }}.{{ link.type }}){{ "{.freezeframe}" if link.freezeframe }}](https://{{ link.name }}.{{ link.domain }}){.button-link .m-1}{% endfor %}
{% endgalleryBox %}

{% set array = site.fanlistings %}

## Fanlistings I Joined

{% galleryBox { markdown: { inline: true }, contentClass: 'fanlistings justify-content-center'} %}
{% for item in array.items %}[![{{ item.alt }}]({{ array.imgSrc + item.src }})]({{ item.link }}){.m-1}{% endfor %}
{% endgalleryBox %}

## Resources

<table class='resources'>{% for item in resourceLinks %}<tr><td><a href='{{ item.url }}'>{{ item.name }}</a></td><td class='td-desc'>{{ item.desc }}</td></tr>{% endfor %}</table>

## Made Possible By

{% for link in credits %}
- {% if link.url %}[{% endif %}{{ link.name | markdownifyInline | safe }}{% if link.url %}]( {{ link.url }}){% endif %}{% if link.desc %} ({{ link.desc }}){% endif %}
{% endfor %}