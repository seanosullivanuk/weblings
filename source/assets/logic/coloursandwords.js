// Name:			Colours and Words logic.
// Description: 	Picks the colours, words and Weblings to show, production.
// Author:			Sean O'Sullivan.
// Version:		    2019-03-24.

// First, let's set an array of the available weblings

var boxOfWeblings = [
    'pear.png',
    'strawberry.png',
    'leaf_grinning.png',
    'lightning_happy.png',
    'smile.png',
    'sunshine_happy.png',
    'rainbow_happy.png',
    'orange.png',
    'cherries.png',
    'mistyeyed.png',
    'cheeky.png',
    'lightcloud_happy.png',
    'weblings_laptop.png',
    'banana.png',
    'gingerbreadman.png',
    'carrot.png',
    'broccoli.png',
    'cheekyandcontent.png',
    'onion.png',
    'orange.png',
    'pumpkin.png',
    'happypoo.png',
    'party.png',
    'apple.png',
    'sunshine_shades.png',
    'glove_happy.png',
    'umbrella_animeesmile.png',
    'icecube_smile.png',
    'yellowpepper.png',
    'peapod.png'
];

// Let's now show one at random

var randomNumber = Math.floor(Math.random() * (boxOfWeblings.length));

document.webling.src = 'assets/weblings/' + boxOfWeblings[randomNumber];

// Now we'll set an array of the things that they can say

var thingsToSay = [
    'Hello again',
    'Thing\'s are looking up because you\'re here',
    'Is the sun shining? Because you\'re radient!',
    'I hope you\'re having a nice day',
    'You make my day complete',
    'I love your sense of style',
    'Let\'s make a difference today',
    'Smiling is better than frowning',
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
    'Even a broken clock is right twice a day',
    'Roses are red, Violet\'s are blue, you\'ve opened a new tab and I love to see you',
    'It\'s awesome being on your computer',
    'Hey',
    'How was your weekend?',
    'Weblings and chill',
    'Fancy some music?',
    'You\'re looking lovely',
    'Haunted pancakes gives me the crepes.',
    'What are you up to today?',
    'Is it me or do you get the feeling someone\'s looking?',
    'I\'m ticklish',
    'Try to catch some fog. I mist',
    'You don\'t get older. You level up',
    'I\'m on a seafood and eat it diet!',
    'I love jokes about bread. Chiabatta believe it!',
    'In case I don\'t see you. Good morning, good afternoon and good evening',
    'I spilt some boiled water yesterday. It was mist',
    'Atoms cannot be trusted. They make up everything',
    'I like your network. I`m feeling a connection',
    'The F5 key is so refreshing',
    'Do you think if the police search for a brush, they`re combing the area?'
    
];

// Now we pick one...

var randomNumber = Math.floor(Math.random() * (thingsToSay.length));

// ... and show it on screen

document.getElementById('container_weblingcontent_mouthpiece').innerHTML = thingsToSay[randomNumber];

// Finally, we should show a bit of colour. Here's some nice tones:

var colourPalette = [
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
];

// Out comes the paint brush...

var randomNumber = Math.floor(Math.random() * (colourPalette.length));

document.getElementById("container_colourstrip").style.backgroundColor = colourPalette[randomNumber];
document.getElementById("container_searchbar").style.backgroundColor = colourPalette[randomNumber];
document.getElementById("searchbutton").style.backgroundcolor = colourPalette[randomNumber];
