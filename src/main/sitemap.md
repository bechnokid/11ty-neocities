---
title: 'Sitemap'
summary: Lost? Hopefully, this sitemap will help you navigate to where you want to go!
displayOrder: 6
permalink: '/sitemap/index.html'
tags: nav
---

{% macro collectionList(section, name = null) %}
## {{ (name or section) | title }} {.sitemap}
{% for link in collections[section] | sortCollectionByDisplayOrder %}
  {% if link.data.wip %}
### {{ link.data.title }} (WIP){.text-muted}
  {% elif link.data.subList %}
### {{ link.data.shortTitle or link.data.title }}
    {% for subLink in link.data.pagination.items | sortCollectionByDisplayOrder %}
- [{{ subLink.data.shortTitle or subLink.data.title }}]({{ subLink.url }})
    {% endfor %}
      {% if not loop.last %}
<hr class='small'>
      {% endif %}
  {% else %}
- [{{ link.data.shortTitle or link.data.title }}]({{ link.url }})
  {% endif %}
{% endfor %}
{% endmacro %}

{{ collectionList('main') }}
{{ collectionList('content') }}
{{ collectionList('resources') }}
{{ collectionList('fun') }}
{{ collectionList('outgoing') }}