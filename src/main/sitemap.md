---
title: 'Sitemap'
summary: Lost? Hopefully, this sitemap will help you navigate to where you want to go!
displayOrder: 3
permalink: '/sitemap/index.html'
hide: true
tags: main
---
{% macro collectionList(section, name = null) %}
## {{ (name or section) | title }} {.sitemap}
{% for link in collections[section] | sortCollectionByDisplayOrder %}
  {% if link.data.wip %}
### {{ link.data.title }} (WIP){.text-muted}
  {% elif link.data.subList %}
### {{ link.data.shortTitle or link.data.title }}
    {% for sublink in link.data.pagination.items | sortCollectionByDisplayOrder %}
- {% link sublink.url, sublink.data.shortTitle or sublink.data.title, { cls: sublink.data.navTag } %} {% if sublink.data.flashing == true %} {% icon 'alert-triangle' %}{% endif %}
    {% endfor %}
  {% elif link.data.title != 'Sitemap' %}
- [{{ link.data.shortTitle or link.data.title }}]({{ link.url }}){% if link.data.navTag %}{.{{link.data.navTag}}}{% endif %}{% if link.data.flashing == true %} {% icon 'alert-triangle' %}{% endif %}
  {% endif %}
{% endfor %}
{% endmacro %}

{{ collectionList('main') }}
{{ collectionList('content') }}
{{ collectionList('resources') }}
{{ collectionList('fun') }}
{{ collectionList('outgoing') }}