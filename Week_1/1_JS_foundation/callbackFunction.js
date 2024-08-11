function sum(num1, num2, fncToCall) {
    fncToCall(num1 + num2);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

// => console.log(sum(1,5));
// => displayResult(sum(1,8));

//callbacks
let value = sum(5,6,displayResultPassive);
console.log(value);
setTimeout(displayResult,5*1000);