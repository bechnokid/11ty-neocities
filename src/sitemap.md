---
title: 'Sitemap'
layout: "layouts/basic.html"
css: "basic"
summary: Lost? Hopefully, this sitemap will help you navigate to where you want to go!
tags:
  - nav
  - main
displayOrder: 6
---

<style>
  section { margin: 1rem 0 1.25rem !important }
</style>

{% macro collectionList(section, name = null) %}
## {{ (name or section) | title }}
{% for link in collections[section] | sortCollectionByDisplayOrder %}
  {% if link.data.wip %}
### {{ link.data.title }} (WIP){.text-muted}
  {% elif link.data.listType %}
### {{ link.data.shortTitle if link.data.useShortTitle else link.data.title }}
    {% for subLink in collections[link.data.listType] | sortCollectionByDisplayOrder %}
- [{{ subLink.data.shortTitle if subLink.data.useShortTitle else subLink.data.title }}]({{ subLink.url }})
      {% if loop.last %}
<hr class='small'>
      {% endif %}
    {% endfor %}
  {% else %}
- [{{ link.data.shortTitle if link.data.useShortTitle else link.data.title }}]({{ link.url }})
  {% endif %}
{% endfor %}
{% endmacro %}

{{ collectionList("main") }}
{{ collectionList("content") }}
{{ collectionList("goods", "Fun Stuff") }}
{{ collectionList("outgoing") }}