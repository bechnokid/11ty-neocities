module.exports = {
  headerVars: [
    { name: "PROFILE_PICTURE" },
    {
      name: "USERNAME",
      desc: "Self-explanatory! Originally limited to 20 characters on the site."
    },
    {
      name: "USERNAME_SYMBOL",
      desc: "Signified what kind of member the user was at a glance.",
      list: [
        "Basic member (~)",
        "Subscriber (*)",
        "Beta tester (=)",
        "Senior member (`)",
        "Creative staff (¢)",
        "Administrator ($)",
        "Staff member (+)"
      ]
    },
    {
      name: "USER_TAGLINE",
      desc: "Originally used for users to list their full names, but it's mostly been used as a tagline of sorts in those days. DO *NOT* LIST YOUR REAL NAME FOR THE LOVE OF--"
    },
  ],
  attrs: [
    {
      name: "NOUN",
      desc: "Selected from the following list:",
      list: [
        "Anime Artist",
        "Anthro Artist",
        "Art Appreciator",
        "Art Student",
        "Cartoonist",
        "Comedy Writer",
        "Comment Addict",
        "Community Addict",
        "Community Whore",
        "Critic",
        "DA Addict",
        "Deviant of Many Talents",
        "Deviously Annoying",
        "Deviously Deviant",
        "deviantART Loather",
        "deviantART Supporter",
        "Digital Artist",
        "Fantasy Writer",
        "General Digital Photographer",
        "General Fiction Writer",
        "General Skinner",
        "Gift-Giver",
        "Illustrator",
        "Lurker",
        "Mad Scientist",
        "New Artist",
        "Oekaki Addict",
        "Old Fart",
        "Pencil Artist",
        "Pixel Artist",
        "Procrastinator",
        "Romantic Writer",
        "Self-proclaimed Genius",
        "Shadow Deviant",
        "Software Developer",
        "Varied Artist",
        "Wise Ass"
      ]
    },
    {
      name: "GENDER",
      desc: "Original list included only &quot;Male&quot;, &quot;Female&quot;, and &quot;Unknown&quot; (I think?)"
    },
    {
      name: "ACCOUNT_DATE",
      desc: "The date the user created their account."
    },
    {
      name: "SUBSCRIPTION_DEADLINE",
      desc: "The date when the user's subscription would end. Some users had the special privilege of having their subscription last until, and I quote, &quot;Hell freezes over&quot; If the user didn't have a subscription, this would not be listed."
    },
    {
      name: "PAGEVIEW_NUMBER",
      desc: "The number of visits the user's profile had accumulated. This was so big back then, I kinda miss it!"
    },
    { name: "COUNTRY" },
    {
      name: "STATUS_IMAGE, STATUS_ALT, and STATUS_TOOLTIP",
      desc: "An image selected from a list of emojis (then known as &quot;emoticons&quot;). You can use regular emojis for this one, but if you would like to make the page as authentic as possible, a list of deviantART's emojis is listed under **deviantART Emoticons** along with their original tooltip text."
    },
    {
      name: "DISCORD_USERNAME",
      desc: "Originally used for users to list their handle on AIM, MSN Messenger, etc. I figured putting Discord here would be appropriate until I find more IM apps that are used a lot!"
    },
  ],
  links: [
    {
      name: "WEBSITE_BTN_LINK, WEBSITE_BTN_IMG, and WEBSITE_BTN_ALT_TEXT",
      desc: "If a user had a website, then they had the option to put their button here. Be sure to replace the image link with your website button."
    },
    {
      name: "WEBSITE",
      desc: "Similar to the website button, you can just put in the link of your website (or another one entirely) here."
    },
    { name: "EMAIL" },
  ],
  stats: [
    {
      name: "DEVIANT_USER_STATUS",
      desc: "Provided a description of the type of member that the user was.",
      list: [
        "Member (~)",
        "DeviantART Subscriber (*)",
        "Official Beta Tester (=)",
        "Senior Member (`)",
        "Creative Staff (¢)",
        "Administrator ($)",
        "deviantART Staff (+)"
      ]
    }
  ],
  info: [
    {
      name: "DEVIANT_ID_IMG and DEVIANT_ID_ALT_TEXT",
      desc: "This differs from the profile picture. Here, users can show a larger image of themselves."
    },
    {
      name: "#deviant-list",
      desc: "Think of this list as the offical deviantART survey/quiz. You can list all, some, or none of these questions! I never really understood what &quot;Skin of choice&quot; meant..."
    }
  ],
  cssVars: [
    { name: "STATUS_CAFE_USERNAME", desc: "Self-explanatory. This is used to hide the &quot;Subscribe with Atom&quot; section on your page." },
    { name: "USERNAME_SYMBOL", desc: "Should match the same USERNAME_SYMBOL that you choose for your HTML code."},
    { name: "SIGNATURE", desc: "Similar to forum signatures. Unfortunately, due to the limitations of pseudo classes, this can only be in plain text, and no HTML can be used."}
  ],
  emoticons: [
    [
      { name: "Agreeable", src: "nod", freezeframe: true },
      { name: "Aggressive", src: "slap", freezeframe: true },
      { name: "Alienated", src: "alien" },
      { name: "Angry", src: "angered", freezeframe: true },
    ],
    [
      { name: "Artistic", src: "painter" },
      { name: "Benevolent", src: "hug", freezeframe: true },
      { name: "Blank", src: "blankstare" },
      { src: "bored", freezeframe: true },
    ],
    [
      { name: "Bouncy", src: "boing", freezeframe: true },
      { name: "Brainless", src: "brainless" },
      { name: "Buggy", src: "bug" },
      { name: "Busy", src: "work", freezeframe: true },
    ],
    [
      { name: "Comical", src: "jester" },
      { name: "Community Spirit", src: "community" },
      { name: "Compassionate", src: "comfort", freezeframe: true },
      { name: "Confused", src: "confuse", freezeframe: true },
    ],
    [
      { src: "crying" },
      { name: "Crying With Joy", src: "happycry" },
      { name: "Cute", src: "aww" },
      { name: "Dancing", src: "boogie", freezeframe: true },
    ],
    [
      { name: "Dangerous", src: "ninjabattle", freezeframe: true },
      { src: "dead" },
      { name: "Defeated", src: "surrender", freezeframe: true },
      { name: "Depressed", src: "depressed" },
    ],
    [
      { src: "devilish", freezeframe: true },
      { name: "Devious", src: "colonmooncolon", freezeframe: true },
      { src: "drunk", freezeframe: true },
      { name: "Enthusiastic", src: "number1" },
    ],
    [
      { src: "excited", freezeframe: true },
      { name: "Evil", src: "mwahaha", freezeframe: true },
      { name: "Festive", src: "airborne", freezeframe: true },
      { name: "Flirtatious", src: "flirty", freezeframe: true },
    ],
    [
      { name: "Flirty", src: "wink" },
      { name: "Grateful", src: "thanks" },
      { name: "Gloomy", src: "raincloud", freezeframe: true },
      { name: "Happy", src: "smile" },
    ],
    [
      { name: "Holiday Spirit: Christmas", src: "holidays" },
      { name: "Holiday Spirit: Halloween", src: "pumpkin" },
      { name: "Homicidal", src: "stab", freezeframe: true },
      { name: "Hopeful", src: "fingerscrossed", freezeframe: true },
    ],
    [
      { src: "hungry" },
      { name: "Inquisitive", src: "sherlock", freezeframe: true },
      { name: "Intimidating", src: "threaten", freezeframe: true },
      { name: "Invisible / Ignored", src: "invisible" },
    ],
    [
      { name: "Juggling Many Tasks", src: "juggle", freezeframe: true },
      { name: "Laughing", src: "lmao", freezeframe: true },
      { src: "lonely", freezeframe: true },
      { src: "mad" },
    ],
    [
      { name: "Meditative / Reflective", src: "meditate", freezeframe: true },
      { name: "Moo", src: "cow" },
      { name: "Musical", src: "sing", freezeframe: true },
      { name: "Omniscient", src: "eye", freezeframe: true },
    ],
    [
      { name: "On Fire", src: "flame" },
      { name: "Paranoid", src: "paranoid", freezeframe: true },
      { name: "Peaceful", src: "peace" },
      { name: "Plotting", src: "plotting", freezeframe: true },
    ],
    [
      { name: "Popping Pills", src: "pills", freezeframe: true },
      { name: "Proud", src: "clap", freezeframe: true },
      { name: "Psychotic", src: "psychotic", freezeframe: true },
      { name: "Sad", src: "frown" },
    ],
    [
      { name: "Sarcastic", src: "sarcasm", freezeframe: true },
      { name: "Screw The World", src: "finger" },
      { name: "Shit Happens", src: "shithappens", freezeframe: true },
      { name: "Six Feet Under", src: "tombstone" },
    ],
    [
      { name: "Sleeping", src: "sleep", freezeframe: true },
      { name: "Smart", src: "yoda" },
      { name: "Stumped", src: "writersblock", freezeframe: true },
      { name: "Superhuman", src: "superman" },
    ],
    [
      { name: "Tired", src: "sleepy", freezeframe: true },
      { name: "Thumbs Up!", src: "thumbsup" },
      { name: "Unimpressed", src: "movingon", freezeframe: true },
      { name: "Unplugged", src: "plug" },
    ],
    [
      { name: "Very Happy", src: "biggrin" },
      { name: "Worried", src: "worry" },
      { name: "WTF?", src: "wtf", freezeframe: true }
    ]
  ]
}