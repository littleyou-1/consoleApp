'use strict';


const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    cirkles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oheHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */

box.style.cssText = `background-clolr: blue; width: 500px`;

buttons[1].style.borderRadius = '50%';
cirkles[0].style.backgroundColor = 'red';

/* for  (let i = 0; i < hearts.length;  i++) {
    hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

///const text = document.createTextNode('Hear am i');

div.classList.add('black');


document.body.append(div);

//document.append(div);

//wrapper.prepend(div);

//hearts[1].after(div);

//cirkles[1].remove();

//hearts[0].replaceWith(cirkles[0]);

div.innerHTML = "<h1>Hello World</h1>";

div.insertAdjacentHTML("", '<h2>Hello</h2>');
 