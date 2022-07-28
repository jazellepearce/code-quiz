var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
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
    choiceA: "script src='xxx.js'",
    choiceB: "script name='xxx.js'",
    choiceC: "script href='xxx.js'",
    choiceD: "script value='xxx.js'",
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
    choiceB: "!--This is a comment--",
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

    var finalQuestionIndex = quizQuestions.length;
    var currentQuestionIndex = 0;
    var timeLeft = 76;
    var timerInterval;
    var score = 0;
    var correct;

    function generateQuizQuestion(){
        gameoverDiv.style.display = "none";
        if (currentQuestionIndex === finalQuestionIndex){
            return showScore();
        } 
        var currentQuestion = quizQuestions[currentQuestionIndex];
        questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
        buttonA.innerHTML = currentQuestion.choiceA;
        buttonB.innerHTML = currentQuestion.choiceB;
        buttonC.innerHTML = currentQuestion.choiceC;
        buttonD.innerHTML = currentQuestion.choiceD;
    };
    

    function startQuiz(){
        gameoverDiv.style.display = "none";
        startQuizDiv.style.display = "none";
        generateQuizQuestion();
    

        timerInterval = setInterval(function() {
            timeLeft--;
            quizTimer.textContent = "Time left: " + timeLeft;
        
            if(timeLeft === 0) {
              clearInterval(timerInterval);
              showScore();
            }
          }, 1000);
        quizBody.style.display = "block";
    }

    function showScore(){
        quizBody.style.display = "none"
        gameoverDiv.style.display = "flex";
        clearInterval(timerInterval);
        highscoreInputName.value = "";
        finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
    }
    

    submitScoreBtn.addEventListener("click", function highscore(){
        
        
        if(highscoreInputName.value === "") {
            alert("Initials cannot be blank");
            return false;
        }else{
            var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
            var currentUser = highscoreInputName.value.trim();
            var currentHighscore = {
                name : currentUser,
                score : score
            };
        
            gameoverDiv.style.display = "none";
            highscoreContainer.style.display = "flex";
            highscoreDiv.style.display = "block";
            endGameBtns.style.display = "flex";
            
            savedHighscores.push(currentHighscore);
            localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
            generateHighscores();
    
        }
        
    });
    

    function generateHighscores(){
        highscoreDisplayName.innerHTML = "";
        highscoreDisplayScore.innerHTML = "";
        var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        for (i=0; i<highscores.length; i++){
            var newNameSpan = document.createElement("li");
            var newScoreSpan = document.createElement("li");
            newNameSpan.textContent = highscores[i].name;
            newScoreSpan.textContent = highscores[i].score;
            highscoreDisplayName.appendChild(newNameSpan);
            highscoreDisplayScore.appendChild(newScoreSpan);
        }
    }

    function showHighscore(){
        startQuizDiv.style.display = "none"
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
    
        generateHighscores();
    }
    

    function clearScore(){
        window.localStorage.clear();
        highscoreDisplayName.textContent = "";
        highscoreDisplayScore.textContent = "";
    }
    

    function replayQuiz(){
        highscoreContainer.style.display = "none";
        gameoverDiv.style.display = "none";
        startQuizDiv.style.display = "flex";
        timeLeft = 76;
        score = 0;
        currentQuestionIndex = 0;
    }

    function checkAnswer(answer){
        correct = quizQuestions[currentQuestionIndex].correctAnswer;
    
        if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
            score++;
            alert("That Is Correct!");
            currentQuestionIndex++;
            generateQuizQuestion();

        }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
            alert("That Is Incorrect.")
            currentQuestionIndex++;
            generateQuizQuestion();

        }else{
            showScore();
        }
    }

    startQuizButton.addEventListener("click",startQuiz);