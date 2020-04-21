

//00000000000000000000000000000000000000000000000000000000000000000000
//00----------------------------------------------------------------00
//00---------------- EX Boolean - Javascripts ----------------------00
//00----------------------------------------------------------------00
//00000000000000000000000000000000000000000000000000000000000000000000



// // ----------------------- Quanti Anni hai ? -------------------------
// let annoCorrente = 2020;
// let anni = prompt('Quanti anni hai?');
// let età = calcoloEtà(annoCorrente, anni);

// function calcoloEtà(annoCorrente, anni) {
//   calcolo = annoCorrente - anni;
//   return calcolo;
// };

// console.log(anni);

// console.log(età);

// ------------------------ Ex Calcolo Biglietto del treno ----------------------

// function appBigliettoTreno() {

// let kmDaPercorrere = prompt('Buongiorno, quanti km deve percorrere?');
// let costoBiglietto = 0.21;
// let bigliettoStandard = calcoloPrezzo(kmDaPercorrere, costoBiglietto);

// //  calcolo costo biglietto Standard --------------
// function calcoloPrezzo(kmDaPercorrere,costoBiglietto) {
//   calcolo = kmDaPercorrere * costoBiglietto;
//   return calcolo ;
// }
// // console.log(bigliettoStandard + 'cent');
// // Richiesta età per calcolo scontistica --------------
// let etàPersona = prompt('Quanti anni ha?');

// // Calcolo biglietto Scontato ----------------------------------
// function scontoBiglietto(etàPersona, bigliettoStandard ) {
//   // console.log(etàPersona);
//   // console.log(bigliettoStandard);
//   // calcolo scontistica ------------------------
//   if (etàPersona <= 18 ) {
//     scontoDaApplicare = (bigliettoStandard * 20) / 100;
//   } else if (etàPersona >= 65) {
//     scontoDaApplicare = (bigliettoStandard * 40) / 100;
//   } else {
//     scontoDaApplicare = 0;
//   }
//   let prezzoScontato = bigliettoStandard - scontoDaApplicare;
//   return prezzoScontato;

// }

// let bigliettoScontato = scontoBiglietto(etàPersona, bigliettoStandard)
// console.log(bigliettoScontato + 'cent');
// return bigliettoScontato.toFixed(2);
// }

// let bigliettoDelTreno = appBigliettoTreno();

// document.write('<br>' + 'Il Biglietto del treno costa ' + bigliettoDelTreno + ' cent');



// --------------- Ex Quanti minuti mancano alla fine dell'ora? ----------------
// --------------- Inserisci due parole, qual'è la più lunga? ------------------
// ------------------------ Ex Rock paper scissor ------------------------------


/**********************************************************
 ************       ARRAY EXERISE       *******************
 *********************************************************/

// var nomi = ["Luca", "Marco", "Paolo"];
// for (var i = 0; i < nomi.length; i++){
// console.log(nomi[i]);
// }




/* 1-     Chiedi all’utente la sua email controlla che sia
nella lista di chi può accedere e stampa un messaggio appropriato */

// let email = ['ciao@gmail.com', 'daje@gmail.com', 'pippo@gmail.com'];

// function checkEmail() {

//     let emailUser = prompt('Inserisci la tua email')
//     let authUser = false;

//     console.log(emailUser);
//     console.log(email);
//     console.log(authUser);
    
//     for (let a = 0; a < email.length; a++) {
        
//        if (email[a] ==  emailUser ) {

//         authUser = true;
//         }
//     };

//     if (authUser == true) {

//         document.write('Accesso Consentito');

//     } else {

//         document.write('Non puoi Accedere, riprova')
//     }

//     return;
  
// };

// checkEmail();

/* 2- Il gioco dei dadi, chi fà di più vince */


// let nUser1 = getRandom(1, 15);
// let computer = getRandom(1, 15);
// let numeri = [];

// numeri.push(nUser1, computer)
// console.log(numeri);

// let a = numeri[0];
// console.log(a);

// let b = numeri[1];
// console.log(b);



// function getRandom(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }


// let giocata = () => {
//     if (a < b){
        
//         document.write('Hai Perso')

//     } else if (a > b) {
        
//         document.write('Hai vinto!')

//     } else if (a == b) {
//         document.write('pareggio')
//     }
// }

// giocata();

/* 3 - Chiedi all’utente il cognome, inseriscilo in un
array con altri cognomi e stampa la lista
ordinata alfabeticamente. Scrivi a che
posizione della lista il nuovo utente si trova */


// let surname = ['rossi', 'bianchi', 'mare'];

// console.log(surname);

// let surnameUser = prompt('Inserisci il tuo cognome!');

// console.log(surname);


// function insertSurname(surnameUser) {

//     if (surnameUser != ('' || 'surname') ) {

//         surname.push(surnameUser)

//         orderSurname = surname.sort();

//         console.log(surname);
        
//     } else {
//         console.log('Il cognome non è valido');
//     };

//     return
// }

// function showSurname() {
//     for (let a = 0; a < surname.length; a++) {

//         b = '<li> '  + surname[a] + ' ' + surname.indexOf(surname[a]) + ' </li>';
//         document.write(b);
//      };

//      return;
// };

// insertSurname(surnameUser);
// showSurname();


