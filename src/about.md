---
title: 'About Me'
layout: 'layouts/basic.html'
css: 'about'
tags:
  - nav
  - main
displayOrder: 2
---

{% figure "profile.jpg", { noLink: true, alt: "Profile image of Bechno Kid holding a mug shaped like a Maxim Tomato from the Kirby franchise"} %}
  **"The ticket to the future is always open."**<br>- Rem Saverem, Trigun
{% endfigure %}

Hi, I'm **Bechno Kid** (she/her), the head honcho of this hideout.

You can call me **"Bechno"** or even just **"Bec"**. You can call me "Kid", but I don't recommend it unless you're older than me!

I'm a full-time software developer in her 30s who enjoys drawing on the side and tends to yap for hours about her interests. I like coffee, tea, and almost any caffeinated drink out there except for carbonated energy drinks.

I may code as a career, but I am no means an expert at all. I frequently look up StackOverflow when I need help with my code, even at work. Regardless, I do enjoy learning new things every day!

I decided to create a personal site at the behest of a Tumblr user who was encouraging others to not rely so much on social media and start creating their own personal sites. As someone who had always admired Geocities users in her youth, I thought this was a perfect opportunity to brush off my HTML/CSS skills.

My **hobbies** include drawing, collecting virtual pets (primarily Tamagotchi and Digital Monsters), playing video games, and crocheting. I'm trying to get back into playing piano like I used to!

I'm a casual gamer, and some of my **favorite video game series** include Monster Hunter, Animal Crossing, Splatoon, Final Fantasy, Crash Bandicoot, and Kirby.

I have a BS degree in Computer Science and somehow managed to land in the top 20% of my graduating class. People will say that I am a hard-working student, but all I can remember from my college days was utter confusion.

<pre><code class='css-code my-0'><span class='font-weight-bold'>-----BEGIN GEEK CODE-----</span>
  Version: 3.12
  GCS/O>AT d s-: a@ C++ U? P !L E? W++>+++ N? o? K- w$ O? !M V?
  PS++ PE+ Y+ PGP? !t 5? X?@ R@ tv+ b- DI>+ D@ G e++ h-- r+++ z-
<span class='font-weight-bold'>-----END GEEK CODE-----</span></code></pre>

**[More about Geek Code](https://web.archive.org/web/20090220181018/http://geekcode.com/geek.html)** {.text-right .mt-1 .mb-4}

<div class='sidebar'>

## Fanlistings I Joined
{% set array = site.fanlistings %}

<div class='content fanlistings p-3 d-flex justify-content-center flex-wrap'>
{% for item in array.items %}<a href='{{ item.link }}' class='m-1' ><img src='{{ array.imgSrc + item.src }}' alt='{{ item.alt }}'></a>{% endfor %}
</div>

</div>