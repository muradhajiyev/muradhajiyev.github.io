"use strict";

/* jshint esversion: 6*/
class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }


    getInterest() {
        return this._interest;
    }

    setInterest(value) {
        this._interest = value;
    }


    addInterest(interest){
        if (interest <= 0) {
            throw new RangeError("Deposit interest has to be greater than zero");
        }
        this._balance += this._balance * interest / 100;
    }

    endOfMonth(){
        this.addInterest(this._interest);
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + ", interest " + this._interest;
    }
}
