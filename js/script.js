let myAge;
let myKm;
// Prezzo biglietto normale
let ticketPrice;
// Prezzo biglietto scontato
let ticketSale;
// tassa standard Euro per KM 
const rate = 0.21;
// Sconto base è 0
let sale = true;

// INPUT
const inputAge = document.querySelector('.inputAge');
const inputKm = document.querySelector('.inputKm');

// Bottoni
const btnSend = document.querySelector('.btnSend');

//Prendo i valori dall'utente.
btnSend.addEventListener('click',function(event){
  // neurtralizzo la action del form
  event.preventDefault();
  // leggo il contenuto dell'input
  console.log(inputAge.value);
  console.log(inputKm.value);
  // myAge.innerHTML = inputAge.value;
  myAge = parseInt(inputAge.value);
  myKm = parseInt(inputKm.value);

  // Calcolo prezzo del biglietto standard
  ticketPrice = myKm * rate;

  // Controllo se posso applicare sconti
  if(myAge < 18){
    ticketSale = (ticketPrice*20)/100;
    ticketPrice = ticketPrice.toFixed(2);
  }else if(myAge >= 65){
    ticketSale = (ticketPrice*40)/100;
    ticketPrice = ticketPrice.toFixed(2);
  }else{
    sale = false
  }

  
  

  // Stampo i risultati in console
  console.log(myAge);
  console.log(myKm);
  console.log(ticketPrice);
})







