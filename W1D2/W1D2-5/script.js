//Opdracht W1D2-5

/* Je gaat je bewaker aan de deur van jouw kroeg nog wat slimmer maken 👮‍♂️. 
Dus kopieer de inhoud van de voorgaande opdracht in een nieuwe map en een nieuwe file.

Naast de leeftijdscheck van 18 jaar en ouder, wil je een nieuwe leeftijdscheck invoeren. Je wil namelijk graag 
wat jongere bezoekers naar je kroeg trekken en daarom heb je besloten dat kroegbezoekers tussen de 18 en 25 jaar 
een korting van 50% op hun biertjes krijgen.

- Schrijf een nieuw if statement, die checkt of leeftijd `age`  tussen de **18 jaar of ouder** en **25 jaar en jonger** is.
- Console.log("Je krijgt 50% korting!") als dat waar is, en iets anders als het niet waar is.
- Tip: gebruik `&&`*/

/* const age = 20

if (age >= 18 && age <=25) {

    console.log('Je krijgt 50% korting');

} */


/*
Ludieke actie! 🎉  
Je kroeg bestaat 50 jaar! Daarom krijgt iedereen die "Sarah" of "Abraham" heet een gratis biertje! Oke niemand heet 
tegenwoordig meer Abraham, dus laten we er "Bram" van maken. 

- Maak een nieuwe `const` genaamd `name` en geef de persoon een naam.
- Check met een if statement of de persoon recht heeft op een gratis biertje op deze feestelijke dag.
- Console.log de uitkomst van je if/else statement naar de console.
- Tip: gebruik `||`*/


/* const name = ('Sara' || 'Bram')

if (name == 'Sara' || name == 'Bram') {

    console.log('Je krijgt een gratis biertje');

} */


/*
Naast deze ludieke actie, zijn er nog veel meer feestelijke kortingen tijdens jullie 50-jarig bestaan. 

Bestel je voor meer dan 25 euro aan drankjes? Dan krijg je gratis (vega)bitterballen. 🥘
Bestel je voor meer dan 50 euro aan drankjes? Dan krijg je gratis portie nachos.🌮 

Bestel voor 100 euro of meer? Dan krijg je een gratis flesje champagne. 🍾

- Je raadt het al, schrijf een if/else boom om aan de bezoeker te laten weten welk gratis cadeau hij of zij krijgt op basis van het aantal euro's van zijn of haar bestelling.
- Gebruik de `const` genaamd `totalAmount` . */


const totalAmount = 100

if (totalAmount > 25 && totalAmount <= 50) {

    console.log('Je krijgt gratis bitterballen');
}
if (totalAmount > 50 && totalAmount <= '99') {

    console.log('Je krijgt gratis nachos');
}
if (totalAmount >= 100) {

    console.log('Je krijgt een gratis fles champagne!')
}





// opdracht W1D2-4

/* Je bent een kroegbaas geworden! 🍺 

Maar er gelden natuurlijk een aantal regels voor jouw kroeg. Om te beginnen schenk je alcohol, dus er mogen geen personen onder de 18 jaar naar binnen.  

Jouw JavaScript code gaat de uitsmijter bij de deur zijn. 👮‍♂️ 

- Maak een nieuwe JavaScript file
- Maak een `const`  genaamd `age`  en geef het een waarde van het type `number`
- Schrijf een if statement die controleert of de `age` van de persoon (de input) groter is dan of gelijk is aan 18 jaar.
- Console.log() een bericht naar de console wanneer de persoon naar binnen mag.
- Console.log() een ander bericht wanneer de persoon te jong is en vriendelijk wordt verzocht buiten te blijven.
- Draai je programma in node, zoals je hebt geleerd.
- Probeer een aantal variabelen als input (de leeftijd van de persoon aan de deur). Werkt je code?

const age = (13)

if (age >= 18) {

    console.log('Come In');

} else {

    console.log('Fuck off please!');
}
*/


/*
Naast de leeftijdsgrens, heb je ook een ladiesnight. 👱‍♀️  
Voor de kaartverkoop van het feest, moet er natuurlijk online gecontroleerd worden over de persoon die de tickets koopt aangegeven heeft een vrouw te zijn. 

- Je gaat verder in dezelfde file
- Schrijf een nieuwe `const` genaamd `isFemale` die als waarde een `boolean` krijgt.
- Schrijf een if statement die controleert of de input waar is of niet waar is.
- Console.log weer iets naar de console wanneer de waarde waar is én wanneer de waarde niet waar is.*/


/* const age = (13)
const isFemale = true

if (age >= 18, isFemale == false) {

    console.log('Come In Miss');

} else {

    console.log('Please Fuck off stupid!');
} */


/*
Als kroegbaas vind je het ook belangrijk dat de mensen veilig thuiskomen. Zeker als ze natuurlijk een glaasje hebben gedronken 🍺 🍷.  

- Je gaat verder in dezelfde file.
- Schrijf een nieuwe `const`  genaamd `driverStatus` met de waarde 'bob'.
- Schrijft een if statement die controleert of de input van de driverStatus gelijk is aan 'bob'.
- Console.log een bericht als de bestuurder de status van bob heeft en mag rijden 🚘..
- console.log een bericht als de bestuurde geen bob is en dus niet mag rijden. */

/* const age = (13)
const isFemale = true
const driverStatus = ('Mike')

if (age >= 18, isFemale == false, driverStatus == 'bob') {

    console.log('Please Come In Miss, you are the bob, so do not drink!');

} else {

    console.log('Please Fuck off stupid, you are drunk!');
} */



//IF / ELSE statements tests movie netninje

/* let youLikeMeat = true;

if (youLikeMeat) {

    document.write('Here is the meaty menu....');

} */


/* let youLikeMeat = false;
let myNum = 10;

if (myNum == 10) {

    document.write('myNum is equal to 10');

} else {

    document.write('my num is not equal to 10');

} */


/* let youLikeMeat = true;
let myNum = 10;

if (youLikeMeat) {

    document.write('Good boy');

} else {

    document.write('Eat Fish');

} */

