const phrases = [
  {
    phrase: "People thought the exam was easy",
    rewrite: "The exam was believe to be easy",
    starts: "The exam",
    _type: "passive",
  },
  {
    phrase: "I am going to study nutrition next year",
    rewrite: "This time next year I will be studying nutrition",
    starts: "This time next year",
  },
  {
    phrase: "The chair will speak before he leaves",
    starts: "By the time",
    rewrite: "By the time the chair leaves, he will have spoken",
  },
  {
    phrase: "You didn't put the chicken in the fridge",
    starts: "You should",
    rewrite: "You should have put the chicken in the fridge",
    _type: "modal",
  },
  {
    phrase: "She asked for her favorite dish to be prepared",
    rewrite: "She had her favorite dish prepared",
    _type: "causative",
  },
  {
    phrase: "We had a great holiday, we will go there again",
    rewrite: "Our holiday was so great that we will go there again",
    _type: "so",
  },
  {
    phrase: "We had a great holiday, we will go there again",
    rewrite: "We had such a great holiday that we will go there again",
    _type: "such",
  },
  {
    phrase: "We would prefer you not to wear those slippers",
    starts: "We would rather",
    rewrite: "We would rather you didn't wear those slippers",
    _type: "Rather",
  },
  {
    phrase: "It was a dry year, there was famine",
    rewrite: "The year was so dry that there was famine",
    _type: "so",
  },
  {
    phrase: "It was a dry year, there was famine",
    rewrite: "It was such a dry year that there was famine",
    _type: "such",
  },
  {
    phrase: "It is forbidden to walk on the grass",
    starts: "You",
    rewrite: "You mustn't walk on the grass",
    _type: "modal",
  },
  {
    phrase: "Wearing a helmet wasn't compulsory",
    starts: "You",
    rewrite: "You didn't have to wear a helmet",
    _type: "modal",
  },
  {
    phrase: "The director has resigned, we were very fond of him",
    rewrite: "The director, of whom we where very fond, has resigned",
    _type: "formal relative",
  },
  {
    phrase: "I sleep in a bed, it is very soft",
    rewrite: "The bed I sleep in is very soft",
    _type: "relative",
  },
  {
    phrase:
      "Jane is one of my closest friends, I have known her for eight years",
    rewrite:
      "Jane, who I have known for eight years, is one of my closest friends",
    _type: "relative",
  },
  {
    phrase: "Tom's father goes swimming everyday, he is 88",
    rewrite: "Tom's father, who is 88, goes swimming everyday",
    _type: "relative",
  },
  {
    phrase: "She started drinking too much alcohol two years ago",
    starts: "She has",
    rewrite: "She has been drinking too much alcohol for two years",
  },
  {
    phrase: "Despite having been vaccinated she caught the flu",
    starts: "Although she",
    rewrite: "Although she was vaccinated she caught the flu",
  },
  {
    phrase: "This is the place, we last had coffee together here",
    starts: "This is",
    rewrite: "This is the place were we last had coffee together",
    _type: "relative",
  },
  {
    phrase: "I spent my holidays in France",
    rewrite: "Where did you spend your holidays?",
    _type: "question (in France)",
  },
  {
    phrase: "He made an effort to speak English",
    starts: "He tried",
    rewrite: "He tried to speak in English",
    _type: "wish",
  },
  {
    phrase: "I love German, unfortunately, I can't speak it fluently",
    starts: "I wish",
    rewrite: "I wish I could speak German fluently",
    _type: "wish",
  },
  {
    phrase: "She gave up on going to French lessons",
    starts: "She stopped",
    rewrite: "She stopped going to French lessons",
  },
  {
    phrase: "I'm not as good at English as you are",
    starts: "You",
    rewrite: "You are better than me at English",
    _type: "comparative",
  },
  {
    phrase: "If your friend doesn't come before ten, he will miss the train",
    starts: "Unless",
    rewrite: "Unless your friend comes before train, he will miss the train",
    _type: "unless",
  },
  {
    phrase: "The policeman knew where the thief was hidden",
    rewrite: "Who knew where the thief was hidden?",
    _type: "question (The policeman)",
  },
  {
    phrase: "The children stayed at home because it was raining",
    starts: "As",
    rewrite: "As it was raining, the children stayed at home",
    _type: "as",
  },
  {
    phrase: '"What time do the banks close today?"',
    starts: "Tim asked me",
    rewrite: "Tim asked me when did the banks close today",
  },
  {
    phrase: "Sharon hasn't eaten junk food since last May",
    starts: "Sharon stopped",
    rewrite: "Sharon stopped eating junk food last May",
  },
  {
    phrase: "The teacher glued the pieces of the broken toy",
    starts: "The pieces",
    rewrite: "The pieces of the broken toy were glued by the teacher",
    _type: "passive",
  },
  {
    phrase: "Albert's drawing isn't as good as Gerard's",
    starts: "Gerard's drawing",
    rewrite: "Gerard's drawing is better than Albert's",
    _type: "comparative",
  },
  {
    phrase: '"Why don\'t we play computer games?" said Michael',
    starts: "Michael suggested",
    rewrite: "Michael suggested playing computer games",
    _type: "reported speech",
  },
  {
    phrase: 'She said: "Are you coming to the party on Friday?"',
    starts: "She asked him",
    rewrite: "She asked him if he was coming to the party on Friday",
    _type: "reported speech",
  },
  {
    phrase: "They came to live in New York two years ago",
    starts: "They have",
    rewrite: "They have been living in New York for two years",
  },
  {
    phrase: "The fireman managed to rescue the child from the burning house",
    starts: "The fireman was",
    rewrite: "The fireman was able to rescue the child from the burning house",
    _type: "modal",
  },
  {
    phrase: "She's getting someone to mend her windows",
    starts: "She's having",
    rewrite: "She's having her windows mended",
    _type: "causative",
  },
  {
    phrase: "The boy became my boyfriend, I met him on Minds",
    rewrite: "The boy, I met on Minds, became my boyfriend",
    _type: "relative",
  },
  {
    phrase: "I can't wait until summer, I can go surfing then",
    rewrite: "I can't wait until summer when I can go surfing",
    _type: "relative",
  },
  {
    phrase: "The place was quiet, he lived there",
    rewrite: "The place, were he lived, was quiet",
    _type: "relative",
  },
];
