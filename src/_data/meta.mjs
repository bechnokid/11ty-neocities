export default {
  env: process.env.ELEVENTY_ENV,
  name: "Bechno Kid's Hideout",
  url: "https://bechnokid.neocities.org",
  cssUrl: "/assets/css",
  jsUrl: "/assets/js",
  imgUrl: "/assets/images",
  desc: "The personal website of a beet disguised as a software engineer. Contains art, ramblings, and other things?",
  ogImgUrl: "/assets/images/og_image.png",
  lang: "en-US",
  author: {
    name: "Bechno Kid",
    email: "bechnokid@yahoo.com"
  },
  buttons:  [
    { alt: "88 by 31", src: "https://raw.githubusercontent.com/bechnokid/neocities/refs/heads/master/public/assets/images/button.png"},
    { alt: "32 by 32", src: "https://raw.githubusercontent.com/bechnokid/neocities/refs/heads/master/public/assets/images/button32x32.gif"},
    { alt: "200 by 40", src: "https://raw.githubusercontent.com/bechnokid/neocities/refs/heads/master/public/assets/images/button200x40.png"}
  ],
  introLinks: [
    { name: 'Sitemap', url: '/sitemap' },
    { name: 'RSS', url: '/feeds' },
    { name: 'Guestbook', url: '/guestbook' }
  ],
  favicon: {
    prod: "/assets/images/favicon.ico",
    dev: "/assets/images/meat.png"
  },
  updated: [ ],
  new: [ ],
  emotes: [
    "angry",
    "calm",
    "confused",
    "dead",
    "embarrassed",
    "excited",
    "happy",
    "love",
    "sad",
    "shock",
    "sleep",
    "wink",
    "worried",
  ],
}
