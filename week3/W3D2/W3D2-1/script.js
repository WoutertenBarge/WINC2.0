/* [Opdracht W3D2-1: JS API Requests 

    Synchronous code wordt gedefinieerd als “a bunch of statements in sequence”. 
    De code wordt dus van boven naar beneden uitgevoerd door JavaScript. Jullie 
    hebben eerder al gezien dat de volgorde, waar een functie of lijn code staat, 
    dus wel degelijk uitmaakt voor JavaScript. 

    Om te laten zien dat Javascript als taal synchronous is en wat de gevolgen 
    hiervoor zijn, hebben we een paar kleine voorbeeldjes:
    
    1. Maak een nieuwe folder met daarin een HTML doctype opstelling) en een JS bestand 
    2. Koppel de JS in het is aan een standaard HTML bestand (met de welbekende <script> tag 
    voor de sluit tag van de body)
    3. Plaats de onderstaande test code in het Javascript bestand en kijk wat het resultaat is in de browser. */

console.log("He hallo, ik ben eerste");
setTimeout(function() {
  console.log("He hallo, ik ben tweede");
}, 2000);
console.log("He hallo, ik ben derde");
