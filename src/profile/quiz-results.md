---
title: "quiz-results"
order: 3
---

{% set quizzes = about.profile_data.quizzes %}

{% for item in quizzes %}
  {% if item.url %}[{% endif %}![{{ item.alt }}]({{ item.src }}){% if item.url %}]({{ item.url }}){% endif %}
{% endfor %}