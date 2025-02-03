---
title: Artwork
pagination:
  data: collections.gallery
  size: 10
layout: "layouts/basic.html"
tags:
  - nav
  - content
pageType: gallery
summary: DeviantArt sucks now, so I'm putting my artwork here :')
displayOrder: 11
---

{% for gallery in galleries.data %}
[{{ gallery.title }}](../artwork/{{ gallery.title | slugify }}){.h2}
: {{ gallery.description }}
{% endfor %}