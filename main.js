//chiedere dati utente
var eta = prompt('Quanti anni hai?');
var km = prompt('Quanti kilometri devi percorrere?');
//calcolare prezzo biglietto e stampare a video
var biglietto = km * 0.21;
if (eta < 18) {
    biglietto = biglietto - biglietto / 5;
}else if (eta > 65) {
    biglietto = biglietto - (biglietto / 5) * 2;
}
document.getElementById('prezzo').innerHTML = biglietto + '€'
