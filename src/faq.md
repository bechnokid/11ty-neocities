---
title: 'F.A.Q'
layout: 'layouts/basic.html'
css: 'basic'
summary: I've gotten a lot of questions over the years. Many of them are asked pretty often, which is why I created this page! If you have another question that you don't see on this page, feel free to [email me](mailto:bechnokid@yahoo.com).
tags:
  - nav
  - main
displayOrder: 3
---

<style>
  dl {
    margin-top: 1rem;
  }

  dt {
    color: var(--text-secondary);
  }
</style>

{% for section in site.faq.items %}
## {{ section.name }}{.{{ section.name | slugify }}}
{% for item in section.questions %}
{{ item.q }}
: {{ item.a | safe }}
{% endfor %}
{% endfor %}