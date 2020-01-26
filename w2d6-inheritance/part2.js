/*
    ASSIGNMENT STATUS REPORT 1/26/2020 Murad Hajiyev

Dear Professor,  I have successfully completed my assignment and below is the link to my github pages website

I almost spent 1 hour to finish this assignment. filter and bubbleSort were the same type of tasks.
At the last task, I revised function constructor inheritance again.

https://muradhajiyev.github.io/
*/

/*jshint esversion: 6 */
(function(){
    "use strict";

    String.prototype.filter = function(...bannedWords){
        const words = this.split(" ");
        let result = words.filter(e => !bannedWords.includes(e));
        return result.join(" ");
    }

    console.log("This house is not nice!".filter('not'));

    Array.prototype.bubbleSort = function(){
        for (let i=0; i < this.length - 1; i++){
            for (let j=0; j < this.length - i - 1; j++){
                if (this[j] > this[j + 1]) {
                    const temp = this[j];
                    this[j] = this[j+1];
                    this[j+1] = temp;
                }
            }
        }
        return this;
    }

    console.log([6,4,3,2,8].bubbleSort());


    var Person = function() {};
    Person.prototype.initialize = function(name, age)
    {
        this.name = name;
        this.age = age;
    }
    Person.prototype.describe = function()
    {
        return this.name + ", " + this.age + " years old.";
    }
    var Student = function() {};
    Student.prototype = new Person();
    Student.prototype.learn = function(subject)
    {
        return this.name + " just learned " + subject;
    }
    var Teacher = function() {}
    Teacher.prototype = new Person();
    Teacher.prototype.teach = function(subject){
        return this.name + " is now teaching " + subject;
    }


    describe("Native filter method for String", function() {
        it("Expected output of \"This house is not nice!\" is \"This house is nice!\" after the word 'nice' was banned", function() {
            assert.equal("This house is not nice!".filter('not'), "This house is nice!");
        });
    });

    describe("Native bubbleSort method for Array", function() {
        it("Expected output of [6,4,3,2,8] is [2,3,4,6,8]", function() {
            assert.deepEqual([6,4,3,2,8].bubbleSort(), [2,3,4,6,8]);
        });
    });


    describe("Teacher / Student Problem", function() {
        it("Expected output is 'John just learned math'", function() {
            var me = new Student();
            me.initialize("John", 25);

            assert.equal(me.learn('math'), "John just learned math");
        });

        it("Expected output is 'Mike is now teaching math'", function() {
            var me = new Teacher();
            me.initialize("Mike", 25);

            assert.equal(me.teach('math'), "Mike is now teaching math");
        });
    });
})();


