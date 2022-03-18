/*
    === type and value comparison
    == only value comparison
    = attribution

    OBS: Try using === when possible in order to maintaing a somewhat strict type verification during execution.
    Use == only when a different type value comparation is expected.

    prompt("String"): prompts a window in browser for user with some text(optional) that receives input.
    alert("String"): pops up an alert in browser with text output to user.

    E.G:
    value = prompt("You should input this kind of value regarding a particular info: ");
    alert("From the input inserted this was the output result from the program: " + value);

    console.log(x): Adds output to the console.
*/

/////////////  Love Meter  //////////////
var name1 = prompt("Insert name 1: ");
var name2 = prompt("Insert name 2: ");

/*
    Math.random():
        Generates a random number between 0 and 1.
        When multiplied the Math.random function expands its range accordingly.
        In order to decrease or increase its minimum range,
        a value should be added or subtracted at the end of the calculation.
    Math.floor(x): 
        Truncates the float x parameter down to the first integer occurency.
*/

var number1 = Math.floor(Math.random() * 100 + 1);
var number2 = Math.floor(Math.random() * 100 + 1);

lovescore = number1 + number2 / 2;
percentage = "Chances of love between " + name1 + " and " + name2 + " are: " + result + "%";
if (lovescore > 70) {
    alert(percentage + "\nBoth of you are made to each other! :O");
}  
if (lovescore > 30 && lovescore <= 70) {
    alert(percentage + "\nEh, maybe u could give it a try. :D")
}
if (lovescore <= 30) {
    alert(percentage + "\nYou go togehter like oil and wather. :(");
}

/////////////////////// Functions //////////////////
function isLeap(year) {
    var result = "";
    if (!(year % 4 === 0)) {
        result = "Year is not leap.";
    } else  if (!(year % 100 === 0)) {
        result = "Year is leap.";
    } else if (!(year % 400 === 0)) {
        result = "Year is not leap.";
    } else {
        result = "Year is leap.";
    }
    return result;
}

var year = prompt("Insert an year value: ");
alert(isLeap(year));

/////////////////////// Arrays ////////////////
var ucon = ["Libermann", "Edson", "Andre", "Henrique", "JoJo", "Gustavo", "Bruno", "Cassio", "Jhonata", "Leonardo" , "Marcos", "Rodrigo", "Bordignon", "Roque", "Aloisio"];
console.log(ucon[0]);

var member = prompt("What's your name?");
/*
array.includes(x):
    Searches for x member inside the array in the entire array.
array.includes(x, y):
    Searches for x member inside the array beggining by the y index until the array's end;
*/
if (ucon.includes(member)) {
    alert("You are a member of UCON project, welcome!");
} else {
    alert("Sorry, you aren't a project member.");
}

/*
Fizz buzz problem
    Multiples of 3 = "Fizz"
    Multiples of 5 = "Buzz"
    Multiples of 3 and 5 = "FizzBuzz"
*/
var output = [];
i = 0;
var str = "";

function fizzBuzz () {
    i++;
    if (i % 3 === 0) {
        str = "Fizz";
    }
    if (i % 5 === 0) {
        str += "Buzz";
    }

    if (str.length > 0) {
        output.push(str);
        str = "";
    } else {
        output.push(i);
    }
    console.log(output);
}

while (i <= 100) {
    fizzBuzz();
}

//////////////////////    ///////////////////////////







