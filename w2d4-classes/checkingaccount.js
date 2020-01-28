"use strict";

/* jshint esversion: 6*/
class Checkingaccount extends Account{
    constructor(number, overdraft){
        super(number);
        this._overdraft = overdraft;
    }


    getOverdraft() {
        return this._overdraft;
    }

    setOverdraft(value) {
        this._overdraft = value;
    }


    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdrawal amount has to be greater than zero");
        }

        if (amount > this._overdraft) {
            throw new RangeError(`Withdrawal amount has to be less than ${this.getOverdraft()}`);
        }
        this._balance -= amount;
    }


    endOfMonth(){
        if (this._balance < 0){
            return `Warning, low balance CheckingAccount ${this._balance}: balance: ${this._balance} overdraft limit: ${this._overdraft}`;
        }
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + ", overdraft " + this._overdraft;
    }
}
