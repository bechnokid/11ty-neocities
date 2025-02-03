---
title: Links
freezeframe: true
displayOrder: 31
---
<style>
  td {
    padding: 1em
  }

  .button-link,
  .button-link > div,
  .button-link img {
    height: 31px;
    width: 88px;
  }
</style>

## Fellow Netizens

Here are some sites whose webmasters are friends, affiliates, or people who I think are just cool in general!

If you already added my button to your site, let me know and I'll add you here!

<div class='sidebar mb-4'>
<div class='content d-flex flex-wrap justify-content-center align-items-center p-3'>
{% for key, value in netizenLinks %}<a href='https://{{ key }}.{{ value.domain }}' class='button-link m-1'><img src='{{ imgLink + key }}.{{ value.type }}' alt='{% if value.desc %}{{ altText + value.desc }}{% else %}{{ altText + key }}{% endif %}'{{ " class=freezeframe" if value.freezeframe }}></a>{% endfor %}
</div>
</div>

## Resources

<table>{% for key, value in resourceLinks %}<tr><td><a href='https://{{ key }}'>{{ value.name }}</a></td><td class='td-desc'>{{ value.desc }}</td></tr>{% endfor %}</table>
