//Chiedo all'utente di inserire un parola
var parolaUtente = prompt("Inserire una parola:");

function isPalindroma(parola){
  //Inverto la parolaUtente
  var parolaAlContrario = "";
  //Capovolgo la parola
  for(i = parola.length-1; i >= 0 ; i --){
    parolaAlContrario += parola[i];
  }
  //Controllo che la parola sia palindroma
  if(parolaUtente == parolaAlContrario){
    return true;
  } else {
    return false;
  }
}

if(isPalindroma(parolaUtente)){
  document.getElementById('pali').innerHTML = "Palindroma";
} else {
  document.getElementById('pali').innerHTML = "Non Palindroma";
}
