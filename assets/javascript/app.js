// $(document).ready(function() {

window.onload = function() {
    $("#reset").on("click", timer.reset);
    $("#starter").on("click", timer.start);
};
    
// Global Variables  
var q1Answers = ["Tonga", "Marianna", "Philippine"];
var q2Answers = ["70%", "85%", "65%"];
var q3Answers = ["Mid-Atlantic Ridge", "Pacific Ridge", "Nazca Ridge"];
var playerAnswer = "";
var playerAnswerQ1 = "";
var playerAnswerQ2 = "";


var time = 0;


// Timer
function reset() {
    time = 0;

    $("#timer").text("00:00");
}

function start() {
    intervalId = setInterval(count, 1000);
}

function count() {
    time++;
    var converted = timeConverter(time);
    $("#timer").text(converted);
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
 }

 return minutes + ":" + seconds;
 }
start();

// Function to check Player's Answers
function checkAnswer(playerAnswer, answerArray, correctIndex) {
    console.log(answerArray[correctIndex])
    if (playerAnswer === answerArray[correctIndex]) {
        alert("Right!");
    
    } else {
        alert("Wrong!");
    }
}

// Functions for Question #1
$("#selectTonga").click(function() {
    playerAnswerQ1 = $(this).val();
    console.log(playerAnswer);
    checkAnswer(playerAnswerQ1, q1Answers);
});

$("#selectMarianna").click(function() {
    playerAnswerQ1 = $(this).val();
    checkAnswer(playerAnswerQ1, q1Answers, 1); 
    $('input: radio[name=trench')[1].checked = true; 
});

$("#selectPhilippine").click(function() {
    playerAnswerQ1 = $(this).val();
    checkAnswer(playerAnswerQ1, q1Answers);
});

    

// Functions for Question #2
$("#select70").click(function() {
    playerAnswerQ2 = $(this).val();
    checkAnswer(playerAnswerQ2, q2Answers, 0);
    $('input: radio[name=coverage')[0].checked = true;
});

$("#select85").click(function() {
    playerAnswerQ2 = $(this).val();
    checkAnswer(playerAnswerQ2, q2Answers);  
});

$("#select65").click(function() {
    playerAnswerQ2 = $(this).val();
    checkAnswer(playerAnswerQ2, q2Answers);    
});

// Functions for Question #3
$("#selectMidAtlantic").click(function() {
    playerAnswerQ3 = $(this).val();
    checkAnswer(playerAnswerQ3, q3Answers, 0);
    $('input: radio[name=coverage')[0].checked = true;
});

$("#selectEastPacific").click(function() {
    playerAnswerQ3 = $(this).val();
    checkAnswer(playerAnswerQ3, q3Answers);
});

$("#selectNazca").click(function() {
    playerAnswerQ3 = $(this).val();
    checkAnswer(playerAnswerQ3, q3Answers, 0);
});






// });




