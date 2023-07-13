import {hasFormat} from '../interfaces/hasFormat.js'

export class Payments implements hasFormat {
    constructor(
        readonly recipientName: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.recipientName} is paid rs. ${this.amount} for ${this.details}`;
    }
}