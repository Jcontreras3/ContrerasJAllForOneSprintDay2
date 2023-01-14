let pg9Btn = document.getElementById('pg9Btn');
let pg9Res = document.getElementById('pg9Res')



pg9Btn.addEventListener('click', function(){
    miniCh9();
})


function miniCh9() {
    fetch("https://jjallforoneback.azurewebsites.net/allforone/minich9/")
        .then((response) => response.text())
        .then((data) => (pg9Res.innerHTML = data));
}


