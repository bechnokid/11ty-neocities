---
title: Adding Full Descriptions to Your RSS Feed
shortTitle: Descriptions in RSS Feed
displayOrder: 3
description: A tutorial on how to make your RSS Feed pretty and easy to read with full descriptions for each entry.
prism: true
permalink: /tutorials/rss-feed/index.html
---
==toc

## Intro

If you ever had the chance to look at my [RSS](/feeds/rss.xml) (or [Atom](/feeds/atom.xml)) Feed, you might have noticed that it looks like an actual HTML page, with styling and everything. However, if you were to put it through a feed reader, it will still behave like an actual feed.

This is thanks to [Darek Kay's tutorial](https://darekkay.com/blog/rss-styling/) providing steps on using **XSL Stylesheets**.

I highly recommend his tutorial to get started on how to make your feeds pretty and easy for other users to read. I will point out that his tutorial and code uses the Atom specification.

You can find the RSS specification over at [pretty-feed-v3](https://github.com/genmon/aboutfeeds/blob/a7ec11ac1f47f96270d1372f2051d912887b3608/tools/pretty-feed-v3.xsl#L122).

Do the differences between Atom and RSS feeds really matter, though? Unfortunately, yes. {% emote 'embarrassed' %}

You might not know this (I wouldn't blame you lol), but even though RSS and Atom are both universally called "RSS" due to their similarities and their ability to both be entered into a feed reader, they have enough differences that can cause an XSL stylesheet to break if you're not careful.

That being said, you don't need to call an Atom feed "Atom", or vice versa. In the end, they're both feeds.

## Why This Tutorial?

I'm further expanding on Darek's tutorial, including providing steps on adding descriptions to the "prettified" RSS feed. Descriptions can still be read by putting a feed through a feed reader, but I wanted to give users the option to be able to read my feed easily.

So, if you want to add full descriptions to each of your RSS feeds, that is what this tutorial is for!

{% info %}
{% renderTemplate "md" %}
You must follow this tutorial **VERY CAREFULLY**. Any, and I mean, **any** deviations from the tutorial will result in the stylesheet breaking your entire RSS feed.
{% endrenderTemplate %}
{% endinfo %}

## Some Changes

Assuming you followed Darek's tutorial, the only differences you would make when linking to a stylesheet would be the following:

### .xml

- Change the `.xsl` file to `.xslt`.
- Change the type from `text/xsl` to `text/xml`.

With these changes, the first two lines of your `.xml` file containing your feed should look something like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet href="/STYLESHEET_NAME.xslt" type="text/xml"?>
```

### .xslt

Change the extension for your stylesheet from `.xsl` to `.xslt`.

Create a tag that will display the content of each entry in your feed, and put it somewhere in your `.xslt` file where you want to show each entry's content.

#### Atom

**If you have an RSS feed**, skip to the [next section](#rss).

Otherwise, put the following block anywhere in the body where you want to show the content of each entry.

```xml
<xsl:if test="atom:content">
  <xsl:apply-templates select="atom:content"/>
</xsl:if>
```

#### RSS

Put the following block anywhere in the body where you want to show the content of each entry:

```xml
<div class="feed-entry">
  <xsl:value-of select="description"/>
</div>
```

Then, above the `</body>` tag, put in the following block:

```xml
<script>
  let entries = document.querySelectorAll('.feed-entry');
  let parser = new DOMParser();
  for (const entry of entries) {
    let html = parser.parseFromString(entry.innerHTML, 'text/html')
    entry.innerHTML = html.body.textContent;
  }
</script>
```

#### Final Steps

Put the following block right below the line that contains `</xsl:template>`. Put in this block regardless if you made an Atom or RSS feed.

```xml
<xsl:template match="atom:content">
  <xsl:choose>
  <xsl:when test="@type='html'">
    <div><xsl:value-of select="."/></div>
    <script>(e=&gt;e.outerHTML=e.textContent)(document.currentScript.previousElementSibling),document.currentScript.remove()</script>
  </xsl:when>
  </xsl:choose>
</xsl:template>
```

If you followed the steps correctly, you should (somehow) see full descriptions of each entry you've written in your feed, **congratulations**!!

Honestly, I wouldn't be able to tell you how this code works. I took a look at how [Chris Morgan](https://chrismorgan.info/feed.xml) did this in his feed, and after hours of trial and error, I managed to get my own feed to work all without being able to figure out how it worked lol.

## Closing Thoughts

XML is pretty confusing, and I might never figure it out. I might have to take some more time in learning XML, but seeing as how I'm mostly only using it for feeds, I'm not sure if I'll have a use for that knowledge in the future. Oh well!

Regardless, I hope this tutorial helped in some shape or form, and if you come across any problems or mistakes, you are more than welcome to email me at **bechnokid@yahoo.com**!
