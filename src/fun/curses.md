---
title: Curses Generator
displayOrder: 2
description: A generator to help come up with clever curses other than "Go to hell".
summary: Once upon a time, a voice actor named P.M Seymour created a [video](https://www.youtube.com/watch?v=vHidPQdqxhs) and stated the following,<br><br>*"'go to hell' is too weak a curse to throw at people, hit them where it hurts like 'I hope all your soups in the future have a faint bad metal taste no matter what you order or make'"*<br><br>Afraid that the YouTube video and original Tumblr post would eventually be lost in the sands of time, I took it upon myself to take all of those curses and put them into a generator! Have fun!
---

<button class="go-to-heck button mb-2">I hope...</button>
<div class='sidebar'>
<div class="content p-3"><p class="random">May the curses begin!</p></div>
<script>m=[{% for curse in curses %}"{{ curse }}",{% endfor %}];var c = m.slice(0);function randomPull(){ var randomIndex=Math.floor(Math.random() * c.length); $(".random").html(c[randomIndex]); c.splice(randomIndex, 1);}$(".go-to-heck").on("click", function(){ if (c.length < 1){ c=m.slice(0)}; randomPull();});</script>
</div>