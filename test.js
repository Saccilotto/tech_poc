var output = [];
i = 0;
var str = "";

function fizzBuzz () {
    i++;
    if (i % 3 == 0) {
        str = "Fizz";
    }
    if (i % 5 == 0) {
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