let pg5Adj = document.getElementById("pg5Adj");
let pg5Creature = document.getElementById("pg5Creature");
let pg5HeShe = document.getElementById("pg5HeShe");
let pg5Event = document.getElementById("pg5Event");
let pg5Location = document.getElementById("pg5Location");
let pg5Food = document.getElementById("pg5Food");
let pg5Noun = document.getElementById("pg5Noun");
let pg5Color = document.getElementById("pg5Color");
let pg5Adj2 = document.getElementById("pg5Adj2");
let pg5Adverb = document.getElementById("pg5Adverb");

let pg5Btn = document.getElementById("pg5Btn");
let pg5Res = document.getElementById("pg5Res");

let adjVal = "";
let creatureVal = "";
let heSheVal = "";
let eventVal = "";
let locationVal = "";
let foodVal = "";
let nounVal = "";
let colorVal = "";
let adj2Val = "";
let adverbVal = "";

let pg5Url = "";

pg5Btn.addEventListener("click", function () {
  pg5Api(pg5Adj, pg5Creature, pg5HeShe, pg5Event, pg5Location, pg5Food, pg5Noun, pg5Color, pg5Adj2, pg5Adverb);
});

function miniChallenge5(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      pg5Res.textContent = data;
    });
}

function pg5Api(pg5Adj, pg5Creature, pg5HeShe, pg5Event, pg5Location, pg5Food,pg5Noun, pg5Color, pg5Adj2,pg5Adverb) {
  var valid = /^[A-Za-z]+$/;

  if (pg5Adj.value.match(valid) && pg5Creature.value.match(valid) && pg5HeShe.value.match(valid)&&pg5Event.value.match(valid) && pg5Location.value.match(valid) && pg5Food.value.match(valid) && pg5Noun.value.match(valid)&& pg5Color.value.match(valid)&& pg5Adj2.value.match(valid)&& pg5Adverb.value.match(valid)) {
    adjVal = pg5Adj.value;
    creatureVal = pg5Creature.value;
    heSheVal = pg5HeShe.value;
    eventVal = pg5Event.value;
    locationVal = pg5Location.value;
    foodVal = pg5Food.value;
    nounVal = pg5Noun.value;
    colorVal = pg5Color.value;
    adj2Val = pg5Adj2.value;
    adverbVal = pg5Adverb.value;
    pg5Url =
      "https://jjallforoneback.azurewebsites.net/allforone/minich5/" +
      adjVal +
      "/" +
      creatureVal + "/" + heSheVal + "/" + eventVal + "/" + locationVal + "/" + foodVal + "/" + nounVal + "/" + colorVal + "/" + adj2Val + "/" + adverbVal; 
      miniChallenge5(pg5Url);
  }
  else{
    pg5Res.textContent = "Not valid enter the correct info!"
  }

  
}