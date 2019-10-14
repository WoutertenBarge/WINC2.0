/* **Objecten:**

- Maak een object genaamd `person`.
- `person` heeft de volgende key-value pairs: `name`  en `age`. Vul hier je eigen naam en leeftijd in.
- Gebruik console.log(person) en run je JavaScript programma met node, om je object te loggen.*/

let person = {
    name: 'Wouter',
    age: 43
};
//console.log(person);



//Log alleen de property `name`
//console.log(person.name);




//Log alleen de leeftijd `age`
//console.log(person.age);



//Gebruik de *dot-notation* en de *bracket-notation* voor het loggen van de bovenstaande 2 properties
//person.name="Robin";

//person['name'] = 'Goofy';
//console.log(person);


/*
**Arrays**:

- Maak een nieuwe variabele met een lege array.
- Vul de array met minstens 3 verschillende kleuren, in de vorm van `strings` Bijvoorbeeld: groen, blauw, rood.
- Log je nieuwe array naar de console.

let colors = ['green', 'blue', 'red'];
console.log(colors);*/





//Log het eerste element van je array naar de console, dus in ons voorbeeld: groen.

/*let colors = ['green', 'blue', 'red'];
console.log(colors[0]);
*/



//Voeg een 4de element toe aan je array met de bracket-notation  //  resultaat: ['groen, 'blauw, 'rood', 'geel']

/*let colors = ['green', 'blue', 'red'];
colors[3] = 'yelloh';
colors[4] = 5
console.log(colors);
*/


/*
- Voeg een cijfer toe aan je array // resultaat: ['groen, 'blauw, 'rood', 'geel', 5]
- Log de lengte van je array naar de console. Hoeveel elementen heb je nu in je array?
*/

let colors = ['green', 'blue', 'red'];
colors[3] = 'yelloh';
colors[4] = 5
console.log(colors.length);


/*
- Er is nog een manier om items aan je array toe te voegen: [
https://www.geeksforgeeks.org/javascript-array-prototype-push-function/](https://www.geeksforgeeks.org/javascript-array-prototype-push-function/) 
Probeer je array nu eens op deze manier te vullen! */

//Deze sla ik even over, komt vast wel n keer langs