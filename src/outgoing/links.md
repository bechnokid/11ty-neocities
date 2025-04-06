---
title: Links
freezeframe: true
displayOrder: 31
---
<style>
  td {
    padding: 1em
  }

  .fanlistings {
    max-height: 250px;
    overflow: auto;
  }
</style>

## Fellow Netizens

<p>Here are some sites whose webmasters are friends, affiliates, or people who I think are just cool in general!</p>
<p>If you already added my button to your site, let me know and I'll add you here!</p>

{% galleryBox { markdown: { inline: true }, sidebarClass: 'mb-4', contentClass: 'justify-content-center align-items-center' } %}
{% for key, value in netizenLinks %}[![{{ (altText + value.desc) if value.desc else (altText + key) }}]({{ imgLink + key }}.{{ value.type }}){{ "{.freezeframe}" if value.freezeframe }}](https://{{ key }}.{{ value.domain }}){.button-link .m-1}{% endfor %}
{% endgalleryBox %}

{% set array = site.fanlistings %}

## Fanlistings I Joined

{% galleryBox { markdown: { inline: true }, contentClass: 'fanlistings justify-content-center'} %}
{% for item in array.items %}[![{{ item.alt }}]({{ array.imgSrc + item.src }})]({{ item.link }}){.m-1}{% endfor %}
{% endgalleryBox %}

## Resources

<table>{% for item in resourceLinks %}<tr><td><a href='{{ item.url }}'>{{ item.name }}</a></td><td class='td-desc'>{{ item.desc }}</td></tr>{% endfor %}</table>

## Made Possible By

- [Rina Cat's Domain](http://web.archive.org/web/20041206135411/rinacat.com/main.html) (inspiration)
- [Eleventy](https://11ty.dev) (static site generator)
- [Bret Comnes](https://github.com/marketplace/actions/deploy-to-neocities) (deploy-to-neocities GitHub action)
- [Avi Aryan](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-ghcolors.css) (GH Colors PrismJS theme with slight edits)
- **Viewers like you!**