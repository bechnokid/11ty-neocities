---
title: Adopts
displayOrder: 2
description: Little creatures that I found from other sites that I decided to adopt.

freezeframe: true
---
<style>.adopts > * {max-width:150px;margin:0 .25rem}</style>
{% set array = goodies.graphics.adopts %}
{% set imgLink = array.imgSrc %}

## Toybox

{% galleryBox { sidebarClass: 'mb-4', contentClass: 'align-items-baseline' } %}
{% for item in array.toybox %}
<a href='{{ item.url  }}' class='mx-1' ><img src='{{ imgLink + item.src }}' alt='{{ item.alt }}'{{ ' class=freezeframe' if item.freezeframe }}>
{% endfor %}
{% endgalleryBox %}

## Adopts

{% galleryBox { contentClass: 'justify-content-center align-items-center adopts' } %}
{% for item in array.adoptables %}
[![{{ item.alt }}]({{ imgLink + item.src }})]({{ item.url }})
{% endfor %}
{% endgalleryBox %}
