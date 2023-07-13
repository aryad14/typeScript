"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payments = void 0;
class Payments {
    constructor(recipientName, details, amount) {
        this.recipientName = recipientName;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipientName} is paid rs. ${this.amount} for ${this.details}`;
    }
}
exports.Payments = Payments;
