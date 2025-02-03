---
title: Graphics
displayOrder: 1
description: A hoard of all the pretty graphics that I personally enjoy.
freezeframe: true
altLinkText: '. Clicking on the image leads to the source'
imgSrc: '/assets/images/goodies/'
---

<style>
  main .content {
    max-height: 400px;
    overflow-y: auto;
  }

  .content > * {
    margin: .25rem;
  }

  .btns > * {
    height: 31px;
  }
</style>

{% macro detailsMacro(header, src, array, open = false) %}
<details {{"open" if open }}>
<summary class="h3 details">{{ header }}</summary>

<div class='sidebar mb-3'><div class='content d-flex flex-wrap justify-content-center align-items-center p-3 {% if header == 'Blinkies' %}freezeframe{% endif %}'>
{% simpleGallery imgSrc + src, array %}
</div></div>

</details>
{% endmacro %}

## Graphics I Collected

{{ detailsMacro("Web Badges", 'web_badges/', webBadges, true) }}
{{ detailsMacro("88x31 Buttons",  'site/', buttons) }}
{{ detailsMacro("Blinkies", "blinkies/", blinkies) }}
{{ detailsMacro("Stamps", "stamps/", stamps) }}

## Graphics I Made

{{ detailsMacro("Blinkies", "blinkies/", myBlinkies, true) }}
{{ detailsMacro("88x31 Buttons", "site/", myBtns) }}
{{ detailsMacro("Stamps", "stamps/", myStamps) }}