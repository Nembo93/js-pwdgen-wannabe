// Chiedi all'utente il suo nome
let firstName = prompt (`Inserisci il tuo nome`);
console.log(typeof firstName);

// Chiedi all'utente il suo cognome
let lastName = prompt (`Inserisci il tuo cognome`);
console.log(typeof lastName);

// Chiedi all'utente il suo colore preferito
let favColor = prompt (`Inserisci il tuo colore preferito`);
console.log(typeof favColor);

// Genera la password concatenando i valori delle variabili dichiarate e aggiungendo 76
const bool76class = `76`;

let user_pdw = firstName + lastName + favColor + bool76class;
console.log(user_pdw);

// Visualizza la password in HTML
// document.getElementById(`user_pdw`);innerHTML = user_pdw;
document.getElementById(`user_pdw`).innerHTML = user_pdw;