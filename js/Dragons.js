const nbClicD = document.getElementById('nbClicD');
var nbD = localStorage.getItem("dragons");
// recupere le nombre de cliques

nbClicD.innerHTML=`${nbD}`; // affiche le compteur