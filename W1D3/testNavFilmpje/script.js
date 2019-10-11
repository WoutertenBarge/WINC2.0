//FUNCTIES




let double = function(num) {
    return num * 2;
 }

 let twelve = double(6);
 console.log(double(6));
















//voeren een taak uit
//of berekenen een waarde


/*
function greet () {

console.log('Hello World');

}

greet();
*/


//functie krijgt input hoe de functie zich moet gedragen
//bv name

/* function greet (name, lastName) {

    console.log('Hello ' + ' ' + name + ' ' + lastName);
    
    }
    
    greet('John', 'Smith');
    greet('Robin', 'ten Barge');
     */


//ARRAY start 35:22min
//een Array is een object en heeft dus properties

//lijst objecten worden opgeslagen in Array

//Let selectedColors = [];        Dit is een lege Array

/* let selectedColors = ['red', 'blue'];
console.log(selectedColors); */

//exces item red = 0, blue = 1

/* let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]); */

//item toevoegen aan array
/* let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 12
console.log(selectedColors); */


//Array is object en heeft dus properties 
//maak gebruik van de DOT notation

/* let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 12
console.log(selectedColors.length); */



//variabelen

/* let name = 'Wouter'
let age = 30

console.log(name, age); */

//van bovenstaande variabelen nu een object maken

/* let person = {

    name: 'Wouter',
    age: 30
};

console.log(person); */

/* let person ={

    name: 'Robin',
    lastName: 'ten Barge',
    age: 12,
    boy: true,
    soccer: true
};

console.log(person); */

//stel we willen de naam van de persoonveranderen in het object person
//hiervoor zijn 2 manieren

//1 DOT NOTATION
//DOT notation is korter om te schrijven dus eerste keus, maar.... => Bracket

/* let person ={

    name: 'Robin',
    lastName: 'ten Barge',
    age: 12,
    boy: true,
    soccer: true
};

person.name = 'Wouter';

console.log(person.name); */

//BRACKET NOTATION
//..=> wanneer je op het moment van coderen niet weet welke waarde bv 'name' heeft,
//dan gebruik je bracket notation en kan je bv ipv 'name' 'selection' zodat de gebruiken
// deze zelf kan invoeren

/* let person ={

    name: 'Robin',
    lastName: 'ten Barge',
    age: 12,
    boy: true,
    soccer: true
};

person['name'] = 'Kiara';

//console.log(person.name);
//of
console.log(person['name']); */

//dus

/* let person ={

    name: 'Robin',
    lastName: 'ten Barge',
    age: 12,
    boy: true,
    soccer: true
};

let selection = 'name';

person[selection] = 'Goofy';

console.log(person.name); */
