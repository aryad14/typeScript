"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(clientName, details, amount) {
        this.clientName = clientName;
        this.details = details;
        this.amount = amount;
    }
    formatObject() {
        return `${this.clientName} owes rs. ${this.amount} for ${this.details}`;
    }
}
exports.Invoice = Invoice;
