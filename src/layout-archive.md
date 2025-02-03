---
title: Layout Archive
layout: 'layouts/basic.html'
css: 'basic'
summary: I've seen a few people do this and I thought it was a pretty neat idea! I don't know how much I'll change my layout, but we'll see how this goes!
imgLink: '/assets/images/about/archive/'
tags:
  - nav
  - main
displayOrder: 5
---

<style>
  img.layout {
    width: 400px;
    height: 200px;
    object-fit: cover;
    object-position: top center;
  }
</style>

{% for l in site.layout_archive.layouts %}
## {{ l.date }}

{{ l.desc | markdownify | safe }}

<a href='{{ (imgLink + l.img) }}'><img src='{{ (imgLink + l.img) }}' class='layout {{ 'mb-4' if not loop.last }}' alt='{{ altText + l.date }}'></a>

{% endfor %}