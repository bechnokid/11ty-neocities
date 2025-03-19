---
pagination:
  data: galleries.data
  size: 1
  alias: gallery
listType: artwork
tags: gallery
layout: 'layouts/basic.html'
css: art
eleventyComputed:
  title: "{{ gallery.title }}"
  permalink: "/artwork/{{ gallery.title | slugify }}/"
  summary: "{{ gallery.summary }}"
---

<style>
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
</style>

<section>
  <a href="../">
    <button type="button" class='mb-4'>Back</button>
  </a>
  <div class='gallery d-flex'>
    {% for picture in gallery.pictures %}<a href="/artwork/{{ gallery.title | slugify }}/{{ picture.title | slugify }}/"><img alt="{{ picture.title }}" src="{{ gallery.imgPath }}{{ picture.filename }}" class="m-1"></a>
    {% endfor %}
  </div>
</section>