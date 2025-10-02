export default {
  env: process.env.ELEVENTY_ENV,
  name: "Bechno Kid's Hideout",
  url: "https://bechnokid.neocities.org",
  stylesheetsUrl: "/assets/stylesheets",
  cssUrl: "/assets/stylesheets/css",
  jsUrl: "/assets/javascript",
  imgUrl: "/assets/images",
  desc: "The personal website of a beet disguised as a software engineer. Contains art, ramblings, and other things?",
  ogImgUrl: "https://bechnokid.neocities.org/images/og_image.png",
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
    { name: 'RSS Feed', url: '/feed.xml' },
    { name: 'Guestbook', url: '/guestbook' }
  ],
  favicon: {
    prod: "/assets/images/favicon.ico",
    dev: "/assets/images/meat.png"
  }
}
