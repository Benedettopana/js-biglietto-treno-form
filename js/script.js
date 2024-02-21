let myAge;
let myKm;

// INPUT
const inputAge = document.querySelector('.inputAge');
const inputKm = document.querySelector('.inputKm');

// Bottoni
const btnSend = document.querySelector('.btnSend');




btnSend.addEventListener('click',function(event){
  // neurtralizzo la action del form
  event.preventDefault();
  // leggo il contenuto dell'input
  console.log(inputAge.value);
  console.log(inputKm.value);
  // myAge.innerHTML = inputAge.value;
  myAge = inputAge.value;
  myKm = inputKm.value;
  console.log(myAge);
  console.log(myKm);
})