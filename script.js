

'use strict';

function first () {

    //od something
    setTimeout(function(){
        console.log(1);
    },500);

}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I am : ${lang}`);
    callback();
}

function done (){
    console.log('I am compleate this lesson');
}

 learnJS('JavaScripr' ,done);

