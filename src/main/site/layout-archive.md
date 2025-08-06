---
title: Layout Archive
summary: I've seen a few people do this and I thought it was a pretty neat idea! I don't know how much I'll change my layout, but we'll see how this goes!
imgLink: '/assets/images/about/archive/'
displayOrder: 3
permalink: '/layout-archive/index.html'
---

{% set altText = site.layout_archive.altText %}
{% for l in site.layout_archive.layouts %}
## {{ l.date }} {.layout-archive}

{{ l.desc | markdownify | safe }}

[![{{ altText + l.date }}]({{ imgLink + l.img }}){.preview-img {{ ".mb-4" if not loop.last }}}]({{ imgLink + l.img }})

{% endfor %}