function randomNumber(max,min){
  return Math.floor(Math.random() * (max - min) + min);
}

function isEven(number){
  if(number % 2 == 0)
    return true;
  else
    return false;
}

//Faccio scegliere all'utente pari o dispari
var pariDispari = "x";
pariDispari = prompt("Scegliere p(per pari) e d(per dispari): ");
while(pariDispari != "p" || pariDispari != "d"){
  alert("Hai sbagliato ad inserire :(");
  pariDispari = prompt("Scegliere p(per pari) e d(per dispari): ");
}
var numeroLanciato = 0;

if(pariDispari == "p")
  console.log("[DEBUG] Hai scelto pari");
else
  console.log("[DEBUG] Hai scelto dispari");


//Questo ciclo andrà finchè l'utente non inserira il numero nel range giusto
numeroLanciato =  parseInt(prompt("Inserire un numero da 1 a 5: "));
while(numeroLanciato < 1 || numeroLanciato > 5){
  alert("Hai inserito un numero non compreso tra 1 e 5 :(");
  numeroLanciato = parseInt(prompt("Inserire un numero da 1 a 5: "));
}

//Chiamo la funzione che genera numeri casuali
var computerNumber = randomNumber(5,1);

console.log("[DEBUG]numero del computer --> " + computerNumber);
console.log("[DEBUG]numero lanciato dall'utente --> " + numeroLanciato);


if((isEven(computerNumber + numeroLanciato) == true && pariDispari == "p") || isEven(computerNumber + numeroLanciato) == true && pariDispari == "d"){
  console.log("L'utente ha vinto :D");
  document.getElementById('winner').innerHTML = "L'utente ha vinto :D";
}else {
  console.log("Ha vinto il computer :(");
  document.getElementById('winner').innerHTML = "Ha vinto il computer :(";
}
