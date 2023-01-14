let pg7Wrd = document.getElementById('pg7Wrd');
let pg7Btn = document.getElementById('pg7Btn');
let pg7Res = document.getElementById('pg7Res');

let pg7Input = 0;
let pg7Url = "";

pg7Btn.addEventListener('click', function(){
    pg7Api(pg7Wrd);
})


function miniChallenge7(url){
    fetch(url)
    .then(response => response.text())
    .then(data => {pg7Res.textContent = data})
}


function pg7Api(pg7Wrd){
    var valid = /^[A-Za-z]+$/;

    if(pg7Wrd.value.match(valid) && pg7Wrd.value != ""){
        pg7Input = pg7Wrd.value;
        pg7Url = "https://jjallforoneback.azurewebsites.net/allforone/minich7/" + pg7Input;
        miniChallenge7(pg7Url);
    }
    else
    {
        pg7Res.textContent = "Enter in correct value!";
    }
}