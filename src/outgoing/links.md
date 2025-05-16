---
title: Links
freezeframe: true
displayOrder: 31
permalink: '/links/index.html'
flashing: true
---

## Fellow Netizens

Here are some sites whose webmasters are friends, affiliates, or people who I think are just cool in general!

If you already added my button to your site, let me know and I'll add you here!

{% galleryBox { markdown: { inline: true }, sidebarClass: 'mb-4', contentClass: 'justify-content-center align-items-center' } %}
{% for item in netizens %}{% imgWithLink imgLink + item.src, item.link, { markdown: true, alt: altText + item.name, cls: 'mx-1', imgCls: 'freezeframe' if item.freezeframe } %}{% endfor %}
{% endgalleryBox %}

## Resources

<table class='resources'>{% for item in resources %}<tr><td><a href='{{ item.url }}'>{{ item.name }}</a></td><td class='td-desc'>{{ item.desc }}</td></tr>{% endfor %}</table>

## Made Possible By

{% for link in credits %}
- {% if link.link %}[{% endif %}{{ link.name | markdownifyInline | safe }}{% if link.link %}]( {{ link.link }}){% endif %}{% if link.desc %} ({{ link.desc }}){% endif %}
{% endfor %}