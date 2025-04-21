---
title: Greenhouse / Webgarden
shortTitle: Webgarden
displayOrder: 4
description: Little pots that show a sneak peek of the websites they're based on.
summary: A concept created by [Miss Moss](https://webgardens.neocities.org/)! It is, as she quotes, *"a fun way to see new content from your favorite websites"*. This particular greenhouse has pots that I personally think are super cool.
prism: true
warning: true
---

## My Pot

If you think my site is cool, perhaps you can raise your own pot and help it grow?
<div class='d-flex justify-content-center'>
  <iframe class='webgarden-pot' src='/webgarden.html' scrolling='no' loading='lazy'></iframe>
</div>

```html
<iframe src="https://bechnokid.neocities.org/webgarden.html" style="border:none"></iframe>
```

## Greenhouse

Here is my pot collection! Any pots that are broken need to be put away until they can hopefully regrow!

{% galleryBox { sidebarClass: 'greenhouse', contentClass: 'justify-content-center align-items-center' } %}
{% for pot in goodies.greenhouse.gardenLinks | reverse %}<div><iframe src={{ pot }} scrolling="no" loading="lazy"></iframe></div>{% endfor %}
{% endgalleryBox %}
