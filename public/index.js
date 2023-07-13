"use strict";
/** This is the file for navigating and manipulating the DOM elements */
Object.defineProperty(exports, "__esModule", { value: true });
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    },
};
console.log(me);
me.speak('hello, world');
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
//greetPerson({name: 'shaun'});
/** ------------------------------------------------------------------------------------------------------- */
const Invoice_js_1 = require("./modules/Invoice.js");
const invoice1 = new Invoice_js_1.Invoice("Arya", "Portfolio for Arya", 500);
const invoice2 = new Invoice_js_1.Invoice("Krish", "Portfolio for Krish", 1500);
// console.log(invoice1);
// console.log(invoice2);
//adding the objects into an array
let invoices = [invoice1, invoice2];
// console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.formatObject());
});
/** ------------------------------------------------------------------------------------------------------- */
/* Targetting DOM and Typecasting */
const anchorTag = document.querySelector('a'); // the anchor can contain a null value in it's href parameter
//so to avoid it we can use an if statement as below
// if (anchorTag) {
//     console.log(anchorTag.href);
// }
//or we can add an '!' mark at the end of the querySelector statement
// console.log(anchorTag.href);
// console.log(form.children);
const form = document.querySelector('.new-item-form');
// using 'as' keyword is known as typecasting (specifying the type of element present in the DOM) in TS
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
