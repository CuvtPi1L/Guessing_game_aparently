
const divWordBlanks = document.querySelector('div.word-blanks');
const h2Win = document.querySelector('h2.win');
const h2Loss = document.querySelector('h2.loss');
const divTimerCount = document.querySelector('div.timer-count');
var startButton = document.querySelector('button.start-button');
var arrayGuessWord = '';
var keyName = "";
var guessState = [''];

console.log( divTimerCount, h2Win,h2Loss ,divTimerCount,startButton
)

let guessWord = '';
let numberOfBlanks ='';
var numberOfWins = "";
var numberOfLosses = '';
let resultOfGame = false;
function timer(){
}
let secondsLeft = '';

// wordbank 
function rng(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//RNG function
const wordbank = ["variable", "javascript", "array", "object", "string", "loop", "function", "syntax", "data", "boolean"]
function chooseGuessWord(){
  guessWord = wordbank[rng(0,wordbank.length-1 )];
  console.log(guessWord);
  arrayGuessWord = guessWord.split('');
}


/* TODO: You'll need to figure out a way to show the user on screen a "substitute" character, like an underscore, for 
each letter of the word that hasn't yet been guessed. */

//array of words
//choose word
//word.length= num._
function initPosition(){
 guessState = ['_'];
for(i=1; i< guessWord.length; i++){
  guessState.push('_')
}
console.log(guessState);
}


//start Button

function start(){
  chooseGuessWord();
  initPosition();
  keyListener();
  // isItinTheArray();
  locationOfTheLetter();
}
startButton.addEventListener("click", start);


//keystroke listner
function keyListener(){
  // Add event listener on keydown
  document.addEventListener('keydown', (event) => {
    keyName = event.key;
    isItinTheArray();
    console.log(keyName)
    //1. name of the key
    //  To find out whether a given element is inside an array, you can of course do this
    
  }, false);

}

function isItinTheArray(){ //3. if true, 
  var isItInTheGuessWord = arrayGuessWord.includes(keyName);//2. compare to array of guesswordletters
  switch(isItInTheGuessWord){
    case true:
      locationOfTheLetter()
  }
}


function locationOfTheLetter(){//4.find the location of the letter
  for( jeb=0 ; jeb< arrayGuessWord.length; jeb++){

    switch(arrayGuessWord[jeb] ) //we need to number the given array to replae them array[i])
    // check each item in the givenword array
    {
      case keyName:
      //if truecase 
        guessState.splice(jeb,1,keyName);
        console.log(guessState);
    }
  }
}

 


/* TODO: You'll be using localStorage to store wins and losses. What do you need to do when the app first loads, and 
anytime the wins or losses change?

//read results the game variable, when the games loads
//result(
  if win; win ++
  else los; loss --
)


/* TODO: You'll need an event listener to be ready whenever the user types a guessed letter on the keyboard -- 
but you ONLY want to be responding to those clicks while the game is running. */

// when start button hits ,function(){
  //addEventListener
//}
//var  keysroke = 
// compare keysroke to elemnts of array 
  //
  // e
  // jeb 
     



// TIPS:



// BUT, there is another Array method built into JS that not only tells you if an item is in an array, but it also
// tells you the index position of that item. See if you can look up what it is.

// You can split the work up for this project by defining things as a series of functions. Each group member can work 
// on one or more functions using dummy data, and then present to the group when done. Example functions:

  // Reading from and writing to local storage 
  // Generating blanks for a given word 
  // Grab a random word from a collection of them 
  // See if a specific letter is in a given word, and where it is in the word
  // Start a timer and have it countdown to 0 and stop, but every one second it checks a global 
  //   variable to see if the game is over yet; if so, it stops early.


// Here's an event listener for the start button. startGame can be the name of your first function.
//resetButton. addEventListener("click", startGame);



