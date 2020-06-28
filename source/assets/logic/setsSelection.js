// Name:			    Sets Selection
// Description: 	Picks the colours, words and images to show.
// Author:			  Sean O'Sullivan.
// Version:		    2020-06-28

// Sets - Images

var sets_images_fruitveglings = [
    'apple.png',
    'banana.png',
    'broccoli.png',
    'carrot.png',
    'cherries.png',
    'lemon.png',
    'onion.png',
    'orange.png',
    'peapod.png',
    'pear.png',
    'pumpkin.png',
    'strawberry.png',
    'yellowpepper.png'
];

var sets_images_weatherlings = [
    'glove_happy.png',
    'leaf_grinning.png',
    'lightcloud_happy.png',
    'lightning_happy.png',
    'rainbow_happy.png',
    'sunshine_happy.png',
    'sunshine_shades.png',
    'umbrella_animeesmile.png'
];

var sets_images_foodlings = [
    'blackcurrantpie.png',
    'can_cola.png',
    'cheese.png',
    'chocolatebar.png',
    'coffeetogo.png',
    'cookies.png',
    'cupcake.png',
    'doughnut.png',
    'gingerbreadman.png',
    'hotdog.png',
    'icecream_pink.png',
    'pancakessyrupandbutter.png',
    'pizzaslice.png',
    'popcorn.png',
    'saladbowl.png',
    'sushi.png',
    'wrapped_sweets.png'
]

var sets_images_scribblings = [
    'asleep.png',
    'beaming.png',
    'bored.png',
    'cheeky.png',
    'cheekyandcontent.png',
    'cheekybeam.png',
    'cheekywink.png',
    'eyes.png',
    'happypoo.png',
    'inlove.png',
    'mellow.png',
    'party.png',
    'really.png',
    'smallshock.png',
    'smile.png',
    'wink.png'
]

// Sets - Dialogue

var sets_dialogue_greetings = [
    'Hello',
    'Hello again',
    'Thing\'s are looking up because you\'re here',
    'I hope you\'re having a nice day',
    'You make my day complete',
    'I love your sense of style',
    'Boo!',
    'I was just thinking of you',
    'Hey there, handsome',
    'I love it when you open a new tab',
    'I\'m addicted to you!',
    'Ah, so you didn\'t forget about me :)',
    'What are you going to search for this time?',
    'Present buying?',
    'You\'re so cute when you open a new window',
    'You rock my world',
    'Roses are red, Violet\'s are blue, you\'ve opened a new tab and I love to see you',
    'It\'s awesome being on your computer',
    'Hey',
    'How was your weekend?',
    'Weblings and chill',
    'Fancy some music?',
    'What are you up to today?',
    'Is it me or do you get the feeling someone\'s looking?',
    'I\'m ticklish',
    'In case I don\'t see you. Good morning, good afternoon and good evening'
]

var sets_dialogue_puns = [
    'Is the sun shining? Because you\'re radiant!',
    'Haunted pancakes gives me the crepes.',
    'Try to catch some fog. I mist',
    'I\'m on a seafood and eat it diet!',
    'I love jokes about bread. Chiabatta believe it!',
    'I spilt some boiled water yesterday. It was mist',
    'Atoms cannot be trusted. They make up everything',
    'I like your network. I`m feeling a connection',
    'The F5 key is so refreshing',
    'Do you think if the police search for a brush, they`re combing the area?'
]

var sets_dialogue_positivity = [
    'Let\'s make a difference today',
    'Smiling is better than frowning',
    'Even a broken clock is right twice a day',
    'You\'re looking lovely',
    'You don\'t get older. You level up',
    'Push negative thoughts out of your mind',
    'Fall seven times and stand up eight',
    'Time is precious. Let\'s not waste today',
    'There is power in having a positive mindset',
    'Focus on what is great in your life'
]

// Sets - Backgrounds

var sets_background_solid = [
    '#bd81b6',
    '#dd85ba',
    '#ec90bd',
    '#f696a8',
    '#f89c99',
    '#faa78f',
    '#fbb486',
    '#fbbe83',
    '#ffce78',
    '#ffe27e',
    '#ffee79',
    '#fff788',
    '#eeec79',
    '#d5e381',
    '#d4e47f',
    '#b4d980',
    '#a4d68c',
    '#8dce9c',
    '#7fcdb5',
    '#73cbc9',
    '#75cac9',
    '#66cbdf',
    '#67bbeb',
    '#6faadf',
    '#6eaadf',
    '#7b8ac7',
    '#8779bb',
    '#9b74b6',
    '#ff86c2',
    '#b0a7f1',
    '#03eba6',
    '#c47557'
]

var sets_background_gradient = [
    '132deg\, #F4D03F 0\%\, #16A085 100\%',
    '19deg\, #21D4FD 0\%\, #B721FF 100\%',
    '0deg\, #08AEEA 0\%\, #2AF598 100\%',
    '90deg\, #FEE140 0\%\, #FA709A 100\%',
    '62deg\, #FBAB7E 0\%\, #F7CE68 100\%',
    '180deg\, #52ACFF 25\%\, #FFE32C 100\%',
    '147deg\, #FFE53B 0\%\, #FF2525 74\%',
    '0deg\, #D9AFD9 0\%\, #97D9E1 100\%',
    '45deg\, #FBDA61 0\%\, #FF5ACD 100\%',
    '0deg\, #FFDEE9 0\%\, #B5FFFC 100\%',
    '619deg\, #3EECAC 0\%\, #EE74E1 100\%',
    '225deg\, #FF3CAC 0\%\, #784BA0 50\%\, #2B86C5 100\%',
    '90deg\, #FF9A8B 0\%\, #FF6A88 55\%\, #FF99AC 100\%',
    '43deg\, #4158D0 0\%\, #C850C0 46\%\, #FFCC70 100\%',
    '180deg\, #FFFFFF 0\%\, #6284FF 50\%\, #FF0000 100\%',
    '109deg\, #FF1886 11\%\, #FCE844 52\%\, #35B2EF 100\%'
]

