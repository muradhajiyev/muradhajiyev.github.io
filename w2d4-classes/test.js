/*
    ASSIGNMENT STATUS REPORT 1/26/2020 Murad Hajiyev

Dear Professor,  I have successfully completed my assignment and below is the link to my github pages website
http://muradhajiyev.github.io

I almost spent 1 hour to finish this assignment. filter and bubbleSort were the same type of tasks.
At the last task, I revised function constructor inheritance again.

https://muradhajiyev.github.io/
*/

/*jshint esversion: 6 */
(function(){
    "use strict";

    describe("Account testing deposit / withdrew method", function() {
        let account = new Account(123);

        it("Expected output of amount is 10 after deposited 10 at the beginning with initial value 0", function() {
            account.deposit(10);
            assert.equal(account.getBalance(), 10);
        });


        it("Expected output of amount is 0 after withdrew 10", function() {
            account.withdraw(10);
            assert.equal(account.getBalance(), 0);
        });
    });

    describe("SavingsAccount testing addInterest method", function() {
        let savingsAccount = new SavingsAccount(123, 0);
        it("Expected output of amount is 12 after added interest 20% at the beginning with initial value 10", function() {
            savingsAccount.deposit(10);
            savingsAccount.addInterest(20);
            assert.equal(savingsAccount.getBalance(), 12);
        });
    });

    describe("Checkingaccount testing withdrew method", function() {
        let checkingaccount = new Checkingaccount(123, 500);
        it("Expected output of amount is 600 after withdrew amount 400 which is less than overdraft amount 500 at the beginning with initial value 1000", function() {
            checkingaccount.deposit(1000);
            checkingaccount.withdraw(400);
            assert.equal(checkingaccount.getBalance(), 600);
        });
    });


    describe("Bank testing", function() {
        let bank = new Bank();
        it("Adding account", function() {
            assert.equal(bank.addAccount(), Bank.nextNumber()-1);
        });

        it("Adding checkingaccount", function() {
            assert.equal(bank.addCheckingAccount(500), Bank.nextNumber()-1);
        });

        it("Adding savingsaccount", function() {
            assert.equal(bank.addSavingsAccount(10), Bank.nextNumber()-1);
        });

        it("Close the last account", function() {
            assert.equal(bank.closeAccount(Bank.nextNumber()-1), Bank.nextNumber());
        });

    });

})();


