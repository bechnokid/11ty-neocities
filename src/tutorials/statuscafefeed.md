---
title: Creating a Feed Reader from StatusCafe
shortTitle: StatusCafe Feed
displayOrder: 4
description: A tutorial on how to create a feed reader directly from [StatusCafe](https://status.cafe/).
code: true
---
## 0) Introduction

While I may not use StatusCafe anymore, I'm sure there are many who already have an account on that site, and perhaps want to make a microblog out of it to put in their own site.

It is possible to modify the CSS in your StatusCafe account and then put it in an iframe, but creating a feed reader allows for more customization, if needed.

## 1) Obtaining StatusCafe's Feed

You can get your StatusCafe feed from the URL below. All you would need to do is replace `YOUR_STATUSCAFE_USERNAME` with your StatusCafe username.

**https://<i></i>status<i></i>.cafe/users/YOUR_STATUSCAFE_USERNAME.atom**

## 2) Creating the HTML Element

Somewhere in your HTML code, create an element where the Feed Reader will be. This can be a `<div>`, `<span>`, whichever you'd like. The most important thing is to label it, either with an **id** or **class** attribute.

According to the HTML standard, since there will be only one feed reader, I'll be giving it an id attribute called `feed-reader`.

<pre><code class='css-code'>&lt;<span class="selector">div</span> <span class="attribute">id</span>=<span class="attr-value">&apos;feed-reader&apos;</span>&gt;&lt;/<span class="selector">div</span>&gt;</code></pre>

## 3) Making the Script

Next, we will be creating the script.

Make sure that the script is in a `<script>` tag is below the HTML element you created.

I usually like to put the `<script>` tag right above the `</body>` tag, as shown below:

<pre><code class='css-code'>&lt;<span class="selector">html</span>&gt;
  &lt;<span class="selector">head</span>&gt;&lt;/<span class="selector">head</span>&gt;
  &lt;<span class="selector">body</span>&gt;
    <span class="comment">&lt;!-- CODE GOES HERE --&gt;</span>
    &lt;<span class="selector">script</span>&gt;&lt;/<span class="selector">script</span>&gt; <span class="comment">&lt;-- Right here.</span>
  &lt;/<span class="selector">body</span>&gt;
&lt;/<span class="selector">html</span>&gt;</code></pre>

Put the following code into the `<script>` tag:

<pre><code class='css-code'><span class="attribute">const</span> feedURL = <span class="attr-value">&apos;https://status.cafe/users/[YOUR_STATUSCAFE_USERNAME].atom&apos;</span>;

<span class="selector">fetch</span>(feedURL)
  .<span class="selector">then</span>(response =&gt; response.text())
  .<span class="selector">then</span>(str =&gt; <span class="attribute">new</span> window.<span class="selector">DOMParser</span>().<span class="selector">parseFromString</span>(str, <span class="attr-value">&quot;text/xml&quot;</span>))
  .<span class="selector">then</span>(data =&gt; {
    <span class="attribute">const</span> entries = data.<span class="selector">querySelectorAll</span>(<span class="attr-value">&quot;entry&quot;</span>)
  });</code></pre>

What this code is doing is converting the feed into XML, which Javascript can then extract the feed's data. The script then takes all of the posts you created in StatusCafe and stores them into the `entries` variable.

## 4) Preparing the Data
This section will show how to prepare the data of your StatusCafe posts using the stored feed data.

The way how StatusCafe sets up their feeds makes things a little difficult, and it took me a while to figure everything out. Hopefully the next few steps won't be too confusing.

Underneath `const entries = data.querySelectorAll("entry")`, add the following:

<pre><code class='css-code'><span class="attribute">let</span> html = <span class="attr-value">``</span>;

entries.<span class="selector">forEach</span>(el =&gt; {
  <span class="attribute">let</span> title = el.<span class="selector">querySelector</span>(<span class="attr-value">&quot;title&quot;</span>).innerHTML.<span class="selector">slice</span>(<span class="selector">0</span>, <span class="attr-value">NUMBER_OF_CHARACTERS</span>).<span class="selector">trim</span>();
  <span class="attribute">let</span> content = el.<span class="selector">querySelector</span>(<span class="attr-value">&quot;content&quot;</span>).textContent.<span class="selector">trim</span>();
  <span class="attribute">let</span> dateString = el.<span class="selector">querySelector</span>(<span class="attr-value">&quot;published&quot;</span>).innerHTML.<span class="selector">slice</span>(<span class="selector">0</span>,<span class="selector">10</span>);
});</code></pre>

This loop takes the data from each StatusCafe post and splits them into different variables that we can put into the "html" variable later on. I'll explain each one.

- **title** - Displays your StatusCafe username along with the emoji picked when creating the post. Note the `NUMBER_OF_CHARACTERS` shown in the code block. This number should be equal to the number of characters in your username. However, if you want to include the emoji associated with the status, just add 3 to the number of characters in your username.
  - For example, my username "bechnokid" contains 9 characters. If I wanted to include the emoji, I would replace `NUMBER_OF_CHARACTERS` with 9 + 3, which would be 12.
  - The final line would then be: `let title = el.querySelector("title").innerHTML.slice(0, 12).trim()`
- **content** - Displays the full status. Self-explanatory.
- **dateString** - This is optional, but this displays the date when the status was posted. It will also display the full date instead of the "...days ago" that StatusCafe displays.

## 5) Setting up the HTML
We will be adding the extracted data into the "html" variable that I previously mentioned.

This part requires the most customization as it entirely depends on how you want your feed to be displayed. For simplicity's sake, I'll use `<p>` tags.

Add the following underneath `let dateString = el.querySelector("published").innerHTML.slice(0,10)`:

<pre><code class='css-code'>html += <span class='attr-value'>`
  &lt;p&gt;</span>${title} - ${dateString}<span class='attr-value'>`&lt;/p&gt;
  &lt;p&gt;</span>${content}<span class='attr-value'>`&lt;/p&gt;
`</span>;</code></pre>

This sets up the HTML of one of your posts, putting your username and the date on line line, and then the status on the next line.

Then, place the following outside the `entries.forEach()` loop:

<pre><code class='css-code'><span class="attr-value">document</span>.<span class="selector">getElementById</span>(<span class="attr-value">"feed-reader"</span>).innerHTML = html;</code></pre>

This line will look for the HTML element with the id attribute `feed reader` and fill it with the data stored in the `html` variable.

## 6) The Finished HTML

The finished HTML should look something like this:

<pre><code class='css-code'>&lt;<span class="selector">html</span>&gt;
  &lt;<span class="selector">head</span>&gt;&lt;/<span class="selector">head</span>&gt;
  &lt;<span class="selector">body</span>&gt;
    &lt;<span class="selector">div</span> <span class="attribute">id</span>=<span class="attr-value">&apos;feed-reader&apos;</span>&gt;&lt;/<span class="selector">div</span>&gt;
    &lt;<span class="selector">script</span>&gt;
      <span class="attribute">const</span> feedURL = <span class="attr-value">&apos;https://status.cafe/users/[YOUR_STATUSCAFE_USERNAME].atom&apos;</span>

      <span class="selector">fetch</span>(feedURL)
        .<span class="selector">then</span>(response =&gt; response.<span class="selector">text</span>())
        .<span class="selector">then</span>(str =&gt; <span class="attribute">new</span> <span class="attr-value">window</span>.<span class="selector">DOMParser</span>().<span class="selector">parseFromString</span>(str, <span class="attr-value">&quot;text/xml&quot;</span>)
        .<span class="selector">then</span>(data =&gt; {
          <span class="attribute">const</span> entries = data.<span class="selector">querySelectorAll</span>(<span class="attr-value">&quot;entry&quot;</span>;
          <span class="attribute">let</span> html = <span class="attr-value">``</span>;

          entries.<span class="selector">forEach</span>(el =&gt; {
            <span class="attribute">let</span> title = el.<span class="selector">querySelector</span>(<span class="attr-value">&quot;title&quot;</span>.innerHTML.<span class="selector">slice</span>(<span class="selector">0</span>, <span class="attr-value">NUMBER_OF_CHARACTERS</span>).trim();
            <span class="attribute">let</span> content = el.<span class="selector">querySelector</span>(<span class="attr-value">&quot;content&quot;</span>.textContent.<span class="selector">trim</span>();
            <span class="attribute">let</span> dateString = el.<span class="selector">querySelector</span>(<span class="attr-value">&quot;published&quot;</span>.innerHTML.<span class="selector">slice</span>(<span class="selector">0</span>,<span class="selector">10</span>);
            html += <span class='attr-value'>`
              &lt;p&gt;</span>${title} - ${dateString}<span class='attr-value'>&lt;/p&gt;
              &lt;p&gt;</span>${content}<span class='attr-value'>&lt;/p&gt;
            `</span>;
          })
          <span class="attr-value">document</span>.<span class="selector">getElementById</span>(<span class="attr-value">&quot;feed-reader&quot;</span>.innerHTML = html;
        })
    &lt;/<span class="selector">script</span>&gt;
  &lt;/<span class="selector">body</span>&gt;
&lt;/<span class="selector">html</span>&gt;</code></pre>

Again, be sure to replace `YOUR_STATUSCAFE_USERNAME` with your StatusCafe username and `NUMBER_OF_CHARACTERS` with the number of characters in your StatusCafe username (+ 3 if you want to include the emoji).

## 7) Finishing the Reader

Using the script above, your feed reader should look something like the following (without any formatting):

<div id="feed-reader" style="max-height:300px;overflow-y:auto;border:1px solid var(--background)"></div>

## 8) Shortening the Reader (optional)

Note that using the `forEach()` will loop through every post you made on StatusCafe. If you have more than fifty statuses, it can be overwhelming to scroll through a nearly endless list of statuses.

There are some options for this, such as implementing pagination, but the easiest (and my favorite) method is showing only a certain number of statuses. Let's say, for this example, that I only want to show 3 statuses from StatusCafe, and then provide a link to my StatusCafe account.

First, make the following changes:
1. Change `forEach()` into a `for` loop with an index
1. Change `el` within the loop to `entries[i]`

Applying the changes will change the loop into something like the following:

<pre><code class='css-code'><span class="attribute">for</span> (i = <span class="selector">0</span>; i &lt; <span class="attr-value">STATUS_LIMIT</span>; i++) {
  <span class="attribute">let</span> title = entries[i].<span class="selector">querySelector</span>(<span class="attr-value">&quot;title&quot;</span>).innerHTML.<span class="selector">slice</span>(0, <span class="attr-value">NUMBER_OF_CHARACTERS</span>).<span class="selector">trim</span>();
  <span class="attribute">let</span> content = entries[i].<span class="selector">querySelector</span>(<span class="attr-value">&quot;content&quot;</span>).textContent.<span class="selector">trim</span>();
  <span class="attribute">let</span> dateString = entries[i].<span class="selector">querySelector</span>(<span class="attr-value">&quot;published&quot;</span>).innerHTML.<span class="selector">slice</span>(<span class="selector">0</span>,<span class="selector">10</span>);
  html += <span class="attr-value">`</span>
    ${title} - ${dateString}
    ${content}
  <span class="attr-value">`</span>;
}
html += <span class="attr-value">`&lt;p&gt;&lt;a href=&apos;https://status.cafe/users/bechnokid&apos;&gt;See more at StatusCafe&lt;/a&gt;&lt;/p&gt;`</span>;
<span class="attr-value">document</span>.<span class="selector">getElementById</span>(<span class="attr-value">&quot;feed-reader&quot;</span>).innerHTML = html;</code></pre>

You might have noticed that there is a new variable now: `STATUS_LIMIT`. This can be changed to the number of posts you want the feed reader to generate.

If we change this number to 3, the feed reader will generate 3 posts, resulting in the following:

<div id="feed-reader2" style="border:1px solid var(--background);margin-top:1em">

## 9) Closing Thoughts

Thank you for reading this tutorial! Like I said previously, it is entirely possible to use an iframe with StatusCafe as its source, but I've started to enjoy this method just for its customization options. Regardless, I hope you find this useful!

If you come across any issues or mistakes with this tutorial, feel free to email me at [bechnokid@yahoo.com!](mailto:bechnokid@yahoo.com)

<script>const feedURL = 'https://status.cafe/users/bechnokid.atom';fetch(feedURL).then(response => response.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {const entries = data.querySelectorAll("entry");let html = ``;let title, content, dateString = ``;entries.forEach(el => {title = el.querySelector("title").innerHTML.slice(0, 12).trim();content = el.querySelector("content").textContent.trim();dateString = el.querySelector("published").innerHTML.slice(0,10);html += `<p>${title} - ${dateString}<p><p>${content}</p>`;});let html2 = ``;for (i = 0; i < 3; i++) {title = entries[i].querySelector("title").innerHTML.slice(0, 12).trim();content = entries[i].querySelector("content").textContent.trim();dateString = entries[i].querySelector("published").innerHTML.slice(0,10);html2 += `<p>${title} - ${dateString}<p><p>${content}</p>`;}html2 += `<p><a href='https://status.cafe/users/bechnokid'>See more at StatusCafe</a></p>`;document.getElementById("feed-reader").innerHTML = html;document.getElementById("feed-reader2").innerHTML = html2;})</script>