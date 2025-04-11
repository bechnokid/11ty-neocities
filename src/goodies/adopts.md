---
title: Adopts
displayOrder: 2
description: Little creatures that I found from other sites that I decided to adopt.
freezeframe: true
---
{% set array = goodies.graphics.adopts %}
{% set imgLink = array.imgSrc %}

## Toybox

{% galleryBox { markdown: { inline: true }, sidebarClass: 'mb-4', contentClass: 'align-items-baseline' } %}
{% for item in array.toybox %}[![{{ item.alt }}]({{ imgLink + item.src }}){{ "{.freezeframe}" if item.freezeframe }}]({{ item.url}}){.mx-1}{% endfor %}
{% endgalleryBox %}

## Adopts

{% galleryBox { markdown: { inline: true }, contentClass: 'justify-content-center align-items-center adopts' } %}
{% for item in array.adoptables %}[![{{ item.alt }}]({{ imgLink + item.src }}){{ "{.freezeframe}" if item.freezeframe }}]({{ item.url}}){.mx-1}{% endfor %}
{% endgalleryBox %}
