---
title: 'The Web Beet'
displayOrder: 1
prism: true
permalink: '/about/index.html'
---

{% figure "profile.jpg", { noLink: true, alt: "Bechno Kid holding a mug shaped like a Maxim Tomato from the Kirby franchise"} %}**"The ticket to the future is always open."**<br>- Rem Saverem, Trigun{% endfigure %}

Hi, I'm **Bechno Kid** (she/her), the head honcho of this hideout.

You can call me **"Bechno"** or even just **"Bec"**. You can call me "Kid", but I don't recommend it unless you're older than me!

I'm a full-time software developer born in the early '90s who enjoys drawing on the side and tends to yap for hours about her interests. I like coffee, tea, and almost any caffeinated drink out there except for carbonated energy drinks.

I may code as a career, but I am no means an expert at all. I frequently look up StackOverflow when I need help with my code, even at work. Regardless, I do enjoy learning new things every day!

I have a Bachelor's degree in Computer Science and somehow managed to land in the top 20% of my graduating class. People will say that I was a hard-working student, but all I can remember from my college days was utter confusion. I'm not even sure how I even landed my current job, but at least I'm making money doing what I love!

```git
-----BEGIN GEEK CODE-----
  Version: 3.12
  GCS/O>AT d s-: a@ C++ U? P !L E? W++>+++ N? o? K- w$ O? !M V?
  PS++ PE+ Y+ PGP? !t 5? X?@ R@ tv+ b- DI>+ D@ G e++ h-- r+++ z-
-----END GEEK CODE-----
```

**[More about Geek Code](https://web.archive.org/web/20090220181018/http://geekcode.com/geek.html)** {.text-right .mt-1 .mb-4}

<div class='about-info row d-flex flex-wrap justify-content-center mb-4 mb-lg-0'>
<div class='col-12 col-lg-4 mb-3 mb-lg-0'>
{% galleryBox { markdown: true, boxTitle: "Other Facts", sidebarClass: 'h-100' } %}
- ♒︎ (☀️), ♉︎ (🌒), ♊︎ (⬆️)
- INTJ...I think.
- Viet-American (can't speak the language)
- Catholic and gay ✝️🏳️‍🌈
- In a closed polyamorous marriage
{% endgalleryBox %}
</div>
<div class='col-12 col-lg-4 mb-3 mb-lg-0'>
{% galleryBox { markdown: true, boxTitle: "Likes", sidebarClass: 'h-100' } %}
- Drawing
- Crocheting
- Rice
- Bún bò Huế
- This shape {% icon 'arrow-right' %} {% icon 'meat', { alt: 'Meat on a bone' } %} "Mmm...so tasty!"
{% endgalleryBox %}
</div>
<div class='col-12 col-lg-4'>
{% galleryBox { markdown: true, boxTitle: "Media I Like", sidebarClass: 'h-100' } %}
- **Monster Hunter**
- Tamagotchi
- Digimon
- Kill la Kill
- Trigun
- Demon Slayer
{% endgalleryBox %}
</div>
</div>

{% for key, value in favorites %}
## {{ value.title }}

<div class='d-flex flex-wrap justify-content-lg-between justify-content-center px-lg-5 px-0 text-center text-xs favs'>
{% for item in value.items %}
<div class='sidebar m-lg-0 m-2'>

![{{ item.name }}]({{ imgPath + item.img }})

{{ item.name }}

</div>
{% endfor %}
</div>
{% endfor %}