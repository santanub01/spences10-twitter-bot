var
    twit = require('twit'),
    config = require('./config.js'),
    uniqueRandomArray = require('unique-random-array');

var Twitter = new twit(config);

// var uniqueRandomArray = require('unique-random-array');

// var queryString = uniqueRandomArray([
//     '100daysofcode',
//     'freecodecamp',
//     'github',
//     'vscode',
//     'visual studio code',
//     'nodejs',
//     'node.js',
//     'vuejs',
//     'vue.js',
//     'inferno_js',
//     'inferno.js',
//     'jekyll',
//     'laravel',
//     'laravelphp'
//   ]);

// console.log(queryString());

// // create random response
// var responseString = uniqueRandomArray([
//     `Hi @${queryString()} thanks for the follow! What are you working on today? .CR`,
//     `@${queryString()} thanks for following! What are you working on today? .CR`,
//     `Hey @${queryString()} thanks for the follow! What are you working on today? .CR`,
//     `Thanks for following @${queryString()}! What are you working on today? .CR`,
//     `Hey @${queryString()}! Am I following U? @mention me so I can follow back!`,
//     `Thanks for following @${queryString()}! I look forward to tweeting with you. .CR`
//   ]);


// var todayDate = new Date().toISOString().slice(0,10);
// Twitter.get('search/tweets', { q: '"#100DaysOfCode" "Day 1" since:' + todayDate, count: 100 }, function(err, data, response) {

//     for (var key in data) {
//         // skip loop if the property is from prototype
//         if (!data.hasOwnProperty(key)) continue;
    
//         var obj = data[key];
//         for (var prop in obj) {
//             // skip loop if the property is from prototype
//             if(!obj.hasOwnProperty(prop)) continue;
    
//             // your code
//             console.log(prop + " = " + obj[prop]);
//         }
//     }


// })

// 
//  filter the twitter public stream by the word 'mango'. 
// 
// var stream = Twitter.stream('statuses/filter', { track: '#100DaysOfCode' });
 
// stream.on('tweet', function (tweet) {
//   console.log(tweet);
// });




// function tweetProjectOfTheDay() {
  
//   var projectOfTheDay = uniqueRandomArray([
//     'Build a Random Quote Machine',
//     'Show the Local Weather',
//     'Build a Wikipedia Viewer',
//     'Use the Twitch.tv JSON API'
//   ]);
  
//   var message = 'Looking for inspitation for your #100DaysOfCode? Why not try ' + projectOfTheDay()
  
//   Twitter.post('statuses/update', { status: message }, function(err, data, response) {
//     console.log('POST PROJECT OF THE DAY!')
//   })

// }

// // post random project of the day 
// tweetProjectOfTheDay();
// // post sample project every 24 hours
// setInterval(tweetProjectOfTheDay, 86400000);

var str = "Thanks for following @Scot tDevTweets! I look forward to tweeting with you. .CR";

var n = str.search(/@ScottDevTweets/i);

if (n!=-1) {
    console.log(n);
} else { console.log('match') }
