---
title: 'F.A.Q'
summary: I've gotten a lot of questions over the years. Many of them are asked pretty often, which is why I created this page! If you have another question that you don't see on this page, feel free to [email me](mailto:bechnokid@yahoo.com).
displayOrder: 3
permalink: '/faq/index.html'
---

{%- for section, questions in site.faq %}

## {{ section }}{.{{ section | slugify }} .faq}

{%- for item in questions %}

- {{ item.q }} {.question }
  - {{ item.a | markdownifyInline | safe }} {.answer}
{% endfor %}
{% endfor %}
