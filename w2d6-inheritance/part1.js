/*
* I'm using node.js to run this js codes. I replaced console.log with console.log to get output
* in terminal using node part1.js command.
*
* Solutions
* 1. It is easy task that follows prototype rules.
* 2. This task asks to apply the prototype chain from us.
* 3. The main point here is understand that this is an object before the dot
* 4. The solution is to add stomach property for each speedy and lazy objects.
* 5. The creating of a new prototype of function is for new objects, but it does not affect the existing ones.
* 6. It will work if we sure that Function default prototype has not been changed or forgotten to add constructor property after changing
* 7. Function.prototype.defer should be used to solve the problem.
* 8. After checking the solution, It is clearer.
*  */



/*jshint esversion: 6*/

(function () {
    'use strict';

    /*
    * Task 1 - Working with prototype
    * */
    console.log("----------Task 1 - Working with prototype-------------")
    let animal = {
        jumps: null
    };
    let rabbit = {
        __proto__: animal,
        jumps: true
    };

    console.log( rabbit.jumps ); // ? (1) - true

    delete rabbit.jumps;

    console.log( rabbit.jumps ); // ? (2) - null

    delete animal.jumps;

    console.log( rabbit.jumps ); // ? (3) - undefined

    /*
    * Task 2 - Searching algorithm
    * */
    console.log("----------Searching algorithm-------------");
    let head = {
        glasses: 1
    };

    let table = {
        pen: 3,
        __proto__: head
    };

    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table
    };

    let pockets = {
        money: 2000,
        __proto__: bed
    };

    console.log( pockets.pen ); // 3
    console.log( bed.glasses ); // 1
    console.log( table.money ); // undefined

    /*
    * Task 3 - Where does it write?
    * */
    console.log("----------Where does it write?-------------");

    let animal2 = {
        eat() {
            this.full = true;
        }
    };

    let rabbit2 = {
        __proto__: animal2
    };

    rabbit2.eat(); // rabbit object

    /*
    * Task 4 - Why are both hamsters full?
    * */
    console.log("----------Why are both hamsters full?-------------");

    let hamster = {
        stomach: [],

        eat(food) {
            this.stomach.push(food);
        }
    };

    let speedy = {
        __proto__: hamster,
        stomach: [] // - solution
    };

    let lazy = {
        __proto__: hamster,
        stomach: [] // - solution
    };

    // This one found the food
    speedy.eat("apple");
    console.log( speedy.stomach ); // apple

    // This one also has it, why? fix please.
    console.log( lazy.stomach ); // apple


    /*
    * Task 5 - Changing "prototype"
    * */
    console.log("----------Changing \"prototype\"-------------");

    function Rabbit() {}
    Rabbit.prototype = {
        eats: true
    };

    let rabbit3 = new Rabbit();

    // Rabbit.prototype = {};
    //
    // console.log( rabbit3.eats ); // true

    // Rabbit.prototype.eats = false;
    //
    // console.log( rabbit3.eats ); // ? false


    // delete rabbit3.eats;
    //
    // console.log( rabbit3.eats ); // ? true

    delete Rabbit.prototype.eats;

    console.log( rabbit.eats ); // ? undefined


    /*
    * Task 6 - Create an object with the same constructor
    * */
    console.log("----------Create an object with the same constructor-------------");
    // let obj2 = new obj.constructor();  It will work if we sure that Function default prototype has not been changed
    // or forgotten to add constructor property after changing


    /*
    * Task 7 - Add method "f.defer(ms)" to functions
    * */
    console.log("----------Add method \"f.defer(ms)\" to functions-------------");
    // let obj2 = new obj.constructor();  It will work if we sure that Function default prototype has not been changed
    // or forgotten to add constructor property after changing

    function f() {
        console.log("Hello!");
    }

    Function.prototype.defer = function(milliseconds){
        setTimeout(this, milliseconds);
    }

    f.defer(1000); // shows "Hello!" after 1 second

    /*
    * Task 8 - Add the decorating "defer()" to functions
    * */
    console.log("----------Add the decorating \"defer()\" to functions-------------");

    function f1(a, b) {
        console.log( a + b );
    }

    Function.prototype.defer1 = function(milliseconds){
        let f = this;
        return function(...args){
            setTimeout(() => f.apply(null,args), milliseconds);
        };
    }

    f1.defer1(1000)(1, 2); // shows 3 after 1 second


    /*
    * Task 9 - The difference between calls
    * */
    console.log("----------The difference between calls-------------");
    function Rabbit2(name) {
        this.name = name;
    }
    Rabbit2.prototype.sayHi = function() {
        console.log( this.name );
    }

    let rabbit5 = new Rabbit2("Rabbit");

    rabbit5.sayHi();                        // Rabbit2
    Rabbit2.prototype.sayHi();              // undefined
    Object.getPrototypeOf(rabbit5).sayHi(); // undefined
    rabbit5.__proto__.sayHi();              // undefined
})();