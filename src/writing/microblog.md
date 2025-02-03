---
title: 'Microblog'
displayOrder: 2
layout: 'layouts/blog_feed.html'
pagination:
  data: microblog.microblog
  size: 5
permalink: 'writing/microblog/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Previous'
paginationNextText: 'Next'
paginationAnchor: '#status-list'
description: Smaller entries that describe how I'm feeling or what I'm doing in the moment.
---

Thoughts and ramblings that are otherwise too small to make into a blog post!