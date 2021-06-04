const phrases = [
  {
    phrase: 'People thought the exam was easy',
    rewrite: 'The exam was believed to be easy',
    starts: 'The exam',
    _type: 'passive',
  },
  {
    phrase: 'I am going to study nutrition next year',
    rewrite: 'This time next year I will be studying nutrition',
    starts: 'This time next year',
  },
  {
    phrase: 'The chair will speak before he leaves',
    starts: 'By the time',
    rewrite: 'By the time the chair leaves, he will have spoken',
  },
  {
    phrase: "You didn't put the chicken in the fridge",
    starts: 'You should',
    rewrite: 'You should have put the chicken in the fridge',
    _type: 'modal',
  },
  {
    phrase: 'She asked for her favorite dish to be prepared',
    rewrite: 'She had her favorite dish prepared',
    _type: 'causative',
  },
  {
    phrase: 'We had a great holiday, we will go there again',
    rewrite: 'Our holiday was so great that we will go there again',
    _type: 'so',
  },
  {
    phrase: 'We had a great holiday, we will go there again',
    rewrite: 'We had such a great holiday that we will go there again',
    _type: 'such',
  },
  {
    phrase: 'We would prefer you not to wear those slippers',
    starts: 'We would rather',
    rewrite: "We would rather you didn't wear those slippers",
    _type: 'Rather',
  },
  {
    phrase: 'It was a dry year, there was famine',
    rewrite: 'The year was so dry that there was famine',
    _type: 'so',
  },
  {
    phrase: 'It was a dry year, there was famine',
    rewrite: 'It was such a dry year that there was famine',
    _type: 'such',
  },
  {
    phrase: 'It is forbidden to walk on the grass',
    starts: 'You',
    rewrite: "You mustn't walk on the grass",
    _type: 'modal',
  },
  {
    phrase: "Wearing a helmet wasn't compulsory",
    starts: 'You',
    rewrite: "You didn't have to wear a helmet",
    _type: 'modal',
  },
  {
    phrase: 'The director has resigned, we were very fond of him',
    rewrite: 'The director, of whom we where very fond, has resigned',
    _type: 'formal relative',
  },
  {
    phrase: 'I sleep in a bed, it is very soft',
    rewrite: 'The bed I sleep in is very soft',
    _type: 'relative',
  },
  {
    phrase:
      'Jane is one of my closest friends, I have known her for eight years',
    rewrite:
      'Jane, who I have known for eight years, is one of my closest friends',
    _type: 'relative',
  },
  {
    phrase: "Tom's father goes swimming everyday, he is 88",
    rewrite: "Tom's father, who is 88, goes swimming everyday",
    _type: 'relative',
  },
  {
    phrase: 'She started drinking too much alcohol two years ago',
    starts: 'She has',
    rewrite: 'She has been drinking too much alcohol for two years',
    source: 'exam',
  },
  {
    phrase: 'Despite having been vaccinated she caught the flu',
    starts: 'Although she',
    rewrite: 'Although she was vaccinated she caught the flu',
  },
  {
    phrase: 'This is the place, we last had coffee together here',
    starts: 'This is',
    rewrite: 'This is the place were we last had coffee together',
    _type: 'relative',
  },
  {
    phrase: 'I spent my holidays in France',
    rewrite: 'Where did you spend your holidays?',
    _type: 'question (in France)',
  },
  {
    phrase: 'He made an effort to speak in English',
    starts: 'He tried',
    rewrite: 'He tried to speak in English',
  },
  {
    phrase: "I love German, unfortunately, I can't speak it fluently",
    starts: 'I wish',
    rewrite: 'I wish I could speak German fluently',
    _type: 'wish',
  },
  {
    phrase: 'She gave up on going to French lessons',
    starts: 'She stopped',
    rewrite: 'She stopped going to French lessons',
  },
  {
    phrase: "I'm not as good at English as you are",
    starts: 'You',
    rewrite: 'You are better than me at English',
    _type: 'comparative',
  },
  {
    phrase: "If your friend doesn't come before ten, he will miss the train",
    starts: 'Unless',
    rewrite: 'Unless your friend comes before train, he will miss the train',
    _type: 'unless',
  },
  {
    phrase: 'The policeman knew where the thief was hidden',
    rewrite: 'Who knew where the thief was hidden?',
    _type: 'question (The policeman)',
  },
  {
    phrase: 'The children stayed at home because it was raining',
    starts: 'As',
    rewrite: 'As it was raining, the children stayed at home',
    _type: 'as',
  },
  {
    phrase: '"What time do the banks close today?"',
    starts: 'Tim asked me',
    rewrite: 'Tim asked me when the banks closed today',
    source: 'exam',
  },
  {
    phrase: "Sharon hasn't eaten junk food since last May",
    starts: 'Sharon stopped',
    rewrite: 'Sharon stopped eating junk food last May',
    source: 'exam',
  },
  {
    phrase: 'The teacher glued the pieces of the broken toy',
    starts: 'The pieces',
    rewrite: 'The pieces of the broken toy were glued by the teacher',
    _type: 'passive',
  },
  {
    phrase: "Albert's drawing isn't as good as Gerard's",
    starts: "Gerard's drawing",
    rewrite: "Gerard's drawing is better than Albert's",
    _type: 'comparative',
  },
  {
    phrase: '"Why don\'t we play computer games?" said Michael',
    starts: 'Michael suggested',
    rewrite: 'Michael suggested playing computer games',
    _type: 'reported speech',
    source: 'exam',
  },
  {
    phrase: 'She said: "Are you coming to the party on Friday?"',
    starts: 'She asked him',
    rewrite: 'She asked him if he was coming to the party on Friday',
    _type: 'reported speech',
  },
  {
    phrase: 'They came to live in New York two years ago',
    starts: 'They have',
    rewrite: 'They have been living in New York for two years',
  },
  {
    phrase: 'The fireman managed to rescue the child from the burning house',
    starts: 'The fireman was',
    rewrite: 'The fireman was able to rescue the child from the burning house',
    _type: 'modal',
  },
  {
    phrase: "She's getting someone to mend her windows",
    starts: "She's having",
    rewrite: "She's having her windows mended",
    _type: 'causative',
  },
  {
    phrase: 'The boy became my boyfriend, I met him on Minds',
    rewrite: 'The boy, I met on Minds, became my boyfriend',
    _type: 'relative',
  },
  {
    phrase: "I can't wait until summer, I can go surfing then",
    rewrite: "I can't wait until summer when I can go surfing",
    _type: 'relative',
  },
  {
    phrase: 'The place was quiet, he lived there',
    rewrite: 'The place, were he lived, was quiet',
    _type: 'relative',
  },
  {
    phrase: "I don't have the computer so I can't type the essay",
    starts: 'If',
    rewrite: 'If I had the computer, I would type the essay',
    source: 'exam',
    _type: 'conditional',
  },
  {
    phrase: 'The engineer has repaired my TV',
    starts: 'I have',
    rewrite: 'I have had my TV repaired',
    _type: 'causative',
    source: 'exam',
  },
  {
    phrase: 'My kitchen is being redecorated at the moment',
    starts: 'I',
    rewrite: 'I am having my kitchen redecorated',
    _type: 'causative',
    source: 'exam',
  },
  {
    phrase: 'I am not sure she is her girl friend',
    starts: 'She',
    rewrite: 'She may not be her girl friend',
    _type: 'modal',
    source: 'exam',
  },
  {
    phrase:
      "She made a lot of mistakes because she didn't study hard for the exams",
    starts: 'If',
    rewrite:
      "If she had studied hard for the exams, she wouldn't have made a lot of mistakes",
    _type: 'conditional',
    source: 'exam',
  },
  {
    phrase: "What a pity I didn't have time to see you last week",
    starts: 'I wish',
    rewrite: 'I wish I had had time to see you last week',
    _type: 'wish',
    source: 'exam',
  },
  {
    phrase: "Sorry I can't speak French",
    starts: 'I wish',
    rewrite: 'I wish I could speak French',
    _type: 'wish',
    source: 'exam',
  },
  {
    phrase: "If the tickets don't arrive, we won't see you",
    starts: 'Unless',
    rewrite: "Unless the tickets arrive, we won't see you",
    _type: 'unless',
    source: 'exam',
  },
  {
    phrase: 'Although she was ill, she visited other countries',
    starts: 'Despite',
    rewrite: 'Despite being ill, she visited other countries',
    _type: 'despite', // TODO Implement this type with Unless/As
    source: 'exam',
  },
  {
    phrase: 'This is the man. His dog bit my brother in the park.',
    starts: 'This is the man',
    rewrite: 'This is the man whose dog bit my brother in the park',
    _type: 'relative',
    source: 'exam',
  },
  {
    phrase: 'I have been playing piano for 20 years',
    starts: 'I started',
    rewrite: 'I started playing piano 20 years ago',
    source: 'exam',
  },
  {
    phrase: 'The meat was better than the fish',
    starts: 'The fish',
    rewrite: 'The fish was worse than the meat',
    _type: 'comparative',
    source: 'exam',
  },
  {
    phrase: 'I am sure that they are at home. The lights are on.',
    starts: 'They',
    rewrite: 'They must be at home because the lights are on',
    _type: 'modal',
    source: 'exam',
  },
  {
    phrase: 'Perhaps they only opened the museum in the morning',
    starts: 'They',
    rewrite: 'They may have opened the museum in the morning',
    _type: 'modal',
    source: 'exam',
  },
  {
    phrase: "People think they don't know the secret",
    starts: 'They',
    rewrite: 'They are believed not to know the secret',
    source: 'exam',
  },
  {
    phrase: "Frank is drowsy because he didn't get enough sleep",
    starts: 'If',
    rewrite: "If Frank had got enough sleep, he wouldn't be drowsy",
    _type: 'conditional',
    source: 'exam',
  },
  {
    phrase: "I am upset the doctor won't see me sooner",
    starts: 'If only',
    rewrite: 'If only the doctor would see me sooner',
    // TODO 'If only' type
    source: 'exam',
  },
  {
    phrase: "It wasn't necessary for you to call the police",
    starts: 'You',
    rewrite: "You didn't need to call the police",
    _type: 'modal',
    source: 'exam',
  },
  {
    phrase: 'It was a bad idea for you to get involved',
    starts: 'You',
    rewrite: "You shouldn't have got involved",
    _type: 'modal',
    source: 'exam',
  },
  {
    phrase:
      "Let's call the manager. I have been discussing the issue with her.",
    starts: "Let's call the manager with",
    rewrite:
      "Let's call the manager with whom I have been discussing the issue",
    _type: 'formal relative',
    source: 'exam',
  },
  {
    phrase: "I had an interview yesterday. It didn't go well.",
    starts: 'The interview',
    rewrite: "The interview I had yesterday didn't go well",
    _type: 'relative',
    source: 'exam',
  },
  {
    phrase: '"We don\'t pollute the air" The owner said',
    starts: 'The owner',
    rewrite: "The owner claimed that they didn't pollute the air",
    _type: 'reported speech',
    source: 'exam',
  },
  {
    phrase: '"Please turn off the light" My mother said',
    starts: 'My mother',
    rewrite: 'My mother asked me to turn off the light',
    _type: 'reported speech',
    source: 'exam',
  },
  {
    phrase: 'When did you begin waiting in the queue?',
    starts: 'How long',
    rewrite: 'How long have you been waiting in the queue?',
    source: 'exam',
  },
  {
    phrase: 'The studio should have paid the writer a higher salary',
    starts: 'The writer',
    rewrite: 'The writer should have been paid a higher salary',
    _type: 'passive',
    source: 'exam',
  },
  {
    phrase: 'It is possible they forgot to turn off the alarm',
    starts: 'They',
    rewrite: 'They may have forgotten to turn off the alarm',
    _type: 'modal',
    source: 'exam',
  },
  {
    phrase: 'Will you close the door when you leave?',
    starts: 'Do you mind',
    rewrite: 'Do you mind closing the door when you leave?',
    source: 'exam',
  },
  {
    phrase: '"Yes I took the money" Mary said',
    starts: 'Mary',
    rewrite: 'Mary admitted taking the money',
    _type: 'reported speech',
    source: 'exam',
  },
  {
    phrase: "Vegans do not eat meat and they don't eat cheese",
    rewrite: "Vegans don't eat either meat nor cheese",
    _type: 'either',
    source: 'exam',
  },
  {
    phrase: 'Jake might bake the cake',
    starts: 'Jake is',
    rewrite: 'Jake is likely to bake the cake',
    _type: 'modal',
    source: 'exam',
  },
  {
    phrase: 'They served terrible food at the wedding, so no one ate',
    rewrite: 'They served such terrible food at the wedding that no one ate',
    _type: 'such',
    source: 'exam',
  },
  {
    phrase: 'I would prefer Susan would help me',
    starts: "I'd",
    rewrite: "I'd rather Susan helped me",
    source: 'exam',
  },
  {
    phrase: 'When people earn a lot of money, they become very proud',
    starts: 'The',
    rewrite: 'The more money people earn, the more proud they become',
    source: 'exam',
    //? _type: 'the more'
  },
  {
    phrase: 'You are a reliable person. The company can rely on you.',
    starts: 'You are a reliable person on',
    rewrite: 'You are a reliable person on whom the company can rely',
    _type: 'formal relative',
    source: 'exam',
  },
  {
    phrase: 'Sue hurt her back when she lifted a heavy table on her own',
    starts: 'If only',
    rewrite: 'If only she Sue had lifted a heavy table on her own',
    source: 'selectividad 2020 ordinaria Galicia',
  },
  {
    phrase: 'Many people said his ideas were outrageous',
    starts: 'It',
    rewrite: 'It was said that his ideas were outrageous',
    source: 'selectividad 2020 ordinaria Galicia',
  },
  {
    phrase:
      'I love the signs of the zodiac. My brother loves the signs of the zodiac too',
    starts: 'Both',
    rewrite: 'Both my brother and I love the signs of the zodiac',
    source: 'selectividad 2020 ordinaria Galicia',
  },
  // TODO Add phrases from selectividad that have text in end or middle.
  {
    phrase:
      "My friends don't believe in astrology, but they read the horoscope",
    starts: 'In spite of',
    rewrite:
      "In spite of reading the horoscope, my friends don't believe in astrology",
    source: 'selectividad 2020 ordinaria Galicia',
    _type: 'in spite of', // TODO Add with Despite
  },
  {
    phrase: 'We hired someone to declutter our house last summer holidays',
    starts: 'We',
    rewrite: 'We go our house decluttered last summer holidays',
    _type: 'causative',
    source: 'selectividad 2020 extraordinaria Galicia',
  },
  {
    phrase:
      "William didn't remember to bring reusable bags so he bought plastic bags",
    starts: 'If William',
    rewrite:
      "If William had remembered to bring reusable bags he wouldn't have bought plastic bags",
    _type: 'conditional',
    source: 'selectividad 2020 extraordinaria Galicia',
  },
  {
    phrase:
      "My mother loves watching Marie Kondo's TV series. However, she doesn't use her tidying method",
    starts: 'Although',
    rewrite:
      "Although my mother loves watching Mary Kondo's TV series, she doesn't use her tidying method",
    _type: 'although', // TODO Add,
    source: 'selectividad 2020 extraordinaria Galicia',
  },
  {
    phrase:
      '"Society still sees girls through a gender lens that requires them to be pretty and passive"',
    starts: 'He said that',
    rewrite:
      'He said that society still sees girls through a gender lens that requires them to be pretty and passive',
    _type: 'reported speech',
    source: 'selectividad 2020 extraordinaria Galicia',
  },
  {
    phrase:
      'Parents should let their children play with trucks and dolls and distribute household tasks evenly',
    starts: 'Not only',
    rewrite:
      'Not only should parents let their children play with trucks and dolls, but also distribute household tasks evenly',
    //_type: 'not only' // TODO Maybe add like "swapped around formal english style"
    source: 'selectividad 2020 extraordinaria Galicia',
  },
  {
    phrase:
      "We asked a few people what they would change about women's situation nowadays",
    starts: 'A few people',
    rewrite:
      "A few people were asked what they would change about women's situation nowadays",
    _type: 'passive',
    source: 'selectividad 2020 extraordinaria Galicia',
  },
];
