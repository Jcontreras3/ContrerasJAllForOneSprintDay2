let pg2Num1 = document.getElementById("pg2Num1");
let pg2Num2 = document.getElementById("pg2Num2");
let pg2Btn = document.getElementById("pg2Btn");
let numRes = document.getElementById("numRes");

let savedInput2 = 0;
let savedInput3 = 0;
let pg2Url = "";

pg2Btn.addEventListener("click", function () {
  pg2Api(pg2Num1, pg2Num2);
});

function miniChallenge2(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      numRes.textContent = data;
    });
}

function pg2Api(pg2Num1, pg2Num2) {
  var validNum = /^[0-9]*$/;

  if (pg2Num1.value.match(validNum) && pg2Num2.value.match(validNum) && pg2Num1 != "" && pg2Num2 !="") {
    savedInput2 = pg2Num1.value;
    savedInput3 = pg2Num2.value;
    pg2Url =
      "https://jjallforoneback.azurewebsites.net/allforone/minich2/" +
      savedInput2 +
      "/" +
      savedInput3;
      miniChallenge2(pg2Url);
  }
  else{
    numRes.textContent = "Not a valid number!"
  }

  
}
