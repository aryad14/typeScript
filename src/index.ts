/** This is the file for navigating and manipulating the DOM elements */


// interfaces
interface IsPerson {
    name: string;
    age?: number; // '?' signifies that age property can be null sometimes
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent ', amount);
        return amount;
    },
};

console.log(me);
me.speak('hello, world');

const greetPerson = (person: IsPerson): void => {
    console.log('hello ', person.name);
}

greetPerson(me);
//greetPerson({name: 'shaun'});


/** ------------------------------------------------------------------------------------------------------- */

import { Invoice } from './modules/Invoice.js'
import { Payments } from './modules/Payments.js'
import { hasFormat } from './interfaces/hasFormat.js'
import { List } from './modules/List.js';


let docOne: hasFormat;
let docTwo: hasFormat;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payments('mario', 'plumbing', 200);

let docs: hasFormat[] = [];
docs.push(docOne);
docs.push(docTwo);

const invoice1 = new Invoice("Arya", "Portfolio for Arya", 500);
const invoice2 = new Invoice("Krish", "Portfolio for Krish", 1500);

// console.log(invoice1);
// console.log(invoice2);

//adding the objects into an array
let invoices: Invoice[] = [invoice1, invoice2];

// console.log(invoices);

invoices.forEach(inv => {
    console.log(inv.format());
});



/** ------------------------------------------------------------------------------------------------------- */

/* Targetting DOM and Typecasting */

const anchorTag = document.querySelector('a')!; // the anchor can contain a null value in it's href parameter

//so to avoid it we can use an if statement as below

// if (anchorTag) {
//     console.log(anchorTag.href);
// }

//or we can add an '!' mark at the end of the querySelector statement
// console.log(anchorTag.href);
// console.log(form.children);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// using 'as' keyword is known as typecasting (specifying the type of element present in the DOM) in TS
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul = document.querySelector('ul')!;
const list = new List(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: hasFormat;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);

    list.render(doc,type.value,'end')
});
