let pg8firstNameInput = document.getElementById('pg8firstNameInput');
let pg8Last = document.getElementById('pg8Last')
let pg8Slack = document.getElementById('pg8Slack')
let pg8Email = document.getElementById('pg8Email')
let pg8Btn = document.getElementById('pg8Btn');
let pg8Res1 = document.getElementById('pg8Res1');
let pg8Res2 = document.getElementById('pg8Res2');
let pg8Res3 = document.getElementById('pg8Res3');
let pg8Res4 = document.getElementById('pg8Res4');
let pg8Res5 = document.getElementById('pg8Res5');

let pg8Input = "";
let pg8Input2 = "";
let pg8Input3 = "";
let pg8Input4 = "";
let pg8Url = "";

pg8Btn.addEventListener('click', function(){
    
    
    if(pg8firstNameInput.value != "")
    {
        pg8Api(pg8firstNameInput);
    }
    else if(pg8Last.value != ""){
        pg8Api2(pg8Last);
    }
    else if(pg8Slack.value != ""){
        pg8Api3(pg8Slack);
    }
    else if(pg8Email.value != ""){
        pg8Api4(pg8Email);
    }
})


function miniChallenge8(url){
    fetch(url)
    .then(response => response.json())
    .then(data => 
        {
        pg8Res1.textContent = "FirstName: " + data.firstName
        pg8Res2.textContent = "LastName: " + data.lastName
        pg8Res3.textContent = "SlackName: " + data.slackName
        pg8Res4.textContent = "Email: " + data.email
        pg8Res5.textContent = "Hobbies: " + data.hobbies
    })
}


function pg8Api(pg8firstNameInput){
    var valid = /^[A-Za-z]+$/;

    if(pg8firstNameInput.value.match(valid) && pg8firstNameInput.value != ""){
        pg8Input = pg8firstNameInput.value;
        pg8Url = "https://jjallforoneback.azurewebsites.net/allforone/studentInfoFirst/" + pg8Input;
        miniChallenge8(pg8Url);
    }
    else
    {
        pg8Res1.textContent = "Enter in name, lastname, slack or email!";
    }
}

function pg8Api2(pg8Last){
    var valid = /^[A-Za-z]+$/;

    if(pg8Last.value.match(valid) && pg8Last.value != ""){
        pg8Input2 = pg8Last.value;
        pg8Url = "https://jjallforoneback.azurewebsites.net/allforone/studentInfoLast/" + pg8Input2;
        miniChallenge8(pg8Url);
    }
    else
    {
        pg8Res1.textContent = "Enter in name, lastname, slack or email!";
    }
}

function pg8Api3(pg8Slack){
        pg8Input3 = pg8Slack.value;
        pg8Url = "https://jjallforoneback.azurewebsites.net/allforone/studentInfoSlack/" + pg8Input3;
        miniChallenge8(pg8Url);
    
}

function pg8Api4(pg8Email){


        
        pg8Input4 = pg8Email.value;
        pg8Url = "https://jjallforoneback.azurewebsites.net/allforone/studentInfoEmail/" + pg8Input4;
        miniChallenge8(pg8Url);

      
}















// miniChallenge8();
// function miniChallenge8(){
//     fetch("https://jjallforoneback.azurewebsites.net/allforone/studentinfoLast/Busby")
//     .then(response => response.text())
//     .then(data => console.log(data))
// }
// miniChallenge8();
// function miniChallenge8(){
//     fetch("https://jjallforoneback.azurewebsites.net/allforone/studentinfoSlack/Andrew Nilsson")
//     .then(response => response.text())
//     .then(data => console.log(data))
// }
// miniChallenge8();
// function miniChallenge8(){
//     fetch("https://jjallforoneback.azurewebsites.net/allforone/studentinfoEmail/jcontreras@codestack.co")
//     .then(response => response.text())
//     .then(data => console.log(data))
// }
// miniChallenge8();