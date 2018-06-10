// $(document).ready(function() {


    
// Global Variables  
var q1Answers = ["Tonga", "Marianna", "Philippine"];
var q2Answers = ["70%", "85%", "65%"];
var q3Answers = ["Mid-Atlantic Ridge", "Pacific Ridge", "Nazca Ridge"];
var playerAnswer = "";
var playerAnswerQ1 = "";
var playerAnswerQ2 = "";

var time = 0;


// Timer
window.onload = function() {
    $("#reset").on("click", reset);
    $("#starter").on("click", start);
    $(":radio").attr('disabled', true);
};

function reset() {
    time = 0;

    $("#timer").text("00:00");
}

function start() {
    intervalId = setInterval(count, 1000);
    $(":radio").attr('disabled', false);
}

function count() {
    time++;
    if (time === 60) {
        alert("TIME OUT!");
    }
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
    checkAnswer(playerAnswerQ1, q1Answers, 1);
    $("#question-1 :radio").attr('disabled', true);
});

$("#selectMarianna").click(function() {
    playerAnswerQ1 = $(this).val();
    checkAnswer(playerAnswerQ1, q1Answers, 1); 
    $("#question-1 :radio").attr('disabled', true);
});

$("#selectPhilippine").click(function() {
    playerAnswerQ1 = $(this).val();
    checkAnswer(playerAnswerQ1, q1Answers, 1);
    $("#question-1 :radio").attr('disabled', true);
});

// Functions for Question #2
$("#select70").click(function() {
    playerAnswerQ2 = $(this).val();
    checkAnswer(playerAnswerQ2, q2Answers, 0);
    $("#question-2 :radio").attr('disabled', true);
});

$("#select85").click(function() {
    playerAnswerQ2 = $(this).val();
    checkAnswer(playerAnswerQ2, q2Answers, 0);
    $("#question-2 :radio").attr('disabled', true);  
});

$("#select65").click(function() {
    playerAnswerQ2 = $(this).val();
    checkAnswer(playerAnswerQ2, q2Answers, 0);
    $("#question-2 :radio").attr('disabled', true);    
});

// Functions for Question #3
$("#selectMidAtlantic").click(function() {
    playerAnswerQ3 = $(this).val();
    checkAnswer(playerAnswerQ3, q3Answers, 0);
    $("#question-3 :radio").attr('disabled', true);
});

$("#selectEastPacific").click(function() {
    playerAnswerQ3 = $(this).val();
    checkAnswer(playerAnswerQ3, q3Answers, 0);
    $("#question-3 :radio").attr('disabled', true);    
});

$("#selectNazca").click(function() {
    playerAnswerQ3 = $(this).val();
    checkAnswer(playerAnswerQ3, q3Answers, 0);
    $("#question-3 :radio").attr('disabled', true);
});






// });




