'use strict';
let num = 20;

function showFirstMessege (text) {
    console.log(text);
   
   console.log(num);
}

showFirstMessege("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 5));
console.log (calc(3, 3));

function ret() {
    let num = 50;


    return  num;

}

const another = ret();
console.log(another);


const logger = function() {
    console.log("Hello");
};

logger();

const calcc = (a, b) => {return a + b};





