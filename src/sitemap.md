---
title: 'Sitemap'
layout: "layouts/basic.html"
css: "basic"
summary: Lost? Hopefully, this sitemap will help you navigate to where you want to go!
tags: ['nav', 'main']
displayOrder: 6
---

<style>
  section {
    margin: 1rem 0 1.25rem !important;
  }
</style>

{% macro collectionList(name, fullName = null) %}
## {{ (fullName or name) | title }}
{% for link in collections[name] | sortCollectionByDisplayOrder %}
  {% if collections[link.data.pageType] %}
    {% if link.data.title == 'Artwork' %}
### {{ link.data.title }} (WIP){.text-muted}
    {% else %}
### {{ link.data.title }}
      {% for link in collections[link.data.pageType] | sortCollectionByDisplayOrder %}
- [{{ link.data.title }}]({{ link.url }})
      {% endfor %}
    {% endif %}
  {% else %}
    {% if link.data.title != 'Sitemap' %}
- [{{ 'Splash' if link.data.title == 'Welcome' else link.data.title }}]({{ link.url }})
    {% endif %}
  {% endif %}

{% endfor %}
{% endmacro %}

{{ collectionList("main") }}
{{ collectionList("content", "Content") }}
{{ collectionList("goods", "Odds & Ends") }}
{{ collectionList("outgoing") }}