(function () {    var byeSpeaker = {}; 
    var speakWord = "Good Bye"; 
    byeSpeaker.speak = function(name) {        console.log(speakWord + " " + name); 
    }; 
 
    window.byeSpeaker = byeSpeaker; 
})(); 
 
Файл SpeakHello.js: 
(function () {    var helloSpeaker = {}; 
    var speakWord = "Hello"; 
    helloSpeaker.speak = function(name) {        console.log(speakWord + " " + name); 
    }; 
    window.helloSpeaker = helloSpeaker; 
})(); 
