---
title: Implementing FreezeframeJS
shortTitle: FreezeframeJS
displayOrder: 2
description: A tutorial on installing a script to freeze GIFs.
prism: true
permalink: /tutorials/freezeframe/index.html
redirectFrom: [/resources/tut_freezeframe, /resources/freezeframe, /resources/tutorials/freezeframe]
summary: "**NOTE:** The examples will not work if JavaScript is disabled."
---
==toc

## Intro

Hi there! You are looking at the **2.0 version of the Freezeframe tutorial** with a script that's (hopefully) a lot easier to read and use! The archived version of this tutorial can be [found here](../freezeframe_old).

To be honest, this new version was inspired [Solaria's tutorial](https://solaria.neocities.org/guides/gifpausetut) on freezing GIFs. I loved his tutorial but whined to myself, *"Weeehhh, I don't wanna save static images of ALL of my GIFs...."*. FreezeframeJS had the benefit of essentially installing the script and leaving it alone (for the most part).

However, FreezeframeJS came with its own issues that others ([Vance](https://entropically.neocities.org/learn/freezeframe/), [Sen](https://sen.fish/), and myself) found really annoying, such as:

- Its difficulty to install, which was the reason why I made the tutorial in the first place.
- Having no features for toggling or customizing transition animations, meaning that if the image is loading, it will always have a spinning logo.
- Its original code is long and illegible, making it nearly impossible to modify and see why certain parts of it won't work the way you want it to.
- Causing images to stretch by default due to its "responsiveness" option, which I find to be a little silly.
- No longer being updated (at the time of writing this in 11/2025), so users cannot ask questions, submit issues, or make any pull requests.

The list goes on! The issues made it annoying enough for me to ultimately stop using the library.

***So!!!*** I took it upon myself to make a **new script**, simplifying Freezeframe's original script that automatically creates a static image for every animated image, while also using Solaria's script as reference to make it easy to install without any unnecessary fiddling with the default settings.

I also removed any instances of JQuery for this tutorial. I still like using JQuery, but it's also good to learn vanilla JavaScript in case JQuery is deemed deprecated in the future. {% emote 'happy' %}

Here's a small demo of the new script without any styling!

{% codeDemo  "Script demo for freezing GIFs", height = "115", class = "mt-2" %}

```html
<button class="play-gif">Play GIFs</button>
<button class="stop-gif">Stop GIFs</button>
<button class="toggle-gif">Turn GIFs on/off</button>

<div style="margin-top: 1rem">
  <img class="freeze" src="/assets/images/goodies/stamps/robbie-rotten.gif" alt="animated stamp of Robbie Rotten from Lazytown">
</div>
```

```js
class FreezeImages {
  constructor(options = {}) {
    // Set default params
    this.selector = options.selector || ".freeze"
    this.imgCls = "ff-img";
    this.canvasCls = "ff-canvas";
    this.hover = (options.hover === true) ? true : false;

    // Finds all images with selector class and within elements with the selected class
    //  and creates list
    const imgList = document.querySelectorAll(`img${this.selector}, ${this.selector} img`);
    this.imgList = imgList;

    // Creates <style> tag for new elements
    if (!this.noCSS) {
      const style = document.createElement('style');
      style.textContent = `
        .ff-container {
          display: flex;
          position: relative;
        }

        .ff-container img,
        .ff-container canvas {
          align-self: start;
        }

        .ff-container.ff-hover:hover .ff-active {
          position: absolute;
          opacity: 0;
        }

        .ff-container.ff-hover:hover .ff-inactive {
          position: static;
          opacity: 1;
        }

        .ff-inactive {
          position: absolute;
          opacity: 0;
        }
      `;
      document.head.appendChild(style);
    }

    // Loops through all images
    for (const img of this.imgList) {
      // Gives <img> the inactive class, which hides GIF by default
      img.className = `${this.imgCls} ff-inactive`;

      // Creates <canvas> of GIF and copies data of first frame of animation
      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.className = `${this.canvasCls} ff-active`;
      canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

      // Creates container that will hold both <img> and <canvas>
      let wrapper = document.createElement("div");
      wrapper.className = "ff-container";
      if (this.hover) wrapper.classList.add("ff-hover");

      // Inserts container with <img> and <canvas> where <img> originally was
      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);
      wrapper.appendChild(canvas);
    }
  }

  start() { // Starts animations by switching class names
    for (const img of this.imgList) {
      img.className = `${this.imgCls} ff-active`;
      img.nextSibling.className = `${this.canvasCls} ff-inactive`;
    }
  }

  stop() { // Stops animations by switching class names
    for (const img of this.imgList) {
      img.className = `${this.imgCls} ff-inactive`;
      img.nextSibling.className = `${this.canvasCls} ff-active`;
    }
  }

  toggle() { // Toggles animations by switching class names based on current state
    for (const img of this.imgList) {
      let imgNewCls = (img.className.includes('ff-inactive')) ? "ff-active": "ff-inactive";
      let canvasNewCls = (img.className.includes('ff-inactive')) ? "ff-inactive": "ff-active";

      img.className = `${this.imgCls} ${imgNewCls}`;
      img.nextSibling.className = `${this.canvasCls} ${canvasNewCls}`;
    }
  }
}

// Waits for page to finish loading
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    // Initialize script
    const f = new FreezeImages ()

    // Set event listeners for all buttons
    for(const el of document.getElementsByClassName('play-gif')) {
      el.addEventListener('click', () => f.start());
    }

    for(const el of document.getElementsByClassName('stop-gif')) {
      el.addEventListener('click', () => f.stop());
    }

    for(const el of document.getElementsByClassName('toggle-gif')) {
      el.addEventListener('click', () => f.toggle());
    }
  }
});
```

{% endcodeDemo %}

The script is not perfect by any means, and I'm sure there is a lot that can be improved on. However, after using it on my site for a while, I think it's pretty good for what it is, and I hope all of you find it easy to use, too.

## Simple Setup

### HTML

Set "freeze" as the class name for each GIF individually...

```html
<img class="freeze" src="IMGSRC.gif">
```

...Or for the parent element.

```html
<div class="freeze">
  <img src="IMGSRC.gif">
  <img src="IMGSRC.gif">
  <img src="IMGSRC.gif">
</div>
```

Make buttons for playing and starting the GIFs...

```html
<button class="play-gif">Play GIFs</button>
<button class="stop-gif">Stop GIFs</button>
```

...Or make a single button for toggling them.

```html
<button class="toggle-gif">Toggle GIFs</button>
```

Then, put the "Play/Stop GIFs" buttons or the "Toggle GIFs" button somewhere in the HTML.

...You can also use all three types of buttons if you feel like it! The script will work either way!

### JavaScript

Put the following script in a `<script>` tag in the head of the HTML document.

{% details { title: "(Show/hide script)", summaryCls: "details h4"} %}

Comments can be removed! They're just there to explain how parts of the script works. :)

```js
class FreezeImages {
  constructor(options = {}) {
    // Set default params
    this.selector = options.selector || "freeze"
    this.imgCls = "ff-img";
    this.canvasCls = "ff-canvas";
    this.hover = (options.hover === true || options.hover === "true") ? true : false;
    this.noCSS = (options.no_css === true || options.hover === "true") ? true : false;
    this.smoothing = (options.smoothing === false) ? false : true;

    // Finds all images with selector class and within elements with the selected class
    //  and creates list
    const imgList = document.querySelectorAll(`img.${this.selector}, .${this.selector} img`);
    this.imgList = imgList;

    // Creates <style> tag for new elements
    if (!this.noCSS) {
      const style = document.createElement('style');
      style.textContent = `
        .ff-container {
          display: flex;
          position: relative;
        }

        .ff-container img,
        .ff-container canvas {
          align-self: start;
        }

        .ff-container.ff-hover:hover .ff-active {
          position: absolute;
          opacity: 0;
        }

        .ff-container.ff-hover:hover .ff-inactive {
          position: static;
          opacity: 1;
        }

        .ff-inactive {
          position: absolute;
          opacity: 0;
        }
      `;
      document.head.appendChild(style);
    }

    // Loops through all images
    for (const img of this.imgList) {
      // Gives <img> the inactive class, which hides GIF by default
      img.className = `${this.imgCls} ff-inactive`;

      // Creates <canvas> of GIF and copies data of first frame of animation
      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.className = `${this.canvasCls} ff-active`;
      canvas.getContext('2d').imageSmoothingEnabled = this.smoothing;
      canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

      // Creates container that will hold both <img> and <canvas>
      let wrapper = document.createElement("div");
      wrapper.className = "ff-container";
      if (this.hover) wrapper.classList.add("ff-hover");

      // Inserts container with <img> and <canvas> where <img> originally was
      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);
      wrapper.appendChild(canvas);
    }
  }

  start() { // Starts animation
    for (const img of this.imgList) {
      img.className = `${this.imgCls} ff-active`;
      img.nextSibling.className = `${this.canvasCls} ff-inactive`;
    }
  }

  stop() { // Stops animation
    for (const img of this.imgList) {
      img.className = `${this.imgCls} ff-inactive`;
      img.nextSibling.className = `${this.canvasCls} ff-active`;
    }
  }

  toggle() { // Toggles animation based on current state
    for (const img of this.imgList) {
      let imgNewCls = (img.className.includes('ff-inactive')) ? "ff-active": "ff-inactive";
      let canvasNewCls = (img.className.includes('ff-inactive')) ? "ff-inactive": "ff-active";

      img.className = `${this.imgCls} ${imgNewCls}`;
      img.nextSibling.className = `${this.canvasCls} ${canvasNewCls}`;
    }
  }
}

// Waits for page to finish loading
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    // Initialize script
    const f = new FreezeImages ()

    // Set event listeners for all buttons
    for(const el of document.getElementsByClassName('play-gif')) {
      el.addEventListener('click', () => f.start());
    }

    for(const el of document.getElementsByClassName('stop-gif')) {
      el.addEventListener('click', () => f.stop());
    }

    for(const el of document.getElementsByClassName('toggle-gif')) {
      el.addEventListener('click', () => f.toggle());
    }
  }
});
```

{% enddetails %}

If everything's set up properly, then the buttons and GIFs should behave like in the demo!

From here, you can continue reading for slightly more advanced ways on using this script, or you can skip straight to the [bottom of the page](#closing-thoughts).

## Advanced Usage

From this point on, I'll be using terms that mostly JavaScript users would know. If you're still a beginner at JavaScript, I recommend familiarizing yourself with it more before entering this section!

*You've been warned!*

### Changing Class Names (Images)

The parameters that the script accepts includes the selector name that the script looks for when processing images.

The default class name is **freeze**, but it is possible to use a different class name instead, such as **freeze-img**, as shown below:

```html
<img class="freeze-img" src="IMGSRC.gif">
```

Refer to the highlighted line from this section of the script.

```js/2
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    const f = new FreezeImages ()

    /* Event listeners go here...*/
  }
});
```

Change **line 3** so that it looks like the following:

```js
  const f = new FreezeImages ({ selector: "freeze-img" })
```

The script will now look for all elements with the class name **freeze-img**.

### Changing Class Names (Buttons)

By default, the script waits for the page to finish loading and then looks for the buttons with the class names **play-gif**, **stop-gif**, and **toggle-gif**.

You can change the names the script looks for by going directly into the script.

Let's say we have these buttons for example:

```html
<button class="start-img-btn">Start GIFs</button>
<button class="stop-img-btn">Stop GIFs</button>
<button class="toggle-img-btn">Toggle GIFs</button>
```

For the script to work, look for this block of code in the script:

```js/
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    const f = new FreezeImages ()

    for(const el of document.getElementsByClassName('play-gif')) {
      el.addEventListener('click', () => f.start());
    }

    for(const el of document.getElementsByClassName('stop-gif')) {
      el.addEventListener('click', () => f.stop());
    }

    for(const el of document.getElementsByClassName('toggle-gif')) {
      el.addEventListener('click', () => f.toggle());
    }
  }
});
```

At **line 5**, you would change **play-gif** to **start-img-btn**.
At **line 9**, you would change **stop-gif** to **stop-img-btn**.
At **line 13**, you would change **toggle-gif** to **toggle-img-btn**.

If you want to take the advanced route, you can remove **lines 5 through 15** entirely and make your own event listeners that will call the `start()`, `stop()`, and `toggle()` methods on their own.

### Playing/Pausing GIFs on Hover

By default, the script depends on two existing buttons in the HTML in order to trigger animations. However, by passing in a certain parameter, animations can be triggered by just hovering over an image.

Please note that hovering over images to trigger their animations is only possible on desktop computers. If you plan on making your site mobile-friendly, I would recommend skipping this section and sticking with the buttons!

Refer to the highlighted line from this section of the script.

```js/2
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    const f = new FreezeImages ()

    /* Event listeners go here...*/
  }
});
```

Then, add the "hover" parameter, so the line will look like this:

```js
const f = new FreezeImages ({ hover: true })
```

By setting this parameter, the script will add the class `.ff-hover` to `.ff-container`. Afterwards, hovering over images will play their animations with the power of pure CSS.

This works because of the CSS that the script already added to the `<style>` tag in the head of the document. It's possible that the CSS the script adds might clash with existing styles in your CSS, so if that is something you'd like to avoid, the next section will help!

### No Additional CSS

As previously mentioned, the script adds some CSS to your HTML by default. To prevent this, you can add the **no_css** parameter, and set it to true.

```js
const f = new FreezeImages ({ no_css: true })
```

This will tell the script to not add any CSS to your HTML. The script will still create the other elements with the original class names ("ff-container", etc.), so you can add in your own CSS if you so desire!

Here's the original CSS from the script in case you'd like to use it as reference (with pretty syntax highlighting for easy viewing):

{% details { title: "(Show/hide CSS)", summaryCls: "details h4"} %}

```css
.ff-container {
  display: flex;
  position: relative;
}

.ff-container img,
.ff-container canvas {
  align-self: start;
}

.ff-container.ff-hover:hover .ff-active {
  position: absolute;
  opacity: 0;
}

.ff-container.ff-hover:hover .ff-inactive {
  position: static;
  opacity: 1;
}

.ff-inactive {
  position: absolute;
  opacity: 0;
}
```

{% enddetails %}

### Resulting Constructor

To make things easier to see, there is what calling the FreezeImages class will look with its available options.

```js
const f = new FreezeImages (
  {
    selector: "freeze",
    hover: true,
    noCss: true,
    smoothing: false,
  }
)
```

## Troubleshooting

### Images Appear Stretched

This is a common issue I've encountered when using flex, so I thought I'd put this here in case someone else needs help.

I find that putting this CSS block would prevent images from stretching. Hopefully, it works for you, too!

```css
img {
  align-self: end; /* "center" and "start" also work */
}
```

## Closing Thoughts

As mentioned before, this script isn't perfect since I'm not a JavaScript expert, so if anyone reads through the script and sees some improvements that can be made, feel free to send them to me at **bechnokid@yahoo.com**, and I'll make the appropriate changes!

You can also make a pull request on the [GitHub repository](https://github.com/bechnokid/simple-freeze) if that's more your style!

Everyone is more than welcome to take the script for themselves and make a better version that works for their site! I fully encourage it! {% emote 'happy' %}
