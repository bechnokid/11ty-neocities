---
title: 'Fangirling'
summary: A page where I talk about preferences and experiences as a fan of the media I enjoy and consume.
description: A page that describes myself as a fan of whatever media I consume.
displayOrder: 5
permalink: 'me/fan/index.html'
---
## Fan Behavior

Perhaps one of my most defining traits as a fan is the [art](/art) that I draw of the things I like. I have been a fan artist since 1998 but didn't start engaging in fandoms until 2006, which was when I created a DeviantArt account in late 2005 and started interacting with other people who had similar interests as mine.

Due to my limited time and energy as a former full-time student and now full-time worker I'm not able to participate in many events for the fandoms I'm a part of, resulting in me mostly lurking in fandom spaces, but I'm ok with that! I've managed to contribute to two fanzines (Kingdom Hearts and Gravity Falls) and two collabs (Kingdom Hearts and Archie Sonic Comics), and I'm hoping to join more once I figure out how to manage my time better!

Although I enjoy talking about my interests, very few of my own personal thoughts and headcanons about characters and ships gets posted publicly. I don't even talk that much to my close friends because I worry about boring them, although I'm working on overcoming this fear while still trying to be considerate of my friends' time!

Otherwise, I mostly lurk and avoid joining large communities. I have joined a couple of Discord servers with a ton of people, but I usually end up leaving after a while because I get intimidated by the sheer number of people in those groups lol.

### Characters I Love

There's a quote that's going around on TikTok (I can only assume it got popular on TikTok because of the videos that show up on my YouTube Shorts feed):

> We often choose our favorite characters because we see ourselves in them.

I would say this is a load of hogwash, but I recognize that this quote just does not apply to me since I have a lot of favorites who are nothing like me lol. I honestly have a few thoughts on how harmful it can be to only enjoy characters you "can relate to", but that's for another time.

As such, I split a few of my favorites into **different categories**:

{% set img_path = "/assets/images/about/favs/" %}
{% macro fav_box(params) %}
  <div class="fav-box">
    {% set alt_text = params.name + " from " + params.series if params.series else params.name %}
    {% img img_path + params.src, { alt: alt_text } %}
    <p class="name font-weight-bold text-primary">{{ params.name | markdownifyInline | safe }}</p>
    {% if params.series %}
      <p class="series">{{ params.series | markdownifyInline | safe }}</p>
    {% endif %}
  </div>
{% endmacro %}
<div class="d-flex flex-column flex-gap-3 mt-4">
  <div class="favs row g-3"><div class="col-md-6"><div class="sidebar"><p class="h3">Almost Like Me IRL</p><div class="favs-container">{% for item in about.favs.irl %}{{ fav_box(item) }}{% endfor %}</div></div></div><div class="col-md-6"><div class="sidebar"><p class="h3">Other Favorites</p><div class="other favs-container">{% for item in about.favs.other %}{{ fav_box(item) }}{% endfor %}</div></div></div></div>
  <div class="favs science sidebar"><p class="h3">Scientists</p><div class="favs-container">{% for item in about.favs.science %}{{ fav_box(item) }}{% endfor %}</div></div>
</div>

## Shipper Behavior

I am a serial shipper at heart. For every piece of media I have obsessed over, there's a 90% percent chance that there is a ship I would equally be obsessed with. I am also the type who would see two characters breathe and immediately ship them because of their aesthetic (how good they look together) or the potential chemistry they have.

I am a huge romantic who absolutely adores the sweetest and tooth-rotting kind of romance one can think of, with just a hint of angst. It fuels my very soul. {% emote "love" %}

**Favorite tropes include:**

<ul class="mb-2">{%- for item in about.ships.tropes %}<li>{{ item | safe }}</li>{% endfor %}</ul>

I'm mostly a monoshipper, but there are rare instances where I love multiple ships for a particular character.

I mostly have monogamous ships, but I have a couple of polyamorous ships that I thoroughly enjoy. That being said, I vehemently believe that polyamorous ships can't always be solutions to love triangles (or other shapes). This is mostly because I value chemistry above all else, and if I can't see chemistry between the characters, then I just can't get into it.

### HL

The most ships I have are HL where the girl is assertive, either the dominant one of the pair or on equal footing, and the guy is more sensitive, easily flustered by the girl, and holds the girl in really high regard where he'd do anything for her. Bonus points if the guy is way taller/bigger than the girl! Essentially, I love HL ships where the two characters subvert most if not all gender roles!

