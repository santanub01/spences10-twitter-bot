var uniqueRandomArray = require('unique-random-array');

var queryString = uniqueRandomArray([
    '100daysofcode',
    'freecodecamp',
    'github',
    'vscode',
    'visual studio code',
    'nodejs',
    'node.js',
    'vuejs',
    'vue.js',
    'inferno_js',
    'inferno.js',
    'jekyll',
    'laravel',
    'laravelphp'
  ]);

console.log(queryString());

// create random response
var responseString = uniqueRandomArray([
    `Hi @${queryString()} thanks for the follow! What are you working on today? .CR`,
    `@${queryString()} thanks for following! What are you working on today? .CR`,
    `Hey @${queryString()} thanks for the follow! What are you working on today? .CR`,
    `Thanks for following @${queryString()}! What are you working on today? .CR`,
    `Hey @${queryString()}! Am I following U? @mention me so I can follow back!`,
    `Thanks for following @${queryString()}! I look forward to tweeting with you. .CR`
  ]);

console.log(responseString());