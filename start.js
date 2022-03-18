/*
=== type and value comparison
== only value comparison
= attribution

prompt("String"): prompts a window in browser for user with some text(optional) that receives input
alert: pops up an alert in browser with text output to user.
*/


/////////////  Math (love metter)  //////////////
var name1 = prompt("Insert name 1: ");
var name2 = prompt("Insert name 2: ");

var number1 = Math.floor(Math.random() * 100 + 1);
var number2 = Math.floor(Math.random() * 100 + 1);

lovescore = number1 + number2 / 2;
percentage = "Chances of love between " + name1 + " and " + name2 + " are: " + result + "%";
if (lovescore > 70) {
    alert(percentage + "\nBoth of you are made to each other! :O");
}  
if (lovescore > 30 && lovescore <= 70) {
    alert(percentage + "\nEh, maybe u could give it a try.")
}
if (lovescore <= 30) {
    alert(percentage + "\nYou go togehter like oil and wather. :(");
}

/////////////////////// Functions //////////////////:

function isLeap(year) {
    var result = "";
    if (!(year % 4 == 0)) {
        result = "Year is not leap.";
    } else  if (!(year % 100 == 0)) {
        result = "Year is leap.";
    } else if (!(year % 400 == 0)) {
        result = "Year is not leap.";
    } else {
        result = "Year is leap.";
    }
    return result;
}

var year = prompt("Insert an year value: ");
alert(isLeap(year));

/////////////////////// Arrays ////////////////






