---
title: 'Blog'
displayOrder: 1
layout: layouts/blog-feed.html
pagination:
  data: collections.blog
  size: 15
  reverse: true
permalink: 'writing/blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
description: Not unlike a diary or journal, longer entries can be found here.
---

There will be times where I just want to keep rambling about things I've experienced, good or bad! Hopefully, mostly good!
