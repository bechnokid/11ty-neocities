---js
{
  title: "2000s Blog",
  displayOrder: 3,
  description: "A theme inspired by 2000s blogs.",
  pfp: "https://i.ibb.co/FRZDJbr/suifelhunt.png"
}
---

## Notes

In some blog sites, users have the option to use a different 100x100 icon for whatever post they make on their blog. This theme can't replicate this feature exactly, but you can still do something similar if you finagle with the CSS.

The following CSS block within the code cycles through 4 different images depending how many statuses are in the account.

```css
article.status:nth-of-type(4n) .status-content::before {
  content: url(IMAGE_PATH_1);
}

article.status:nth-of-type(4n + 1) .status-content::before {
  content: url(IMAGE_PATH_2);
}

article.status:nth-of-type(4n + 2) .status-content::before {
  content: url(IMAGE_PATH_3);
}

article.status:nth-of-type(4n + 3) .status-content::before {
  content: url(IMAGE_PATH_4);
}
```

You can technically add in more images, but that would require more lines with a different pattern for each `nth-of-type` selector depending how many images you plan to add.

For example, if you want to cycle through 5 images, you'll have to replace all of the `4n` with `5n`, and make a 5th line `nth-of-type(5n + 4)`. Hopefully, that makes sense!

However, you want the theme to use just one image, you can delete this entire block of code and replace it with the following:

```css
.status-content::before {
  content: url(IMAGE_PATH_HERE);
}
```

## Credits

- Inspiration: [CreateBlog](https://www.createblog.com/)
- Icons are from "Campfire Cookiing in Another World with my Absurd Skill"
