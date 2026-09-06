/*
## SIMPLE TEXT
{ left: "", center: "", right: "" },

## FULL
{
  cls: "(optional)",
  left: { cls: "", url: "", text: "" },
  center: { url: "", text: "", img: "" },
  right: { cls: "", text: "" }
}

## CUSTOM
{ custom: "HTML code goes here" }
*/
const imgPath = "/assets/images/goodies/cliques/_main/";
export default {
  path: imgPath,
  col1: [
    {
      left: { url: "https://aromatic.wings.nu/", text: "aromatic" },
      center: "//",
      right: "bánh bò"
    },
    {
      left: { cls: "rainbow clique", text: "rainbow", url: "https://cliqued.wings.nu/various.php" },
      center: "🌈",
      right: { cls: "rainbow fav", text: "Mint Green" }
    },
    {
      left: { text: "sanrio", url: "https://nanacore.neocities.org/cliques/sanrio" },
      center: "♡",
      right: "Big Challenges"
    },
    {
      left: { url: "https://cliques.windsprite.nu/mine/", text: "Mine!" },
      center: "//",
      right: "Gilgamesh (FFV)"
    },
    {
      left: {
        text: "flowers",
        cls: "flower-clique",
      },
      center: { text: "ꕤ", url: "https://reef.kingdra.net" },
      right: `hydrangeas <a href='https://web.archive.org/web/20250621102731/http://jbrr.fc2web.com/material.html' target="_blank" rel="noreferrer"><img class='ms-1 inline-img' src=${imgPath + 'hydrangea.gif'} aria-hidden='true' alt=''></a>`,
    },
    {
      left: { text: "Crystallizing", url: "https://crystallizing.neocities.org" },
      center: { img: "phos.png", },
      right: "Phosphophyllite"
    },
    {
      left: { text: "my jam!!", url: "https://cliqued.wings.nu/" },
      center: { img: "jam.png" },
      right: "Chaotic Love Revolution"
    },
  ],
  col2: [
    [
      {
        name: "Dearest",
        tooltip: "OTP: Ryuuko Matoi and Senketsu",
        cls: "dearest-otp",
        url: "https://dearest.snow-heart.net",
        img: "otp_dearest.png",
        alt: "A pink button with hearts on the side and text that says, 'OTP Dearest'",
        mobile: { left: "OTP", center: "::", right: "Ryuuko Matoi & Senketsu" }
      },
      {
        name: "Caffeine NATION",
        tooltip: "Light roast with French vanilla (or Irish creme) creamer",
        url: "https://caffeinated.wings.nu/index.php",
        img: "caffeine-nation.png",
        alt: "A button that says, 'Caffeine NATION'",
        mobile: { left: "caffeineNATION", center: "☕︎", right: "Light roast with creamer" }
      },
      {
        name: "Astrology",
        url: "https://dust.kuchiki.net/",
        img: "aquarius.gif",
        alt: "A button with a star and text that says, 'Aquarius'",
        mobile: { left: "celestial divine", center: "//", right: "aquarius" }
      },
      {
        name: "Anime Genres",
        url: "https://dust.kuchiki.net/",
        img: "shoujo.gif",
        alt: "A pink button with a floating heart and text that says, 'Shoujo'",
        mobile: { left: "i love anime", center: "//", right: "shoujo" }
      },
      {
        name: "Barbieland",
        tooltip: 'This Barbie is a Monster Hunter!',
        url: "https://fan.sanguineroyal.com/cli/barbieland/",
        img: "barbieland.gif",
        alt: "A white button with pink text that says, \"Barbieland\" with the Barbie logo on the side",
        mobile: { left: "Barbieland", center: "::", right: "This Barbie is a Monster Hunter!" }
      },
      {
        name: "Stardaze",
        tooltip: "Wezen",
        url: "https://star.aquarel.nu/",
        img: 'stardaze.gif',
        alt: 'A pink white and purple starry button that says, \"Stardaze\"',
        mobile: { left: 'Stardaze', center: '☆', right: "Wezen" }
      }
    ],
    [
      {
        name: "Pretty Guardians",
        tooltip: "Under the protection of Mercury",
        cls: "mercury",
        url: "https://sailorcrystal.net/guardians/",
        img: "mercury.png",
        alt: "Sailor Mercury",
        cls: "me-1"
      },
      {
        name: "Final Fantasy Moogle Adoption Clique",
        cls: "moogle",
        tooltip: "I ♥ moogles // Kupo, kupo! Moogle Adoption Clique",
        url: "https://midnight-cloud.net/clique/moogle/",
        img: "moogle.gif",
        alt: "A moogle"
      },
      {
        name: "30+ Club",
        cls: "30plus",
        url: "https://moonpr1sm.com/random/30plusclub",
        img: "30plusclub.png",
        alt: "Button that says \"30+ Club\"",
        cls: "ms-2"
      },
      {
        name: 'pixel friends',
        cls: 'pixel-friend',
        tooltip: "pixel friends | Felyne",
        url: 'https://ac.kuchiki.net/',
        img: 'felyne.gif',
        alt: 'Felyne from Animal Crossing New Leaf'
      },
      {
        name: "I Choose You!",
        cls: "i-choose-you",
        tooltip: "I choose you! :: CHI-YU",
        url: "https://pkmn.aquarels.net/",
        img: "i-choose-you.gif",
        alt: "The pokemon Chi-Yu",
        mobile: { left: "I Choose You!", center: "|", right: "CHI-YU" }
      },
      {
        name: "Adopt a Boba",
        tooltip: "Taro Milk Tea :: Adopt a Boba",
        url: "https://pixelrevival.xyz/boba/",
        img: "boba.gif",
        alt: "A cup of taro milk tea with boba",
        cls: "ms-1"
      },
      {
        name: "Protect The Dolls",
        url: "https://www.thetrevorproject.org/resources/",
        img: "protect-the-dolls.png",
        alt: "The symbol of feminism with the trangender pride flag colors overlayed over it, meaning that trans people are safe on this site",
        tooltip: "Trans people are safe here"
      },
      {
        name: "Homegrown Website",
        url: "https://homebody.eu/chimes/",
        img: "homegrown.png",
        alt: "A black circle with \"AI\" in white text being crossed out in red, meaning that this site does not approve of generative AI, nor does was it made from using it",
        tooltip: "No AI was used in the making of this site"
      },
    ],
    [
      {
        name: "exvius",
        tooltip: "Protected by Gilgamesh!",
        url: "https://ff.aquarel.nu/",
        img: "x-gilgamesh.png",
        alt: "Gilgamesh as he appears in Final Fantasy Brave Exvius",
        mobile: { left: "Exvius", center: "//", right: "Gilgamesh" }
      },
      {
        name: "Grand Summoning",
        tooltip: "Grand Summoning :: Yojimbo",
        url: "https://deathbusters.org/aeon/",
        img: "yojimbo.png",
        alt: "Yojimbo as he appears in Final Fantasy Brave Exvius",
        mobile: { left: "Grand Summoning", center: "::", right: "Yojimbo" }
      },
      {
        img: "computer_angel.png",
        url: "https://bungle.online/clique/",
        alt: "An angel with long hair, a halo, and large wings perched on top of computer monitor and keyboard"
      },
    ]
  ],
  images: [
    {
      img: "freehugs.gif",
      url: "https://kel.rainbow-muffin.org/cliques.html",
      alt: "Small text that reads, \"free hugs!\" and fades in and out.",
      cls: "freezeframe",
    },
    {
      url: "https://moonflowerpetz.neocities.org/moonflower",
      img: "loveislove.gif",
      alt: "A button that says \"Love is Love\" with an animated pastel rainbow background",
      cls: "freezeframe",
    },
    {
      url: "https://fan.lysandre.me/starters",
      img: "first_partner_pkmn.gif",
      alt: "A sprite of Totodile, the water starter of the Johto region"
    },
    {
      url: "https://web.archive.org/web/20041209084731/http://www.mitsuzo.net/tea/",
      img: "green_tea.gif",
      alt: "A cup of green tea"
    },
    {
      name: "Starwoven",
      tooltip: "Aquarius",
      url: "https://zodiac.aquarel.nu/",
      img: "starwoven.png",
      alt: "A woman with long blue wavy hair wearing a white dress. She is holding a large blue vase with water pouring out of it, representing Aquarius"
    },
    {
      url: "https://gekiyaku.org/clique",
      img: "love_dove.gif",
      alt: "A pixel image of a pigeon"
    },
    {
      img: "ilovehellokitty.gif",
      url: "https://sd.silentears.net/",
      alt: "Hello Kitty next to a red telephone. The blinking text below her reads \"I ❤️ Hello Kitty\"",
      cls: "freezeframe",
    },
    {
      img: "angel-666.png",
      url: "https://angel.valentinely.cc/",
      alt: "The numbers \"666\" with angel wings next to them, representing \"reflection\".",
      tooltip: "Reflect (666)"
    },
    {
      img: "rainydays.gif",
      url: "https://moonflowerpetz.neocities.org/moonflower",
      alt: 'A dark cloud with rain falling from it. There is text below the cloud that says, "❤️ rainy days."',
      cls: "freezeframe",
    },
    {
      img: "iloveclippy.gif",
      url: "https://lukkypenniedal.wixsite.com/justdandypetz/cliques",
      alt: "A rectangle button with a rainbow gradient background and text that says, \"I ❤️ Clippy\". On the right is Clippy, the former mascot of Microsoft Word."
    },
    {
      img: "days_of_the_week.gif",
      url: "https://homebody.eu/chimes/",
      alt: "A stamp that says, \"Thank god it's Friday\". \"Friday\" is in yellow and curly text."
    },
    {
      img: "segalove.png",
      url: "https://mouseling.net/sega/",
      alt: "Sonic the Hedgehog happily holding a cartoon heart. The next next to him reads, \"I ❤️ SEGA\"."
    },
    {
      name: "Slay the Princess",
      img: "princess_thorn.png",
      url: "https://ephemeri.neocities.org/cliques",
      tooltip: "The Thorn",
    },
  ],
  more: [
    {
      left: { text: 'Cutie Connection', url: 'https://lockheart.love/collections/cliques', },
      center: { img: 'paw-purple.png' },
      right: 'Dodogama'
    },
    {
      left: { url: "https://emocowboy.neocities.org/?emo=/home/cliques/pokemon", text: "favorite" },
      center: {img: "pokefav.png"},
      right: "Chi-yu"
    },
    {
      left: { url: "https://cliqued.wings.nu/fandom.php", text: "OTF" },
      center: "otf.png",
      right: "Digimon & Monster Hunter"
    },
    {
      left: { url: "https://reef.kingdra.net/", text: "greenery" },
      center: "greenery.png",
      right: "cacti"
    },
    {
      left: { url: "https://reef.kingdra.net/", text: "gemstone" },
      center: "gemstone.png",
      right: "amethyst"
    },
    {
      left: { url: "https://lazer-bunny.neocities.org/cliques", text: "Crispy" },
      center: "crispy.png",
      right: "Silent Salt Cookie"
    },
    {
      left: { url: "https://cliques.shadow-lord.com/deadlysins/buttons.php", text: "Wrath" },
      right: " is my Deadly Sin"
    },
    {
      left: { url: "https://lazer-bunny.neocities.org/cliques", text: "My OTP" },
      center: "my-otp.png",
      right: "Siduri x Gilgamesh (FF7R)"
    },
    {
      left: { url: "https://joroki.neocities.org/cliques", text: "my usual" },
      center: "//",
      right: `iced caramel latte <img src=${imgPath + 'usual.png'} alt='' aria-hidden='true'>`,
    },
    {
      left: { url: "https://petrapixel.neocities.org/cliques", text: "love tropes" },
      center: "//",
      right: "slowburn friends to lovers"
    },
    {
      left: { url: "https://petrapixel.neocities.org/cliques", text: "youtube" },
      center: "//",
      right: "Caddicarus"
    },
    {
      left: "Ambient Wonder",
      center: "//",
      right: { url: "https://bloodgulch.neocities.org/ambientwonder/codes", text: "Pokke Village (MHGU)" },
    },
    {
      left: { url: "https://key.aquarels.net/", text: "Keyblade" },
      center: "keyblade.png",
      right: "Guardian's Soul"
    },
    {
      left: { url: "https://patron.snow-heart.net/", text: "patron" },
      center: "::",
      right: "Numemon"
    },
    {
      left: { url: "https://xandra.cc/patrons", text: "protector" },
      center: "🌊",
      right: "Neptune(mon)"
    },
    {
      left: "Gilgamesh",
      center: "materia.png",
      right: { text: "materia", url: "https://www.garden.cainhurst.org/" }
    },
    {
      left: { text: "Cringe is Dead", url: "https://lockheart.love/collections/cliques" },
      center: "||",
      right: "OC x Canon"
    },
    {
      left: { text: "Internet Obsession", url: "https://lockheart.love/collections/cliques" },
      center: "||",
      right: "Small pixel adoptables"
    },
    {
      cls: "type-master",
      custom: `<img src=${imgPath + 'dark.png'}> I am a <span class='font-weight-bold'>dark</span> type <a href='https://seafare.neocities.org/cliques/' target="_blank" rel="noreferrer">master</a>! <img src=${imgPath + 'dark.png'}>`,
    },
    {
      left: { text: "support", url: "https://reef.kingdra.net" },
      center: "splatoon.png" ,
      right: "heavy splatling"
    },
    {
      left: { text: "<strike>un</strike>problematic blorbo", cls: "problematic" },
      center: { text: "❥", url: "https://reef.kingdra.net" },
      right: { text: "dr. xeno", cls: "blorbo" }
    },
    {
      left: { text: "LINKED!", url: "https://ballonlea.net/trickyfox/" },
      center: "linked.png" ,
      right: "Miss Kobayashi"
    },
    {
      cls: "balls",
      left: { text: "balls", url: "https://icirr.us/balls/" },
      center: "balls.png" ,
      right: "master"
    },
    {
      left: { text: "unexpected song", url: "https://cliqued.wings.nu/fandom.php"},
      center: "unexpected-song.png" ,
      right: "Neptunemon"
    },
    {
      left: { text: "spooky", url: "https://sweet-pea.neocities.org/cliques/spooky" },
      center: "spooky.png",
      right: "i love halloween!"
    },
    {
      left: { text: "Special Interest", url: "https://musictelevision.neocities.org/widgets/textcliques" },
      center: "⦂",
      right: "Digimon"
    },
    {
      left: { text: "phrases", url: "https://ephemeri.neocities.org/cliques" },
      center: "✦",
      right: "\"I have a plan. We just need money.\""
    },
    {
      left: { text: "Menhera", url: "https://frammyjammy.com/cliques/menhera" },
      center: "menhera.png",
      right: "Anxiety"
    },
    {
      left: { text: "Bubblelicious", url: "https://boba.aquarel.nu/" },
      center: "bubblelicious.gif",
      right: "Taro milk tea"
    },
    {
      left: { text: "just can't get enough", url: "https://ohmydarling.org/food/" },
      center: "»",
      right: "bún bò Huế"
    },
    {
      left: { text: "Freaky Fabulous", url: "https://slushiecafe.neocities.org/cliques" },
      center: "💀🎀",
      right: "Draculaura"
    },
  ],
}