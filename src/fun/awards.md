---
title: Awards
displayOrder: 1
description: Awards that this site has collected.
summary: Hopefully one day, a webmaster will find my site cool enough to give an award to!
---

<style>
  .content > * {
    margin: .25rem;
    max-width: 300px;
  }
</style>
{% galleryBox { contentClass: 'justify-content-center align-items-center' } %}
{% for item in items %}
[![{{ item.alt }}]({{ imgSrc + item.src }})]({{ item.url }})
{% endfor %}
{% endgalleryBox %}
