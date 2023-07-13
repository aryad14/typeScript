"use strict";
/** This is the file for navigating and manipulating the DOM elements */
class Invoice {
    // readonly clientName: string; // cannot be modified within or outside the class
    // private details: string; // can only be accessed and modified within the class
    // public amount: number; // can be accessed and modified within and outside the class
    /* constructor (cname: string, d: string, amt: number) {
         this.clientName = cname;
         this.details = d;
         this.amount = amt;
     } */
    //another way to write the constructor if having access modifiers
    constructor(clientName, details, amount) {
        this.clientName = clientName;
        this.details = details;
        this.amount = amount;
    }
    formatObject() {
        return `${this.clientName} owes rs. ${this.amount} for ${this.details}`;
    }
}
const invoice1 = new Invoice("Arya", "Portfolio for Arya", 500);
const invoice2 = new Invoice("Krish", "Portfolio for Krish", 1500);
// console.log(invoice1);
// console.log(invoice2);
//adding the objects into an array
let invoices = [invoice1, invoice2];
// console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.formatObject());
});
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
