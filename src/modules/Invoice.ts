import {hasFormat} from '../interfaces/hasFormat.js'

export class Invoice implements hasFormat {
    constructor(
        readonly clientName: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.clientName} owes rs. ${this.amount} for ${this.details}`;
    }
}