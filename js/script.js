/* Parameter: spelinformatie */
/* Bron: https://dlo.mijnhva.nl/d2l/le/content/192726/viewContent/708005/View */
var spelNaam = document.querySelector("#spelNaam"); //QuerySelector zoekt in "dom". spelNaam is een selector die in de dom staat als id.

function spelInfo(dollName, gameName) { //Maakt functie aan om spel informatie te tonen
    spelNaam.textContent = dollName + " " + gameName + " " + 'click on the buttons to play'; //textContent plaatst de letterlijke tekst in het opgehaalde variabele
}
spelInfo("Anastasia", "makeup doll,"); //Functie laten uitvoeren (wordt weergegeven in html)

/* Auteur informatie */
/* Parameter: naam en vaknaam */
/* Create Element: Element toevoegen in html aan de hand van js */
/*Bron: https://codepen.io/davidcochran/pen/WbWXoa */
function auteurInfo(naam, vakNaam) { //Maakt functie aan om auteur informatie te tonen
    var infoAuteur = "This game is made by: " + naam + ", " + "for the subject: " + vakNaam;

    var informatie = document.createElement('h3'); // Nieuwe element aanmaken, in de console lijkt het op een html selector
    informatie.innerHTML = infoAuteur; // Gelijk aan string en leest html waarden zoals <strong>

    var auteurTekst = document.querySelector("#auteur");
    auteurTekst.appendChild(informatie); // Aangemaakte element(informatie) wordt toegevoegd aan de html
}
auteurInfo('Tugce', 'Inleiding Programmeren'); //Functie laten uitvoeren (wordt weergegeven in html)


/* Bron: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_if_prompt */
var naamBtn = document.querySelector("#naamBtn"); //Variabele aanmaken
naamBtn.addEventListener("click", drankNaam); //drankNaam vertelt wat er moet gebeuren als er geklikt wordt op de selector

function drankNaam() { // Maak functie aan voor de input van de naam
    var naam = document.querySelector("#tekstVak").value;
    var bericht;

    // Controleert de input van de gebruiker
    if (naam === "rose") {
        // als de input gelijk is aan het woord rose (identiek), geeft dit weer
        bericht = "Yaay! You guessed right";

    } else if (naam === "red" || naam === "white") { // Twee waarden woorden vergeleken
        bericht = "Close, but not close enough..."; // Wanneer de gebruiker het bijna goed heeft geraden, geeft dit weer

    } else {   // wanneer het fout is, geeft dit weer
        bericht = "Ooppss, try again";
    }

    document.querySelector("#outputTekst").innerHTML = bericht; //Functie laten uitvoeren (wordt weergegeven in html)
}

// Functie voor de button "try again", gebruiker kan opnieuw proberen
var opnieuwBtn = document.querySelector("#opnieuwBtn"); //Variabele aanmaken
opnieuwBtn.addEventListener("click", clearGuess); //Het element gaat hier luisteren naar een event (dus de click)

function clearGuess() { //Maakt functie aan om de click uit te voeren
    document.querySelector("#outputTekst").innerHTML = '';
    document.querySelector("#tekstVak").value = ''; //Functie laten uitvoeren (wordt weergegeven in html)
}

/* Bron: https://codepen.io/shooft/pen/zYGKBJv van Sanne Hooft */
/* black sweater */
var veranderKleurBtn = document.querySelector(".veranderKleur"); //QuerySelector zoekt in "dom" aangegeven selector

veranderKleurBtn.addEventListener("click", veranderKleding); //Het element gaat hier luisteren naar een event (dus de click)

function veranderKleding() { //Maakt functie aan om de click uit te voeren
    document.body.className = ""; // Maakt hele class attribute leeg
    document.body.classList.add("zwart"); // Voegt nieuwe class toe
}

/* Green sweater */
var veranderKleurBtn2 = document.querySelector(".veranderKleur2");

veranderKleurBtn2.addEventListener("click", veranderKleding2);

function veranderKleding2() {
    document.body.className = "";
    document.body.classList.add("green");
}

/* White sweater */
var veranderKleurBtn3 = document.querySelector(".veranderKleur3");

veranderKleurBtn3.addEventListener("click", veranderKleding3);

function veranderKleding3() {
    document.body.className = "";
    document.body.classList.add("white");
}

/* cut hair */
var veranderHaarBtn = document.querySelector(".cutHair"); //QuerySelector zoekt in "dom" aangegeven selector // variabele aanmaken

veranderHaarBtn.addEventListener("click", veranderHaar); //Het element gaat hier luisteren naar een event (dus de click)

function veranderHaar() { //Maakt functie aan om de click uit te voeren
    document.body.classList.toggle("cut"); //Class wordt toegevoegd en weer verwijderd
}

/* Dye hair blonde */
var veranderHaarBtn2 = document.querySelector(".dyeHair");

veranderHaarBtn2.addEventListener("click", veranderHaar2);

function veranderHaar2() {
    document.body.classList.toggle("dye");
}

/* Dye hair black */
var veranderHaarBtn3 = document.querySelector(".dyeHair2");

veranderHaarBtn3.addEventListener("click", veranderHaar3);

function veranderHaar3() {
    document.body.classList.toggle("dye2");
}


/* Red wine */
var veranderWijnBtn = document.querySelector(".redWine");

veranderWijnBtn.addEventListener("click", veranderWijn);

function veranderWijn() {
    document.body.classList.toggle("wijnRood");
}

/* White wine */
var veranderWijnBtn1 = document.querySelector(".whiteWine");

veranderWijnBtn1.addEventListener("click", veranderWijn1);

function veranderWijn1() {
    document.body.classList.toggle("wijnWit");
}

/* Rose wine */
var veranderWijnBtn2 = document.querySelector(".roseWine");

veranderWijnBtn2.addEventListener("click", veranderWijn2);

function veranderWijn2() {
    document.body.classList.toggle("wijnRose");
}
