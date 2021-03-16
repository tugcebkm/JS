/* Bron: https://codepen.io/shooft/pen/WNvGxeM van Sanne Hooft */

/* Verander wijn */
//var glas = document.querySelector(".wijn");

//glas.addEventListener("click", veranderWijn);

//function veranderWijn() {
//  glas.classList.toggle("rood");}

/* Bron: https://codepen.io/shooft/pen/zYGKBJv van Sanne Hooft */


/* test -  if else proberen */

var glas = document.querySelector('.wijn');
var veranderKleurButton = document.querySelector('.veranderKleur');

function changeColor(){
  if(veranderKleurButton.style.background == '.redWine'){
    veranderKleurButton.style.background = '.roseWine';
  }else {
  veranderKleurButton.style.background == '.redWine';
  }
}


/* black sweater */
var veranderKleurButton = document.querySelector(".veranderKleur");

veranderKleurButton.addEventListener("click", veranderKleding);

function veranderKleding() {
  document.body.classList.toggle("zwart");
}

/* Green sweater */
var veranderKleurButton2 = document.querySelector(".veranderKleur2");

veranderKleurButton2.addEventListener("click", veranderKleding2);

function veranderKleding2() {
  document.body.classList.toggle("green");
}

/* White sweater */
var veranderKleurButton3 = document.querySelector(".veranderKleur3");

veranderKleurButton3.addEventListener("click", veranderKleding3);

function veranderKleding3() {
  document.body.classList.toggle("white");
}

/* cut hair */
var veranderHaarButton = document.querySelector(".cutHair");

veranderHaarButton.addEventListener("click", veranderHaar);

function veranderHaar() {
  document.body.classList.toggle("cut");
}

/* grow hair */
var veranderHaarButton1 = document.querySelector(".growHair");

veranderHaarButton1.addEventListener("click", veranderHaar);

function veranderHaar1() {
  document.body.classList.toggle("grow");
}

/* Dye hair blonde */
var veranderHaarButton2 = document.querySelector(".dyeHair");

veranderHaarButton2.addEventListener("click", veranderHaar2);

function veranderHaar2() {
  document.body.classList.toggle("dye");
}

/* Dye hair black */
var veranderHaarButton3 = document.querySelector(".dyeHair2");

veranderHaarButton3.addEventListener("click", veranderHaar3);

function veranderHaar3() {
  document.body.classList.toggle("dye2");
}


/* Red wine */
var veranderWijnButton = document.querySelector(".redWine");

veranderWijnButton.addEventListener("click", veranderWijn);

function veranderWijn() {
  document.body.classList.toggle("wijnRood");
}

/* White wine */
var veranderWijnButton1 = document.querySelector(".whiteWine");

veranderWijnButton1.addEventListener("click", veranderWijn1);

function veranderWijn1() {
  document.body.classList.toggle("wijnWit");
}

/* Rose wine */
var veranderWijnButton2 = document.querySelector(".roseWine");

veranderWijnButton2.addEventListener("click", veranderWijn2);

function veranderWijn2() {
  document.body.classList.toggle("wijnRose");
}
