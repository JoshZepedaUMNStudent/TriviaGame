$(document).ready(function() {

window.onload = function() {
    $("#reset").on("click", timer.reset);
    $("#starter").on("click", timer.start);
}
    
// Global Variables  
var q1answers = ["Tonga", "Marianna", "Philippine"];
var q2Answers = ["70%", "85%", "65%"];
var q3Answers = ["Mid-Atlantic Ridge", "Pacific Ridge", "Nazca Ridge"];
var playerAnswer = 0;

var intervalId;
var clockRunning = false;

// Timer
start: function() {
    if (!clockRunning) {
        intervalId = setInterval(____, 1000);
        clockRunning = true;
    }
}

// Functions for Question #1
$("#selectTonga").click(function() {
    $('input: radio[name=trench')[0].checked = false;
});

$("selectMarianna").click(function() {
    $('input: radio[name=trench')[1].checked = true;
});

$("selectPhilippine").click(function() {
    $('input: radio[name=trench')[2].checked = false;
});

for (var i = 0; i < q1Answers.length; i++) {
    if (playerAnswer === q1Answers[0]) {
        alert("Wrong!");
    } 
    if (playerAnswer === q1Answers[1]) {
        alert("Right!");
    }
    if (playerAnswer === q1Answers[2]) {
        alert("Wrong!");
    }
}

// Functions for Question #2
$("select70").click(function() {
    $('input: radio[name=coverage')[0].checked = true;
});

$("select85").click(function() {
    $('input: radio[name=coverage')[1].checked = false;
});

$("select65").click(function() {
    $('input: radio[name=coverage')[2].checked = false;
});

// Functions for Question #3
$("selectMidAtlantic").click(function() {
    $('input: radio[name=ridge')[0].checked = true;
});

$("selectEastPacific").click(function() {
    $('input: radio[name=ridge')[1].checked = false;
});

$("selectNazca").click(function() {
    $('input: radio[name=ridge')[2].checked = false;
});













});




