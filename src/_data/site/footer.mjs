export default {
  imgSrc: "/assets/images/footer/",
  links: [
    {
      name: 'Sitemap',
      url: '/sitemap'
    },
    {
      name: 'Guestbook',
      url: '/guestbook'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/bechnokid/neocities',
    },
    {
      img: 'rss.svg',
      url: '/feed.xml',
      cls: 'mx-2 d-flex rss-link ms-1',
      alt: 'RSS icon that leads to RSS feed',
      imgCls: 'img-svg'
    }
  ],
  buttons: [
    {
      src: "cc-license.png",
      url: "https://creativecommons.org/licenses/by-nc/4.0/",
      alt: "Attribution-NonCommercial 4.0 International"
    },
    {
      src: "validhtml.png",
      url: "https://validator.w3.org/nu/?doc=https%3A%2F%2Fbechnokid.neocities.org%2Fhome%2F",
      alt: "Valid HTML!"
    },
    {
      src: "validcss.png",
      url: "https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbechnokid.neocities.org%2Fhome&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en",
      alt: "Valid CSS!"
    }
  ]
}