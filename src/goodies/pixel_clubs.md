---
title: Pixel Clubs/Cliques
displayOrder: 3
description: Various pixel clubs/cliques that I have joined with my own pixel art.
freezeframe: true
altLinkText: '. Clicking on the image leads to the source'
---
<style>
  .content > * {
    margin: 0 .25rem;
  }

  table {
    font-size: .85em;
  }
</style>

{% macro pixelClub(header, array, src, altText, mine = false, closed = false) %}
<details {{ 'open' if not closed }}>
<summary class="h3 details">{{ header }}</summary>

<div class="sidebar mb-3"><div class="content d-flex flex-wrap justify-content-center align-items-center p-3">{% for key, value in array %}{% if mine %}<img {{ ("class='freezeframe'" if value["freezeframe"]) | safe }} src="{{ imgLink + src + key }}" alt="{{ value }}">{% else %}<a href="{{ value["link"] }}"><img src='{{ imgLink + src + key }}' alt='{{ altTxt + value["alt"] }}' {{ ("class='freezeframe'" if value["freezeframe"]) | safe }}></a>{% endif %}{% endfor %}</div></div>

</details>
{% endmacro %}

<div class="row">
<div class="col-6">

## Kindness Rocks Pixel Project

Created by [PixelRevival](https://pixelrevival.xyz/kindnessrocks/)!

{% set altTxt = "A painted rock of " %}
{{ pixelClub ("My Rocks", bechnokid["kindnessrocks"], "kindnessrocks_bechnokid_", altTxt, true )}}
{{ pixelClub ("Rock Collection", collected["kindnessrocks"], "kindnessrocks_", altTxt )}}

## Sticker Sheet Club

Created by [RoseDryad](https://stickersheetclub.neocities.org/)!

{% set altTxt = "A pixel sticker of " %}
{{ pixelClub ("My Stickers", bechnokid["sticker"], "sticker_bechnokid_", altTxt, true )}}
{{ pixelClub ("Sticker Book", collected["sticker"], "sticker_", altTxt, false, true )}}

</div>
<div class="col-6">

## Afternoon Tea

Created by [Lost Letters](https://lostletters.neocities.org/afternoontea/)!

{% set altTxt = "A tea cup with " %}
{{ pixelClub ("My Cups", bechnokid["tea"], "tea_bechnokid_", altTxt, true )}}
{{ pixelClub ("Cupboard", collected["tea"], "tea_", altTxt )}}

## Yum-Yum Shoppe

Created by [Key's Klubhouse](https://keysklubhouse.com)!

{% set altTxt = "A small pixel of " %}
{% macro shoppe(header, array, src, altTxt, mine = false, closed = false) %}
<details {{ "open" if not closed }}>
<summary class='h3 details'>{{ header }}</summary>

<table>
<thead><tr><th>Item</th><th>Description</th>{{ ("<th>Purchased from</th>" if not mine) | safe }}</tr></thead>
<tbody>
{% for key, value in array %}
<tr>
<td><img src='{{ imgLink + src + key }}' alt='{{ altTxt + value["alt"]}}'></td>
<td>{{ value["desc"] }}</td>
{{ ("<td><a href=" + value["link"] + ">" + value["name"] + "</a></td>" if not mine) | safe }}
</tr>
{% endfor %}
</tbody>
</table>

</details>
{% endmacro %}

{{ shoppe("My Shoppe", bechnokid["yys"], "yys_bechnokid_", altTxt, true )}}
<br>
{{ shoppe("Shopping Cart", collected["yys"], "yys_", altTxt, false, true)}}

</div>