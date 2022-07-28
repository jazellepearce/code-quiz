var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("highscore-Page");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");


var quizQuestions = [{
    question: "Javascript naming convention is?",
    choiceA: "Dog-case",
    choiceB: "Bat-case",
    choiceC: "Camel-case",
    choiceD: "Donkey-case",
    correctAnswer: "c"},
  {
    question: "What is the correct syntax for referring to an external script called xxx.js",
    choiceA: "<script src='xxx.js'>",
    choiceB: "<script name='xxx.js'>",
    choiceC: "<script href='xxx.js'>",
    choiceD: "<script value='xxx.js'>",
    correctAnswer: "a"},
   {
    question: "How do you create a function?",
    choiceA: "function:myFunction()",
    choiceB: "function myFunction()",
    choiceC: "function=myFunction()",
    choiceD: "myFunction():function",
    correctAnswer: "b"},
    {
    question: "How can you add a comment in a JavaScript",
    choiceA: "'This is a comment",
    choiceB: "<!--This is a comment-->",
    choiceC: "#This is a comment",
    choiceD: "//This is a comment",
    correctAnswer: "d"},
    {
    question: "The majority of a typical Web document will be found in",
    choiceA: "the body tag",
    choiceB: "the title tag",
    choiceC: "the head tag",
    choiceD: "the comment tag",
    correctAnswer: "a"},  
    
    
    ];