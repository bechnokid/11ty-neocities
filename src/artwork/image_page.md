---
pagination:
  data: collections.galleryImages
  size: 1
  alias: picture
css: art
layout: layouts/basic.html
eleventyExcludeFromCollections: true
eleventyComputed:
  title: "{{ picture.title | safe }}"
	permalink: "/artwork/{{ picture.containingGallery | slugify }}/{{ picture.title | slugify }}/"
	description: "{{ picture.title }} from {{ picture.containingGallery}}"
---

<article>
	<div class='art-nav d-flex mb-4 justify-content-center'>
		{% if picture.previousImage %}<a href="../{{ picture.previousImage | slugify }}"><button type="button">Previous</button></a>{% endif %}
		<a href="/artwork/{{ picture.containingGallery | slugify }}/"><button type="button">Gallery</button></a>
		{% if picture.nextImage %}<a href="../{{ picture.nextImage | slugify }}"><button type="button">Next</button></a>{% endif %}
	</div>
  <div class='d-flex justify-content-center'>
    <a href="{{ picture.baseUrl }}/{{ picture.filename }}">
      <img src="{{ picture.baseUrl }}/{{ picture.filename }}" alt="{{ picture.altText }}" class='mb-3 mx-auto'>
    </a>
  </div>
  {% if picture.caption %}
    {{ picture.caption }}
  {% endif %}
</article>