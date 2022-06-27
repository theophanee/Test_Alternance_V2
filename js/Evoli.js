const nbClicE = document.getElementById('nbClicE');
var nbE=localStorage.getItem("evoli");
// recupere le compteur de clique

nbClicE.innerHTML=`${nbE}`; // affiche le compteur

