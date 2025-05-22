---
title: 'Beet Garden'
permalink: 'webgarden.html'
eleventyExcludeFromCollections: true
---
{% set contentBlock %}
art, blog, resources, and more?!
{% endset %}
{% set gardenImage = '/assets/images/webgarden_head.png' %}
{% set gardenImgAlt = 'Image of Bechno Kid for her webgarden pot' %}
{% set lastUpdated = collections.rssFeed[0].data.date | monDayYear %}
<!DOCTYPE html>
<html lang={{ meta.lang }} data-theme="light">
  <head>
    {% include "partials/head.html" %}
    <link rel="stylesheet" href="{{ meta.cssUrl }}/webgarden.css" type="text/css" media="all">
    <title>{{ meta.name }}{% if title != null %} - {{ title }}{% endif %}</title>
  </head>
<body>
  <main class="garden-pot bg-body m-3 p-3 text-xs">
    <span class="h1 m-0 text-lg">Bechno Kid's Hideout!</span>
    <hr class="my-2">
    {{ contentBlock | markdownify | safe }}
    <div class="mt-1 text-center"><a title='Click to enter!' href="https://bechnokid.neocities.org" target="_blank"><img src="{{ gardenImage }}" alt="{{ gardenImgAlt }}"></a></div>
    <div class="last-update text-muted"><p>Last updated: {{ lastUpdated }}</p></div>
  </main>
</body>
</html>