---
title: Awards
description: Awards that this site has collected.
summary: Hopefully one day, a webmaster will find my site cool enough to give an award to!
displayOrder: 1
---

<style>
  .content > * {
    margin: .25rem;
    max-width: 300px;
  }
</style>
{% set awards = goodies.graphics.awards.items %}
{% set imgSrc = goodies.graphics.awards.imgSrc %}
{% galleryBox { markdown: { inline: true }, contentClass: 'justify-content-center align-items-center' } %}
{% for item in awards %}[![{{ item.alt }}]({{ imgSrc + item.src }}){{ "{.freezeframe}" if item.freezeframe }}]({{ item.url }}){% endfor %}
{% endgalleryBox %}