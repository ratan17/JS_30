var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;

var wordsDiv = document.querySelector('.words');


window.addEventListener('load', ()=>{
  recognition.start();
});

recognition.addEventListener('speechend', ()=>{
  recognition.start();
});


recognition.addEventListener('result', (e)=>{
 let latestResultIndex = e.resultIndex;
 let saidWords = e.results[latestResultIndex][0].transcript;
 let inputParagraph = document.createElement("p");
 let paraInDiv = wordsDiv.appendChild(inputParagraph);
 inputParagraph.textContent = saidWords;
 console.log(e.resultIndex);
});
