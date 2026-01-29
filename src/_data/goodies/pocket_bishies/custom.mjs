/*
    {
      name: "",
      type: "shonen or shoujo",
      img: "",
      imgAlt: "",
      questions: [
        {
          id: "",
          text: "",
          options: [
            { label: "", val: "answer1" },
            { label: "", val: "answer2" },
            { label: "", val: "answer3" },
          ],
        },
        {
          id: "",
          text: "",
          options: [
            { label: "", val: "answer4" },
            { label: "", val: "answer5" },
            { label: "", val: "answer6" },
          ],
        },
        {
          id: "",
          text: "",
          options: [
            { label: "", val: "answer7" },
            { label: "", val: "answer8" },
            { label: "", val: "answer9" },
          ],
        },
      ],
      answer: ["", "", ""],
    }
*/
export default {
  "Demon Slayer": [
    {
      name: "Kyojuro Rengoku",
      type: "shonen",
      img: "kny_rengoku.jpg",
      imgAlt: "Kyojuro Rengoku from Demon Slayer",
      questions: [
        {
          id: "breathing",
          text: "What is Rengoku's breathing style?",
          options: [
            { label: "Flame", val: "answer1" },
            { label: "Heat", val: "answer2" },
            { label: "Magma", val: "answer3" },
          ],
        },
        {
          id: "birthday",
          text: "When is Rengoku's birthday?",
          options: [
            { label: "May 4th", val: "answer4" },
            { label: "May 16th", val: "answer5" },
            { label: "May 10th", val: "answer6" },
          ],
        },
        {
          id: "location",
          text: "What was Rengoku doing when Tanjiro first sees him on the Mugen Train?",
          options: [
            { label: "Sleeping", val: "answer7" },
            { label: "Reading", val: "answer8" },
            { label: "Eating", val: "answer9" },
          ],
        },
      ],
      answer: ["answer1", "answer6", "answer9"],
    },
    {
      name: "Shinobu Kocho",
      type: "shoujo",
      img: "kny_shinobu.jpg",
      imgAlt: "Shinobu Kocho from Demon Slayer",
      questions: [
        {
          id: "breathing",
          text: "What is Shinobu's breathing style?",
          options: [
            { label: "Butterfly", val: "answer1" },
            { label: "Insect", val: "answer2" },
            { label: "Arachnid", val: "answer3" },
          ],
        },
        {
          id: "",
          text: "What does Shinobu specialize in?",
          options: [
            { label: "Swordfighting", val: "answer4" },
            { label: "Acrobatics", val: "answer5" },
            { label: "Medicine", val: "answer6" },
          ],
        },
        {
          id: "sisters",
          text: "How many sisters does Shinobu have?",
          options: [
            { label: "1", val: "answer7" },
            { label: "2", val: "answer8" },
            { label: "3", val: "answer9" },
          ],
        },
      ],
      answer: ["answer2", "answer6", "answer8"],
    }
  ],
  "Digimon": [
    {
      name: 'Alphamon',
      type: 'shoujo',
      img: 'dgmn_alphamon.jpg',
      imgAlt: 'Alphamon from Digimon Story: Cyber Sleuth',
      questions: [
        {
          id: "blegh",
          text: "What is a food/drink that Alphamon frequently makes as Kyoko Kuremi throughout Cyber Sleuth?",
          options: [
            { label: "Omurice", val: "answer1" },
            { label: "Coffee", val: "answer2" },
            { label: "Smoothie", val: "answer3" },
          ],
        },
        {
          id: "ending",
          text: "Does Aiba (the player) go with Alphamon to the Digital World at the end of Cyber Sleuth?",
          options: [
            { label: "Unsure. The ending is vague.", val: "answer4" },
            { label: "Yes. They become Alphamon's partner.", val: "answer5" },
            { label: "No. They return back home.", val: "answer6" },
          ],
        },
        {
          id: "position",
          text: "What is another title that Alphamon has?",
          options: [
            { label: "Lone Wolf", val: "answer7" },
            { label: "Black Knight", val: "answer8" },
            { label: "Aloof Hermit", val: "answer9" },
          ],
        },
      ],
      answer: ["answer2", "answer6", "answer9"],
    },
    {
      name: "Beelzemon",
      type: "shonen",
      img: "dgmn_beelzemon.jpg",
      imgAlt: "Beelzemon from the Digimon franchise",
      questions: [
        {
          id: "bike",
          text: "What is the name of Beelzemon's bike?",
          options: [
            { label: "Incubus", val: "answer1" },
            { label: "Behemoth", val: "answer2" },
            { label: "Dante", val: "answer3" },
          ],
        },
        {
          id: "",
          text: "What is Beelzemon's attribute?",
          options: [
            { label: "Virus", val: "answer4" },
            { label: "Vaccine", val: "answer5" },
            { label: "Data", val: "answer6" },
          ],
        },
        {
          id: "",
          text: "What sin is Beelzemon based on?",
          options: [
            { label: "Gluttony", val: "answer7" },
            { label: "Greed", val: "answer8" },
            { label: "Wrath", val: "answer9" },
          ],
        },
      ],
      answer: ["answer2", "answer4", "answer7"],
    },
    {
      name: "Gallantmon",
      type: "shonen",
      img: "dgmn_gallantmon.jpg",
      imgAlt: "Gallantmon from the Digimon franchise",
      questions: [
        {
          id: "weapon-names",
          text: "What are the names of Gallantmon's weapons?",
          options: [
            { label: "Svalinn and Caliburn", val: "answer1" },
            { label: "Gram and Aegis", val: "answer2" },
            { label: "Pridwen and Excalibur", val: "answer3" },
          ],
        },
        {
          id: "attribute",
          text: "What is Gallantmon's attribute?",
          options: [
            { label: "Virus", val: "answer4" },
            { label: "Vaccine", val: "answer5" },
            { label: "Data", val: "answer6" },
          ],
        },
        {
          id: "group",
          text: "What group is Gallantmon a part of?",
          options: [
            { label: "Olympos XII", val: "answer7" },
            { label: "Warrior Ten", val: "answer8" },
            { label: "Royal Knights", val: "answer9" },
          ],
        },
      ],
      answer: ["answer2", "answer4", "answer9"],
    }
  ],
  "Dr. STONE": [
    {
      name: "Dr. Xeno",
      type: "shonen",
      img: "drstone_xeno.jpg",
      imgAlt: "Dr. Xeno from Dr. STONE",
      questions: [
        {
          id: "catchphrase",
          text: "What is a word Dr. Xeno usually says?",
          options: [
            { label: "Marvelous", val: "answer1" },
            { label: "Elegant", val: "answer2" },
            { label: "Exquisite", val: "answer3" },
          ],
        },
        {
          id: "job",
          text: "Where did Dr. Xeno formerly work?",
          options: [
            { label: "NASA", val: "answer4" },
            { label: "Smithsonian Institution", val: "answer5" },
            { label: "Harvard University", val: "answer6" },
          ],
        },
        {
          id: "food",
          text: "What is Dr. Xeno's favorite food?",
          options: [
            { label: "Burritos", val: "answer7" },
            { label: "Burgers", val: "answer8" },
            { label: "Hot dogs", val: "answer9" },
          ],
        },
      ],
      answer: ["answer2", "answer4", "answer8"],
    },
    {
      name: "Stanley Snyder",
      type: "shonen",
      img: "drstone_stanley.jpg",
      imgAlt: "Stanley Snyder from Dr. STONE",
      questions: [
        {
          id: "inspiration",
          text: "What did Stanley usually have in his mouth as a child?",
          options: [
            { label: "Twig", val: "answer1" },
            { label: "Toothpick", val: "answer2" },
            { label: "Lollipop", val: "answer3" },
          ],
        },
        {
          id: "food",
          text: "What is Stanley's favorite food?",
          options: [
            { label: "Burritos", val: "answer4" },
            { label: "Burgers", val: "answer5" },
            { label: "Hot dogs", val: "answer6" },
          ],
        },
        {
          id: "nickname",
          text: "What is Dr. Xeno's nickname for Stanley?",
          options: [
            { label: "None. He just calls him Stanley", val: "answer7" },
            { label: "S.", val: "answer8" },
            { label: "Stan", val: "answer9" },
          ],
        },
      ],
      answer: ["answer3", "answer4", "answer9"],
    }
  ],
  "Final Fantasy": [
    {
      name: "Gilgamesh (FFV)",
      type: "shonen",
      images: [
        { img: "ff_gilgamesh_ff7.jpg", imgAlt: "Gilgamesh from Final Fantasy VII Rebirth" },
        { img: "ff_gilgamesh_dissidia.jpg", imgAlt: "Gilgamesh from Final Fantasy Dissidia" }
      ],
      questions: [
        {
          id: "sword",
          text: "What does Gilgamesh collect?",
          options: [
            { label: "Potions", val: "answer1" },
            { label: "Weapons", val: "answer2" },
            { label: "Shields", val: "answer3" },
          ],
        },
        {
          id: "rival",
          text: "Who is Gilgamesh's rival?",
          options: [
            { label: "Zidane Tribal", val: "answer4" },
            { label: "Cloud Strife", val: "answer5" },
            { label: "Bartz Klauser", val: "answer6" },
          ],
        },
        {
          id: "banish",
          text: "Where did Ex-death banish Gilgamesh to?",
          options: [
            { label: "The void", val: "answer7" },
            { label: "The desert", val: "answer8" },
            { label: "The bridge", val: "answer9" },
          ],
        },
      ],
      answer: ["answer2", "answer6", "answer7"],
    },
    {
      name: "Gilgamesh (Chocobo)",
      type: "shonen",
      img: "ff_gilgamesh_chocobo.jpg",
      imgAlt: "Gilgamesh from Chocobo and The Magic Picture Book: The Witch, the Girl, and the Five Heroes",
      questions: [
        {
          id: "goal",
          text: "What is Gilgamesh's goal?",
          options: [
            { label: "Marry the princess and rule the kingdom", val: "answer1" },
            { label: "Find the sword Excalibur", val: "answer2" },
            { label: "Defeat his arch-rival in an epic sword battle", val: "answer3" },
          ],
        },
        {
          id: "story",
          text: "What story is Gilgamesh found in?",
          options: [
            { label: "\"The Wolf Who Fell in Love\"", val: "answer4" },
            { label: "\"The Lonely Stuffed Toy\"", val: "answer5" },
            { label: "\"The Sky-Flying Twins\"", val: "answer6" },
          ],
        },
        {
          id: "rival",
          text: "Who is Gilgamesh's rival?",
          options: [
            { label: "Bartz Klauser", val: "answer7" },
            { label: "Volg", val: "answer8" },
            { label: "Cid", val: "answer9" },
          ],
        },
      ],
      answer: ["answer1", "answer4", "answer8"],
    }
  ],
  "Kingdom Hearts": [
    {
      name: "Axel",
      type: "shonen",
      img: "kh_axel.jpg",
      imgAlt: "Axel from Kingdom Hearts",
      questions: [
        {
          id: "weapon",
          text: "What weapon does Axel use while in Organization XIII?",
          options: [
            { label: "Claymore", val: "answer1" },
            { label: "Keyblade", val: "answer2" },
            { label: "Chakrams", val: "answer3" },
          ],
        },
        {
          id: "friend",
          text: "Who is Axel's childhood friend?",
          options: [
            { label: "Demyx", val: "answer4" },
            { label: "Saix", val: "answer5" },
            { label: "Roxas", val: "answer6" },
          ],
        },
        {
          id: "quote",
          text: "Finish the sentence: \"Got it...\"",
          options: [
            { label: "\"...in mind?\"", val: "answer7" },
            { label: "\"...through your skull?\"", val: "answer8" },
            { label: "\"...memorized?\"", val: "answer9" },
          ],
        },
      ],
      answer: ["answer3", "answer5", "answer9"],
    },
    {
      name: "Saix",
      type: "shonen",
      img: "kh_saix.jpg",
      imgAlt: "",
      questions: [
        {
          id: "weapon",
          text: "What weapon does Saix wield?",
          options: [
            { label: "Claymore", val: "answer1" },
            { label: "Keyblade", val: "answer2" },
            { label: "Chakrams", val: "answer3" },
          ],
        },
        {
          id: "power",
          text: "What Saix get his power from?",
          options: [
            { label: "The sun", val: "answer4" },
            { label: "The moon", val: "answer5" },
            { label: "The stars", val: "answer6" },
          ],
        },
        {
          id: "",
          text: "What color are Saix's eyes at the end of Kingdom Hearts III?",
          options: [
            { label: "Yellow", val: "answer7" },
            { label: "Red", val: "answer8" },
            { label: "Green", val: "answer9" },
          ],
        },
      ],
      answer: ["answer1", "answer5", "answer9"],
    }
  ],
  "Pokemon": [
    {
      name: "Cynthia",
      type: "shoujo",
      img: "pkmn_cynthia.jpg",
      imgAlt: "Cynthia from Pokemon Diamond and Pearl",
      questions: [
        {
          id: "",
          text: "What is Cynthia's profession?",
          options: [
            { label: "Archaeologist", val: "answer1" },
            { label: "Fashion Model", val: "answer2" },
            { label: "Reporter", val: "answer3" },
          ],
        },
        {
          id: "sweet",
          text: "What is a sweet treat that Cynthia usually gets in the anime?",
          options: [
            { label: "Donuts", val: "answer4" },
            { label: "Cake", val: "answer5" },
            { label: "Ice cream", val: "answer6" },
          ],
        },
        {
          id: "first",
          text: "Which Pokemon was Cynthia's first partner?",
          options: [
            { label: "Garchomp", val: "answer7" },
            { label: "Milotic", val: "answer8" },
            { label: "Togetic", val: "answer9" },
          ],
        },
      ],
      answer: ["answer1", "answer6", "answer7"],
    },
    {
      name: "Grimsley",
      type: "shonen",
      img: "pkmn_grimsley.jpg",
      imgAlt: "Grimsley from Pokemon Black and White",
      questions: [
        {
          id: "games",
          text: "Which game does Grimsley appear in?",
          options: [
            { label: "Pokemon Black and White", val: "answer1" },
            { label: "Pokemon Sun and Moon", val: "answer2" },
            { label: "Both", val: "answer3" },
          ],
        },
        {
          id: "types",
          text: "What type does Grimsley specialize in?",
          options: [
            { label: "Ghost", val: "answer4" },
            { label: "Dark", val: "answer5" },
            { label: "Flying", val: "answer6" },
          ],
        },
        {
          id: "positions",
          text: "What is Grimsley's profession?",
          options: [
            { label: "Gym Leader", val: "answer7" },
            { label: "Elite Four Member", val: "answer8" },
            { label: "Musician", val: "answer9" },
          ],
        },
      ],
      answer: ['answer3', 'answer5', 'answer8']
    },
    {
      name: "Guzma",
      type: "shonen",
      img: "pkmn_guzma.jpg",
      imgAlt: "Guzma from Pokemon Sun and Moon",
      questions: [
        {
          id: "ace",
          text: "Who is Guzma's ace Pokemon?",
          options: [
            { label: "Masquerain", val: "answer1" },
            { label: "Golisopod", val: "answer2" },
            { label: "Scizor", val: "answer3" },
          ],
        },
        {
          id: "meeting",
          text: "Where does the trainer first meet Guzma?",
          options: [
            { label: "Hau'oli City", val: "answer4" },
            { label: "Po Town", val: "answer5" },
            { label: "Malie City", val: "answer6" },
          ],
        },
        {
          id: "team",
          text: "What is Guzma's team's name?",
          options: [
            { label: "Team Skull", val: "answer7" },
            { label: "Team Star", val: "answer8" },
            { label: "Team Yell", val: "answer9" },
          ],
        },
      ],
      answer: ["answer2", "answer6", "answer7"],
    },
  ],
  "Re:CREATORS": [
    {
      name: "Military Uniform Princess",
      type: "shoujo",
      img: "rec_gunpukuhime.jpg",
      imgAlt: "the Military Uniform Princess from Re:CREATORS",
      questions: [
        {
          id: "star-name",
          text: "What is the Princess's name?",
          options: [
            { label: "Cassiopeia", val: "answer1" },
            { label: "Sirius", val: "answer2" },
            { label: "Altair", val: "answer3" },
          ],
        },
        {
          id: "ability",
          text: "What is the name of the Princess's main ability?",
          options: [
            { label: "Holopsicon", val: "answer4" },
            { label: "Megalosphere", val: "answer5" },
            { label: "Magical Splash Flare", val: "answer6" },
          ],
        },
        {
          id: "creator",
          text: "Who is her creator?",
          options: [
            { label: "Sota Mizushino", val: "answer7" },
            { label: "Setsuna Shimazaki", val: "answer8" },
            { label: "Takashi Matsubara", val: "answer9" },
          ],
        },
      ],
      answer: ["answer3", "answer4", "answer8"],
    }
  ]
}