let firstNameInput = document.getElementById('firstNameInput');
let nameSubBtn = document.getElementById('nameSubBtn');
let pg1Result = document.getElementById('pg1Result');

let savedInput1 = "";
let pg1Url = "";

nameSubBtn.addEventListener('click', function(){
    pg1Api(firstNameInput);
})


function miniChallenge1(url){
    fetch(url)
    .then(response => response.text())
    .then(data => {pg1Result.textContent = data})
}


function pg1Api(firstNameInput){
    var valid = /^[A-Za-z]+$/;

    if(firstNameInput.value.match(valid) && firstNameInput.value != ""){
        savedInput1 = firstNameInput.value;
        pg1Url = "https://jjallforoneback.azurewebsites.net/allforone/minich1/" + savedInput1;
        miniChallenge1(pg1Url);
    }
    else
    {
        pg1Result.textContent = "Enter name no numbers!";
    }
}