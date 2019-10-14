/* zie ook ander mapje W1D3-2c, ik dacht dat dit eerst de bedoeling WaveShaperNode,
beetje lang mee bezig geweest, dus nu ga ik onderstaande proberen uitteleggen
zodat ik voor mezelf weet wat er gebeurd */ 



/* ## Opdracht 2c 

Je krijgt een nieuw kassa systeem! En je hebt een nieuwe kortingsactie in je broodjeszaak! 

- Schrijf een functie `calculateDiscountedPrice`
- De functie accepteert 2 argumenten `totalAmount` , `discount` (beide in Euro's)
- De functie retourneert de totaalprijs met korting.
- Gebruik [Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) om af te ronden.
- Run de code in Node */


/* 
De functie heet dus calculateDiscountPrice en dat schrijf je zo op:

const calculateDiscountPrice = functie calculateDiscountPrice () {

}

calculateDiscountPrice();
 */



//gegeven is ook dat er 2 argumenten in zitten dus:

/* const calculateDiscountPrice = function calculateDiscountPrice (totalAmount, discount) { //hier staan de 2 argumenten
        console.log(Math.round(totalAmount - discount));   // hierstaat console.log (dus log op console) en dan ook zoals bij wiskunde wat 
                                                           // tussen haakjes staat eerst dus totalAmount min discount en de uitkomst daarvan
                                                           // op de console loggen met Math.roud (en dat is afronden)
}

calculateDiscountPrice(42.39, 23.47);                                  //wanneer je dan hier tussen haakjes de cijfers zet voor totalAmount en discount
                                                           //wordt op de console de uitkomst gelogt

 */



/* 
// OPTIE 1*/
        const calculateDiscountedPrice = function(totalAmount, discount) {
          console.log(Math.round(totalAmount - discount));
        }
        calculateDiscountedPrice(241.005, 173.258);
        


/*
// OPTIE 2
        const calculateDiscountedPrice = function(totalAmount, discount) {
          return Math.round(totalAmount - discount);
        }
        console.log(calculateDiscountedPrice(42.39, 23.47));
        
        // Weet jij het verschil tussen de twee? Wat doet return binnen een functie?
        //return geeft meteen de waarde terug */

 


