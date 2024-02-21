let myAge;
let myKm;
let myName;
// Prezzo biglietto normale
let ticketPrice;
// Prezzo biglietto scontato
let ticketSale;
// tassa standard Euro per KM 
const rate = 0.21;
// Sconto base è 0
let sale;
let ticketNumb;
let car;

// const prova2 = document.querySelector('body prova2');
// let prova2 = element.classList;
// INPUT
const inputAge = document.querySelector('.inputAge');
const inputKm = document.querySelector('.inputKm');
const inputName = document.querySelector('.inputName');
const prova = document.querySelector('.prova');

// Bottoni
const btnSend = document.querySelector('.btnSend');
const btnReset = document.querySelector('.btnReset');
const btnBlock = document.querySelector('.btnBlock');

btnBlock.addEventListener('click',function(){
  prova.classList.toggle('d-none');
})

//Prendo i valori dall'utente.
btnSend.addEventListener('click',function(event){
  // prova2.classList.add('d-block');
  // neurtralizzo la action del form
  event.preventDefault();
  // leggo il contenuto dell'input
  console.log(inputAge.value);
  console.log(inputKm.value);
  // myAge.innerHTML = inputAge.value;
  myAge = parseInt(inputAge.value);
  myKm = parseInt(inputKm.value);
  myName = inputName.value;

  // Calcolo prezzo del biglietto standard
  ticketPrice = myKm * rate;

  // Controllo se posso applicare sconti
  if(myAge < 18){
    ticketSale = (ticketPrice*20)/100;
    ticketPrice = ticketSale.toFixed(2);
    sale = 'Offerta under 18 applicata';
  }else if(myAge >= 65){
    ticketSale = (ticketPrice*40)/100;
    ticketPrice = ticketSale.toFixed(2);
    sale = 'Offerta over 65 applicata';
  }else{
    ticketPrice = ticketPrice.toFixed(2);
    sale = 'Nessuna offerta applicata.';
  }

  // trovo il tipo di offerta

  


  // Stampo i risultati in console
  console.log(myName);
  console.log(myAge);
  console.log(myKm);
  console.log(ticketPrice);

  // faccio apparire il biglietto
  

  // CREO a video il biglietto
  document.getElementById('nomeGenerato').innerHTML = myName;

  //Offerta
  document.getElementById('offer').innerHTML = sale;
  // n carrozza random
  document.getElementById('train').innerHTML = 
  car = Math.floor((Math.random() * 15) + 1);

  // COD ticket random
  document.getElementById('codTicket').innerHTML = 
  ticketNumb = Math.floor(Math.random() * (999999 - 100000 + 1) ) + 100000;

  // costo biglietto
  document.getElementById('cost').innerHTML = 
  `
  <p>
    ${ticketPrice}&#8364;
  </p>
  `;
  
  
})

// tasto reset
btnReset.addEventListener('click',function(){
  // resetto il value dell'input
  prova.classList.toggle('d-none');
  inputKm.value = '';
  inputAge.value = '';
  inputName.value = '';
})






