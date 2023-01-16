"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; //Wertzuweisung
// console.log(firstName); //Ausgabe

// let familyName = "Mütze";
// console.log(familyName);
// console.log(firstName + " " + familyName);

/***** 03 Deklaration + Wertzuweisung II *******/

let firstName, familyName;
firstName = prompt("Bitte Vornamen eingeben. "); //Wertzuweisung
familyName = prompt("Bitte Nachnamen eingeben. "); //Wertzuweisung
console.log(firstName + " " + familyName); //Ausgabe

console.log("Datentyp: " + typeof firstName);




/*JS ist eine untypisierte Sprache! | untyped */

// let test; 
// test = "hallo";
// test = 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03a Konstanten ******/

//const test = "hallo"; // Variable mit Konstantem Inhalt
// test = "hi"; //Keine neue Zuweisung zur LZ möglich!--> Fehler
//console.log("inhalt: " + test); //Ausgabe