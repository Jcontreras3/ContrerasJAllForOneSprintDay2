let pg6Num = document.getElementById('pg6Num');
let pg6Btn = document.getElementById('pg6Btn');
let pg6Res = document.getElementById('pg6Res');

let pg6Input = 0;
let pg6Url = "";

pg6Btn.addEventListener('click', function(){
    pg6Api(pg6Num);
})


function miniChallenge6(url){
    fetch(url)
    .then(response => response.text())
    .then(data => {pg6Res.textContent = data})
}


function pg6Api(pg6Num){
    var valid = /^[0-9]*$/;

    if(pg6Num.value.match(valid) && pg6Num.value != ""){
        pg6Input = pg6Num.value;
        pg6Url = "https://jjallforoneback.azurewebsites.net/allforone/minich6/" + pg6Input;
        miniChallenge6(pg6Url);
    }
    else
    {
        pg6Res.textContent = "Enter in correct value!";
    }
}