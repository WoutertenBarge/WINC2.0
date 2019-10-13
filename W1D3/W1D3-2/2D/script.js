/* ## Opdracht 2d

De korting is alleen geldig bij een bedrag van meer dan 25 euro! 

- Maak een 2de functie die precies hetzelfde doet als `calculateDiscountedPrice` (hernoem!)
- Gebruik een if-statement die checkt of de `totalAmount` wel groter is dan 25 euro.
- Wanneer niet, retourneer de `totalAmount` zonder korting. */



//dus hier beginnen we Mee, geen idee waarom hij t niet doet (regel 18), ik ga eerst even verder

/* const BerekenKortingsPrijs = function BerekenKortingsPrijs (totalAmount, discount) {

    console.log(Math.round(discount-totalAmount))

}
berekenKortingsPrijs(3.75, 2.31); */


//if totalAmount > 25 , dan console.log(Math.round(discount-totalAmount))

//else    console.log(Math.round(totalAmount))

//dus voorbeeld uit opdr W1D2-4

/* const age = (13)

if (age >= 18) {

    console.log('Come In');

} else {

    console.log('Fuck off please!');
 */



 const BerekenKortingsPrijs = function BerekenKortingsPrijs (totalAmount, discount) {

if (totalAmount > 25) 

    console.log(Math.round(totalAmount - discount));


else 

    console.log(Math.round(totalAmount));

};

BerekenKortingsPrijs(19, 10)

//WE HEBBEN EM!!!!!!!!!!!!!!!!!! WEL LASTIG OPDRACHT W1D3-2C zat helemaal verkeerd te denken