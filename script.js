

'use strict';

const optoins = {
    name: 'test',
    width: '1024',
    height: '1024',
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

optoins.makeTest();

const {border, bg} = optoins.colors;
console.log(border);    


//console.log(Object.keys(optoins).length);


/* console.log(optoins.name);


delete optoins.name;

console.log(optoins); */
/* let counter = 0;

for (let key in optoins) {
    if (typeof(optoins[key]) === 'object') {
        for (let i in optoins[key]) {
            console.log(`Свойство ${i} имеет значение ${optoins[key][i]} `);
          
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${optoins[key]} `); 
        counter++;
    }
    
}

console.log(counter);
 */