// Let's load the values from storage and use them to select the right variables

chrome.storage.sync.get({
    images: 'fruitveglings',
    background: 'gradient',
    dialogue: 'greetings'
  }, function(items) {

    var set_images = items.images;
    var set_background = items.background;
    var set_dialogue = items.dialogue;

    // First - Lets set the Webling image

    if ( set_images === 'fruitveglings') {

        console.info('VARIABLE IS SET TO fruitveglings');
        var randomNumberImages = Math.floor(Math.random() * (sets_images_fruitveglings.length));
        console.info('randomNumber is currently SET to ' + randomNumberImages);
        document.webling.src = 'assets/sets/images/fruitveglings/' + sets_images_fruitveglings[randomNumberImages];


      } else if (set_images === 'weatherlings') {

        console.info('VARIABLE IS SET TO weatherlings');
        var randomNumberImages = Math.floor(Math.random() * (sets_images_weatherlings.length));
        console.info('randomNumber is currently SET to ' + randomNumberImages);
        document.webling.src = 'assets/sets/images/weatherlings/' + sets_images_weatherlings[randomNumberImages];


      } else if (set_images === 'foodlings') {

        console.info('VARIABLE IS SET TO foodlings');
        var randomNumberImages = Math.floor(Math.random() * (sets_images_foodlings.length));
        console.info('randomNumber is currently SET to ' + randomNumberImages);
        document.webling.src = 'assets/sets/images/foodlings/' + sets_images_foodlings[randomNumberImages];


      } else if (set_images === 'scribblings') {

        console.info('VARIABLE IS SET TO scribblings');
        var randomNumberImages = Math.floor(Math.random() * (sets_images_scribblings.length));
        console.info('randomNumber is currently SET to ' + randomNumberImages);
        document.webling.src = 'assets/sets/images/scribblings/' + sets_images_scribblings[randomNumberImages];
      
      } else {
        // No matching image set found, so default to fruitveglings
        console.error('VARIABLE FOR IMAGE SET NOT FOUND');
        var randomNumberImages = Math.floor(Math.random() * (sets_images_fruitveglings.length));
        console.info('randomNumber is currently SET to ' + randomNumberImages);
        document.webling.src = 'assets/sets/images/fruitveglings/' + sets_images_fruitveglings[randomNumberImages];
      }

    // Second - Lets set the background style

    if ( set_background === 'solid') {

        console.info('VARIABLE IS SET TO solid');
        var randomNumberBackground = Math.floor(Math.random() * (sets_background_solid.length));
        console.info('randomNumberBackground is currently SET to ' + randomNumberBackground);
        document.getElementById('container_background').style.backgroundColor = sets_background_solid[randomNumberBackground];

      } else if (set_background === 'gradient') {
        
        console.info('VARIABLE IS SET TO gradient');
        var randomNumberBackground = Math.floor(Math.random() * (sets_background_gradient.length));
        console.info('randomNumberBackground is currently SET to ' + randomNumberBackground);
        document.getElementById("container_background").style.backgroundImage = "linear-gradient(" + sets_background_gradient[randomNumberBackground] + ")";

      } else {

        // No matching background set detected, so default to gradient
        console.error('VARIABLE FOR BACKGROUND IS NOT FOUND');
        var randomNumberBackground = Math.floor(Math.random() * (sets_background_gradient.length));
        console.info('randomNumberBackground is currently SET to ' + randomNumberBackground);
        document.getElementById("container_background").style.backgroundImage = "linear-gradient(" + sets_background_gradient[randomNumberBackground] + ")";

    }

    // Third - Drop in our desired greeting

    if ( set_dialogue === 'greetings') {

        console.info('VARIABLE IS SET TO greetings');
        var randomNumberDialogue = Math.floor(Math.random() * (sets_dialogue_greetings.length));
        console.info('randomNumberDialogue is currently SET to ' + randomNumberDialogue);
        document.getElementById('container_weblingcontent_mouthpiece').innerHTML = sets_dialogue_greetings[randomNumberDialogue];

      } else if (set_dialogue === 'puns') {
        
        console.info('VARIABLE IS SET TO puns');
        var randomNumberDialogue = Math.floor(Math.random() * (sets_dialogue_puns.length));
        console.info('randomNumberDialogue is currently SET to ' + randomNumberDialogue);
        document.getElementById('container_weblingcontent_mouthpiece').innerHTML = sets_dialogue_puns[randomNumberDialogue];

      } else if (set_dialogue === 'positivity') {
        
        console.info('VARIABLE IS SET TO positivity');
        var randomNumberDialogue = Math.floor(Math.random() * (sets_dialogue_positivity.length));
        console.info('randomNumberDialogue is currently SET to ' + randomNumberDialogue);
        document.getElementById('container_weblingcontent_mouthpiece').innerHTML = sets_dialogue_positivity[randomNumberDialogue];

      } else {
        
        // No matching dialogue set found, so default to greetings
        console.error('VARIABLE FOR DIALOGUE NOT FOUND');
        var randomNumberDialogue = Math.floor(Math.random() * (sets_dialogue_greetings.length));
        console.info('randomNumberDialogue is currently SET to ' + randomNumberDialogue);
        document.getElementById('container_weblingcontent_mouthpiece').innerHTML = sets_dialogue_greetings[randomNumberDialogue];

    }

  });
