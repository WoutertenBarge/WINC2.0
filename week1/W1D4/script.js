//Om een element in het DOM te manipuleren, moet je het eerst selecteren
//en een verwijzing ernaar opslaan in een variabele. Om dat te doen,
//voeg je de volgende regel aan je script toe:

var link = document.querySelector("a");

//Nu we een verwijzing naar het element "a" hebben opgeslagen in een variabele,
//
//kunnen we beginnen met een aantal eigenschappen en methodes die beschikbaar
//zijn gemaakt voor de manipulatie van het DOM. (Deze worden gedefiniëerd in
//interfaces zoals het HTMLAnchorElement voor een <a> element, zijn
//algemenere ouder-interface, het HTMLElement, en Node die alle knooppunten
//in het DOM vertegenwoordigt.

//Laat ons eerst en vooral de tekst in de hyperlink
//veranderen door de waarde van de Node.textContentaan te passen. Voeg de volgende
//regel toe aan de vorige:

link.textContent = "Mozilla Developer Network";

//We moeten ook de URL veranderen waar de hyperlink naar verwijst zodat die ons niet
//naar de verkeerde pagina brengt als we erop klikken. Voeg daarvoor de volgende regel toe: :

link.href = "https://developer.mozilla.org";

//Opmerking : Zoals met zoveel in Javascript, zijn er vele manieren om een element te selecteren
//en om een verwijzing ernaar op te slaan in een variable.

//Document.querySelector() is de aanbevolen moderne manier.

//Dat komt goed uit want deze methode laat je elementen selecteren met CSS-selectoren.
//De regel hierboven komt overeen met het eerste <a> element dat in het document opduikt.

//Als je meer dan één element wil manipuleren, kan je Document.querySelectorAll() gebruiken.
//Deze methode selecteert elk element in het document dat overeenkomt met de selector en slaat
//die op in een array.

//Ik kan een element selecteren by ID


