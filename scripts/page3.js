let nameInput = document.getElementById("nameInput");
let timeInput = document.getElementById("timeInput");
let amPmInput = document.getElementById("amPmInput");
let submitBtn = document.getElementById("submitBtn");
let res = document.getElementById("res");

let nameInputVal = "";
let timeInputVal = 0;
let amPmInputVal = "";

let pg3Url = "";

submitBtn.addEventListener("click", function () {
  pg3Api(nameInput, timeInput, amPmInput );
});

function miniChallenge3(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      res.textContent = data;
    });
}

function pg3Api(nameInput, timeInput, amPmInput) {
  var validNum = /^[0-9]*$/;
  var valid = /^[A-Za-z]+$/;

  if (nameInput.value.match(valid) && timeInput.value.match(validNum) && amPmInput.value.match(valid) && timeInput.value != "" && timeInput.value != "" && amPmInput.value !="") {
    nameInputVal = nameInput.value;
    timeInputVal = timeInput.value;
    amPmInputVal = amPmInput.value
    pg3Url =
      "https://jjallforoneback.azurewebsites.net/allforone/minich3/" +
      nameInputVal +
      "/" +
      timeInputVal + "/" + amPmInputVal;
      miniChallenge3(pg3Url);
  }
  else{
    res.textContent = "Not valid enter the correct info!"
  }

  
}