export class Invoice {
    constructor(
        readonly clientName: string,
        private details: string,
        public amount: number
    ) { }

    formatObject() {
        return `${this.clientName} owes rs. ${this.amount} for ${this.details}`;
    }
}