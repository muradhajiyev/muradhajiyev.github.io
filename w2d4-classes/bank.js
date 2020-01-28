"use strict";

/* jshint esversion: 6*/
class Bank{

    static _accounts = [];

    addAccount(){
        const account = new Account(Bank._accounts.length+1);
        Bank._accounts.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        const account = new SavingsAccount(Bank._accounts.length+1, interest);
        Bank._accounts.push(account);
        return account.getNumber();
    }

    addCheckingAccount(overdraft) {
        const account = new Checkingaccount(Bank._accounts.length+1, overdraft);
        Bank._accounts.push(account);
        return account.getNumber();
    }

    static nextNumber(){
        console.log(Bank._accounts.length)
        return Bank._accounts.length+1;
    }

    closeAccount(number) {
        Bank._accounts = Bank._accounts.filter(a => a.getNumber() !== number);
        return number;
    }

    accountReport(){
        Bank._accounts.forEach(account => {
            console.log(account.toString());
        });

    }
}