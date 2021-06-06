'use strict';


const box = document.getElementById('box');

console.log(box);

const buttons = document.getElementsByTagName('button');

console.log(buttons[1]);

const cirkles = document.getElementsByClassName('circle');
console.log(cirkles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oheHeart = document.querySelector('.heart');

console.log(oheHeart);