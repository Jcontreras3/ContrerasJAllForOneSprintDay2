let pg4number1 = document.getElementById("pg4number1");
let pg4number2 = document.getElementById("pg4number2");
let pg4Btn = document.getElementById("pg4Btn");
let pg4Res = document.getElementById("pg4Res");

let pg4Input2 = 0;
let pg4Input3 = 0;
let pg4Url = "";

pg4Btn.addEventListener("click", function () {
  pg4Api(pg4number1, pg4number2);
});

function miniChallenge4(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      pg4Res.textContent = data;
    });
}

function pg4Api(pg4number1, pg4number2) {
  var validNum = /^[0-9]*$/;

  if (pg4number1.value.match(validNum) && pg4number2.value.match(validNum) && pg4number1.value!= "" && pg4number2.value !="") {
    pg4Input2 = pg4number1.value;
    pg4Input3 = pg4number2.value;
    pg4Url =
      "https://jjallforoneback.azurewebsites.net/allforone/minich4/" +
      pg4Input2 +
      "/" +
      pg4Input3;
      miniChallenge4(pg4Url);
  }
  else{
    pg4Res.textContent = "Not a valid number!"
  }

  
}