This is going to sound so shallow of me to say, but I honestly don't like any HL ships where the guy is a known flirter and pick-up artist, and the girl is really submissive. Those kinds of ships do not move me a single millimeter!

### BL

Admittedly, I didn't start getting into BL ships until pretty recently. I started out as a "eww yaoi is gross" child, and when I grew into an adult, I had a former best friend who also hated BL ships and only liked HL and GL ships. It was bad to the point where if I expressed any interest in any BL ships, she would interrogate me.

Needless to say, I am not friends with this person anymore lol, and have been working on letting myself be cringe and free, and that included enjoying BL ships.

The kinds of BL ships I enjoy are friends who frequently bicker but always know to let each other know how much they love each other in their own ways. Depending on how crack-shippy the pair is, sometimes there isn't any affection. Just a lot of bickering and sexual tension, hehe.

Unpopular opinion, but I'm not a fan of the omegaverse. Never liked it, and probably never will. {% emote 'embarrassed' %}

### GL

I sadly have the smallest number of GL ships, and all of them have OCs rather than canon characters! I'm hoping to change this someday!

It doesn't help that a lot of writers don't know how to write female characters, leaving a lot of them too unlikable for me to develop shippy feelings for...

If I can be so bold, I'd say there aren't enough well-written female *friendships* in media, and writers usually pit them against each other over a boy, so I've mostly focused on analyzing and appreciating whatever close friendship two female characters might have rather than making them a couple (Tifa and Aerith, for example)

The kind of GL ships I've found myself enjoying are the ones either when both girls are not afraid to be affectionate and flirty towards each other or when one girl is completely smitten with the other and is a complete loser when around her crush.

Not to be cringe, but I also love the trend of people pairing girls from those "I'm not like other girls" memes and having them date each other. It's so cliche to have a preppy girl date a goth girl, but dang it, *I love it!!!!*

## Ships {.ships}

When writing down ship names, I don't consider if the character is a "top" or "bottom" in a ship. I just write them in the order that feels right to me!

### Guide

- {% emoji "💖" %} OTP. I think about this ship *a lot*!!
- {% emoji "❗" %} I love this ship, but with some caveats
- {% emoji "🌱" %} Ship I loved as a child/teen
- {% emoji "💀" %} - Only used for NOTPs that I absolutely hate.
  - All other NOTPs are just ships I can't get into! No hate to any fans!
{.legend}

You can click on ships with a dotted underline for commentary!

<div class="row mt-1 g-3">{% for key, value in about.ships.canon %} <div class="col-md-4 d-flex flex-column"><div class="sidebar"><p class="h3">{{ key | title }}</p><div class="content">{% for media in value %} <details open class="p-2"><summary class="media">{{ media.name }}</summary><ul>{% for item in media.items %} <li>{% if item.info %} <details class="info"><summary class="info">{{ item.ship | safe }}{% if item.emoji %} {% emoji item.emoji %}{% endif %}</summary><p>{{ item.info | safe }}</p></details>{% else %} {{ (item.ship or item) | safe }}{% if item.emoji %} {% emoji item.emoji %}{% endif %} {% endif %} </li>{% endfor %}</ul></details>{% endfor %}</div></div></div>{% endfor %}
</div>

### OC x Canon

I used to have a few fan OCs as a child that I would ship with my favorite characters until I discovered in 2004 the (hopefully) now-outdated concept of [Mary Sues](https://tvtropes.org/pmwiki/pmwiki.php/Main/MarySue) and how much of a faux pas to ship them with canon characters.

It wasn't until probably 2019 when I actually decided to be a little bit more brave and explore the wonders of OCxCanon ships.

I honestly have no control over the process of making characters to ship with my favorite characters. They're either an extension of me (like a self-insert), completely original characters, or refurbished OCs from my childhood. The process is pretty random!

I plan on writing full descriptions for each OC x Canon ship I have, but for now, I offer a humble list.

<ul>{% for item in about.ships.ocxcanon %}<li>{{ item | markdownifyInline | safe }}</li>{% endfor %}</ul>

## Inspirations

This page wouldn't be here if not for the existence of these webmasters' own fan pages!

- [Inkcaps's shipping wall](https://inkcaps.neocities.org/library/ships/)
- [Nanacore's fan page](https://nanacore.neocities.org/fan)
- [Fan behaviors on Planetary Influence](https://planetaryinfluence.neocities.org/fan)
