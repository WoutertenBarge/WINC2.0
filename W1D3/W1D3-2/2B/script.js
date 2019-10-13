/* ## Opdracht 2b

Naast een broodje gezond ga je ook nog andere broodjes serveren in je winkel. 

- Kopieer de functie die je had en herschrijf met de naam `makeSandwich`
- De functie accepteert 1 argument genaamd `topping` ...
- ... en retourneert een broodje met dat beleg .
- Doe dat op de volgende manier `console.log("There you go, a sandwich with ...... 
(hier jouw beleg)") op de puntjes moet het beleg komen te staan. (nee, dit is inderdaad 
    niet de correcte syntax).
- Run de code in Node */

//customizing functions
//https://watchandcode.com/courses/60264/lectures/929350

//onderstaande werkt niet, waarom
/* 
const makeSandwich = function makeSandwich (topping){
    console.log('rown bread');
    console.log('butter');
    console.log('cheese');
   // console.log('salad');
    console.log( + topping)
    console.log('brown bread');
    console.log("There you go, a sandwich with + topping");

}
makeSandwich('salad'); */


/* const makeSandwich = function makeSandwich (topping){
    console.log('rown bread');
    console.log('butter');
    console.log('cheese');
   // console.log('salad');
    console.log(+ topping);
    console.log('brown bread');
    console.log('There you go, a sandwich with' + topping);

}
makeSandwich('salad'); */


//dus;

/*
const maakAuto = function maakAuto (kleur){
    console.log('carrosserie');
    console.log('wielen');
    console.log('motor');
    console.log('interieur');
    console.log('overig');
    console.log('kleur auto is'+ kleur);
};
maakAuto('grijsmetallic');
*/

//nog een 

/* const bouwHuis = function bouwHuis (denkAan){
    console.log('tekening');
    console.log('materialen');
    console.log('personeel');
    console.log('vergunningen');
    console.log('niet vergeten' + ' ' + denkAan);

}
bouwHuis('weet ik veel');
 */

 // nog een

const maakChili = function maakChili (drankje) {
    console.log('gehakt');
    console.log('uien');
    console.log('knoflook');
    console.log('paprika');
    console.log('prei');
    console.log('bruine bonen');
    console.log('chile kruiden');
    console.log('stokbrood met kruidenboter');
    console.log('en niet te vergeten' + ' ' + drankje);
}
maakChili ('rood wijntje');


