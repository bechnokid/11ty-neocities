---
title: Implementing FreezeframeJS
displayOrder: 2
description: A tutorial on how to implement [Freezeframe.js](https://github.com/ctrl-freaks/freezeframe.js/), a library that can "freeze" animated GIFs.
code: true
---
<script src="https://unpkg.com/freezeframe/dist/freezeframe.min.js"></script>

## 0) Introduction

One of the greatest challenges for a web designer is creating a site that is accessible to those with disabilities. It's one thing to create responsive sites and provide alt text for screen readers, but I noticed a lot of Neocities users' sites are lacking one of the most important aspects: **avoiding seizure-inducing images**.

As much as I do enjoy flashing images (blinkies, pixels, rainbow backgrounds, etc.), I've seen a lot of sites with so much blinking and flashing that I can't browse their site for very long without my eyes hurting. If my eyes hurt from browsing some sites, then I can't imagine what it must be like for those who are prone to seizures.

So, I started my journey to find out methods on allow others to enjoy these colorful GIFs but without the eyestrain, and that was when I found a magnificent JS library called [Freezeframe.js](https://github.com/ctrl-freaks/freezeframe.js/) (demo page [here](http://ctrl-freaks.github.io/freezeframe.js/)).

With this library, animated GIFs are paused and can be enabled again by clicking/hovering the image or manually through a button and such.

It's an amazing library and it's saved me from a lot of eyestrain while debugging the graphics page. The instructions are pretty easy to follow, but I'd like to share my method of implementing this library to my Neocities site. I hope you find this helpful!

### Notes

- As you progress through the tutorial, you'll find some sections listed under "Option" followed by a number. This is to indicate that you can use either snippet, but preferably not both.
- This also applies to blocks of code listed under either JQuery or vanilla JavaScript.

## 1) Installation

There are a few ways of installing freezeframe.js, but my preferred method is adding the following to your `<head>` tag on every page that would use this library, preferably any that contain a large amount of animated graphics.

<pre><code class="css-code">&lt;<span class="selector">script</span> <span class="attribute">src</span>=<span class="url">&quot;https://<i></i>unpkg.<i></i>com/freezeframe/dist/freezeframe.min.js&quot;</span>&gt;&lt;/<span class="selector">script</span>&gt;</code></pre>

If there comes a need that you need to customize the script, the code can be found on the library's GitHub page, where you can download it and save it to the same folder you would keep your other scripts.

## 2) Setup

There are two ways of setting up freezeframe.js in HTML. You can set it up for each individual `<img>` tag, or you can set it up as a class for a `<div>` tag that holds several `<img>` elements inside, as shown below:

### Option 1

<pre><code class="css-code">&lt;<span class="selector">img</span> <span class="attribute">class</span>=<span class="url">&quot;freezeframe&quot;</span> <span class="attribute">src</span>=<span class="url">&quot;image.gif&quot;</span>&gt;</code></pre>

### Option 2

<pre><code class="css-code">&lt;<span class="selector">div</span> <span class="attribute">class</span>=<span class="url">&quot;freezeframe&quot;</span>&gt;
  &lt;<span class="selector">img</span> <span class="attribute">src</span>=<span class="url">&quot;image1.gif&quot;</span>&gt;
  &lt;<span class="selector">img</span> <span class="attribute">src</span>=<span class="url">&quot;image2.gif&quot;</span>&gt;
  &lt;<span class="selector">img</span> <span class="attribute">src</span>=<span class="url">&quot;image3.gif&quot;</span>&gt;
&lt;/<span class="selector">div</span>&gt;
</code></pre>

For me, if I know all images in a `<div>` element will be animated (such as blinkies), then I place the freezeframe class into `<div>` element. Otherwise, if a `<div>` element has both static and animated images (like for links), then I place the freezeframe class into the `<img>` element.

This is only because I'm cautious about saving as much space as possible, since adding the freezeframe class to an element will automatically create a "loading" image, whether the original image is animated or not.

## 3) Implementation

One thing to note about the library is, like most scripts, it will not work properly until the entire page has been loaded. You can put the script in your HTML file, or you can put it in a separate JS file if you intend on using this script in multiple HTML files.

### 3.1) Usage in a Single File

If you intend on using this library in a HTML file, then you can place the following code in one of two places:

- Right above the ending `</body>` tag, or...
- As an onload event in the `<body>` tag, as shown below.

#### Option 1

<pre><code class='css-code'>&lt;<span class="selector">body</span>&gt;
  <span class="comment">// Code goes here...</span>
  &lt;<span class="selector">script</span>&gt;<span class="attribute">new</span> <span class="selector">Freezeframe</span>();&lt;/<span class="selector">script</span>&gt;
&lt;/<span class="selector">body</span>&gt;</code></pre>

#### Option 2

<pre><code class='css-code'>&lt;<span class="selector">body</span> <span class="attribute">onload</span>=<span class="attr-value">&quot;new Freezeframe();&quot;</span>&gt;
  <span class="comment">// Code goes here...</span>
&lt;/<span class="selector">body</span>&gt;</code></pre>

### 3.2) Usage in Multiple HTML Files

If you intend on using the script in multiple HTML files, then you can put `new Freezeframe();` in a separate JS file. If this is the case, be sure to be aware of the following:

- Be sure to include the link to the JS file in every HTML file you plan to use the library in.
- Make sure the skip runs *after* the page has been loaded.

The following code would likely go into your `index.js` file.

#### Javascript
<pre><code class='css-code'><span class="comment">// Javascript</span>
<span class="attr-value">document</span>.<span class="selector">addEventListener</span>(<span class="attr-value">&quot;DOMContentLoaded&quot;</span>, <span class="attribute">function</span>(event) {
  <span class="attribute">new</span> <span class="selector">Freezeframe</span>();
});</code></pre>

#### JQuery

<pre><code class='css-code'><span class="comment">//JQuery</span>
$(<span class="attribute">function</span>() {
  <span class="attribute">new</span> <span class="selector">Freezeframe</span>();
});</code></pre>

Once `new Freezeframe();` has been implemented, all images with the freezeframe class will pause upon loading the page and will only play when the mouse hovers above them.

## 4) Customization

There are multiple ways to customize the script depending on how you want the animated GIFs to start playing, as shown in the demo page. For me, I wanted to create buttons that would play or pause *all* animated images in a page, which is unfortunately not covered in the demo page, so here's how I did it.

In HTML, create the buttons and label them appropriately so the script can locate them.

<pre><code class="css-code">&lt;<span class="selector">button</span> <span class="attribute">id</span>=<span class="attr-value">&apos;play-gif&apos;</span> <span class="attribute">type</span>=<span class="attr-value">&apos;button&apos;</span>&gt;Play GIFs&lt;/<span class="selector">button</span>&gt;
&lt;<span class="selector">button</span> <span class="attribute">id</span>=<span class="attr-value">&apos;stop-gif&apos;</span> <span class="attribute">type</span>=<span class="attr-value">&apos;button&apos;</span>&gt;Stop GIFs&lt;/<span class="selector">button</span>&gt;</code></pre>

Then, go to the script you put `new Freezeframe();` and change it into the following:

#### Javascript

<pre><code class='css-code'><span class="attr-value">document</span>.<span class="selector">addEventListener</span>(<span class="attr-value">"DOMContentLoaded"</span>, <span class="attribute">function</span>(event) {
  <span class="attribute">const</span> e = <span class="attribute">new</span> <span class="selector">Freezeframe</span>({ <span class="attribute">trigger</span>: <span class="selector">false</span> });
  <span class="attr-value">document</span>.<span class="selector">getElementById</span>(<span class="attr-value">"play-gif"</span>).<span class="selector">addEventListener</span>(<span class="attr-value">"click"</span>, <span class="attribute">function</span>(){ e.<span class="selector">start</span>() });
  <span class="attr-value">document</span>.<span class="selector">getElementById</span>(<span class="attr-value">"stop-gif"</span>).<span class="selector">addEventListener</span>(<span class="attr-value">"click"</span>, <span class="attribute">function</span>(){ e.<span class="selector">stop</span>() });
});</code></pre>

#### JQuery

<pre><code class='css-code'>$(<span class="attribute">function</span>() {
  <span class="attribute">const</span> e = <span class="attribute">new</span> <span class="selector">Freezeframe</span>();
  $(<span class="attr-value">"#play-gif"</span>).<span class="selector">on</span>(<span class="attr-value">"click"</span>, <span class="attribute">function</span>(){ e.<span class="selector">start</span>() });
  $(<span class="attr-value">"#stop-gif"</span>).<span class="selector">on</span>(<span class="attr-value">"click"</span>, <span class="attribute">function</span>(){ e.<span class="selector">stop</span>() });
});</code></pre>

The functions that have "click" are what triggers the Freezeframe component to run a certain method, so clicking the button with the ID `#play-gif` will play the GIFs, while clicking the button with the ID `#stop-gif` will stop the GIFs.

So, you should have something like the following:

<button id="play-gif" class="button" type='button'>Play GIFs</button>
<button id="stop-gif" class="button" type='button'>Stop GIFs</button>

<div class='freezeframe mb-4'>

![Stamp of Doctor Strange activating his magic](/assets/images/goodies/stamps/strange.gif)
![Stamp of Doctor Strange turning his head](/assets/images/goodies/stamps/strange_headturn.gif)

![Blinkie of Doctor Strange](/assets/images/goodies/blinkies/blinkie-strange-sprite.gif)

</div>
<script>
  $(function() {
    const e = new Freezeframe({ trigger: false, responsive: false });
    $("#play-gif").on("click", function(){ e.start() });
    $("#stop-gif").on("click", function(){ e.stop() });
  });
</script>

## 5) Troubleshooting

Of course, not every library is perfect, and Freezeframe.js is no exception. Here are some issues I encountered and some workarounds, if any, that I managed to figure out.

### 5.1) Does not work in tabbed menus.

The library does not currently work in tabbed menus that use CSS. My guess is because of the clashing CSS styles somehow, but I haven't figured out a workaround for this, yet.

### 5.2) Hover CSS styling does not work

There are instances of the library not working properly with other images that already change when hovering the cursor over it. This is because the styling for classes generated by Freezeframe.js more often than not clashes with whatever style you have already configured for your images.

To prevent this, you can put this block of code in your CSS stylesheet.

<pre><code class='css-code'><span class="comment">/* Remove all transitions from Freezeframe elements */</span>
<span class="attribute">a .ff-image,
a .ff-canvas.ff-canvas-ready
</span> {
  <span class="property">transition</span>: none <span class="attribute">!important</span>;
  -o-<span class="property">transition</span>: none <span class="attribute">!important</span>;
  -moz-<span class="property">transition</span>: none <span class="attribute">!important</span>;
  -webkit-<span class="property">transition</span>: none <span class="attribute">!important</span>;
}

<span class="comment">/* Add the selectors for Freezeframe elements to wherever the image changes when hovered */</span>
<span class="attribute">
a:hover img,
a:hover .ff-image,
a:hover .ff-canvas.ff-canvas-ready
</span> {
  <span class="property">opacity</span>: .<span class="selector">5</span> <span class="attribute">!important</span>;
}

<span class="comment">/* This is only required if images become transparent when hovered*/</span>
<span class="attribute">a:hover .ff-image</span> {
  <span class="property">opacity</span>: <span class="selector">0</span> <span class="attribute">!important</span>;
}</code></pre>

### 5.3) Inconsistent sizes for 88x31 buttons

The original developer of the library added a feature to make all images responsive, resulting in some images to appear much larger than they actually are, especially blinkies and other smaller graphics. Thankfully, [Vance from Entropically](https://entropically.neocities.org/learn/freezeframe/#why-are-my-gifs-so-big) informed me that there is a feature to disable this.

Assuming you have `const e = new Freezeframe({ trigger: false });` set up somewhere, it can be changed to the following:

<pre><code class='css-code'><span class="attribute">const</span> e = <span class="attribute">new</span> <span class="selector">Freezeframe</span>({ <span class="attribute">trigger</span>: <span class="selector">false</span>, <span class="attribute">responsive</span>: <span class="selector">false</span> });</code></pre>

However, if the above does not work, another option would be to add in some CSS to resize the images manually.

In this example, let's say you have a link like so: `<a class="buttonLink" href='https://SOMESITE.com'><img src='BUTTON.png'></a>`. Notice that the `</a>` element has the class called **buttonLink**.

<pre><code class='css-code'><span class="attribute">.button-link,
.button-link</span> > <span class="attribute">div,
.button-link img</span> {
  <span class="property">height</span>: <span class="selector">31px</span>;
  <span class="property">width</span>: <span class="selector">88px</span>;
}</code></pre>

I've also had a couple of people point out that the images can get really stretched. I would also suggest adjusting the height of the `<a>` element to mitigate this issue.

I also recommend having this code in your main stylesheet.

<pre><code class='css-code'><span class="attribute">.ff-image</span> {
  <span class="property">vertical-align</span>: unset <span class="attribute">!important</span>;
}</code></pre>

I sadly have no explanation for this block of code except, "-shrugs- it works!"

## 6) Closing Thoughts

Hopefully this tutorial helps anyone who wishes to make their site a little more accessible. If you have any questions, don't be afraid to send an email to <bechnokid@yahoo.com>. I'll do my best to answer any questions you might have!

I would also like to give HUGE thanks to Vance for the corrections as well as suggestions on improving this tutorial. I would also argue that [their tutorial](https://entropically.neocities.org/learn/freezeframe/) covers a lot, if not more, aspects of the library as well as providing alternatives to disabling the animations on GIFS. Please give it a read when you can!