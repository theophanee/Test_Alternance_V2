//recupere les donnes pour le nombre de cliques
var nbD=localStorage.getItem("dragons");
var nbE=localStorage.getItem("evoli");

document.getElementById("bD").addEventListener("click",()=>{
    // si on clique sur la video alors on incremente dans la BDD
    nbD = localStorage.getItem("dragons");
    nbD++;
    localStorage.removeItem("dragons");
    localStorage.setItem("dragons",nbD);
    location.replace("dragons.html"); // et on lance la video choisi
});

document.getElementById("bE").addEventListener("click",()=>{
    // meme fonctionnement
    nbE = localStorage.getItem("evoli");
    nbE++;
    localStorage.removeItem("evoli");
    localStorage.setItem("evoli",nbE);
    location.replace("evoli.html");
});

const cpt=6; //timer secondes
let time = cpt ;

const countdown = document.getElementById('compteur');

setInterval(update , 1000); // lance update toutes les secondes

function update(){
    if(time>=0){
        // on soustrait tant que pas de cliques
        countdown.innerHTML=`${time}`;
        time--;
    }
    if(time==0)
        lancerVideoAlea(); // on lance au hasard une fois le compteur terminer
}

function lancerVideoAlea(){
    var choix = Math.floor(Math.random()*2); // lance une video avec un random
    if(choix===1){
        location.replace("dragons.html");
    }
    if(choix===0){
        location.replace("evoli.html");
    }
}
