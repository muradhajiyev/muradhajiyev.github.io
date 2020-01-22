/*
    ASSIGNMENT STATUS REPORT 1/20/2020 Murad Hajiyev
Dear Professor,  I have successfully completed my assignment and below is the link to my github pages website
https://muradhajiyev.github.io/

The problem took almost 3 hours to finish. The most challenging part was deepEqual function.
It should be considered different scenarious such as object can have sub objects.

*/

/*jshint esversion: 6 */
(function () {
    "use strict";

    function reverseArray(array) {
        let result = [];
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i]);
        }
        return result;
    }

    function reverseArrayInPlace(array){
        var i = 0;
        while (i < array.length - 1) {
            array.splice(i, 0, array.pop());
            i++;
        }
        return array;
    }


    function arrayToList(array) {
        let list = null;
        for (let i = array.length - 1; i >= 0; i--) {
            list = { value: array[i], rest: list };
        }

        return list;
    }

    function listToArray(list){
        let array = [];
        for (let node = list; node; node = node.rest) {
            array.push(node.value);
        }
        return array;
    }

    function prepend(value, list) {
        return {value, rest: list};
    }

    function nth(list, n) {
        if (!list) { return undefined; }
        else if (n === 0) { return list.value; }
        else { return nth(list.rest, n - 1); }
    }


    /*
    * 1. If elements are equal, the function returns true
    * 2. If one of the elements is null or not object, the function return false
    * 3. If key counts of objects are not same, the function returns false
    * 4. If each key of the first object is not included inside the key set of the second object
    *           or sub-object of any key isnot equal to sub-object of same key of the second object
    *           the functions return false.
    * */
    function deepEqual(a, b) {
        if (a === b) { return true; }

        if (a === null || typeof a !== "object" ||
            b === null || typeof b !== "object") { return false; }

        let keysA = Object.keys(a), keysB = Object.keys(b);

        if (keysA.length !== keysB.length) { return false; }

        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) { return false; }
        }

        return true;
    }
    
    describe("reverseArray", function () {
        it("Expected output of [1,2,3,4,5] is [5,4,3,2,1]", function () {
            assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5,4,3,2,1]);
        });
    });

    describe("reverseArrayInPlace", function () {
        it("Expected output of [1,2,3,4,5] is [5,4,3,2,1]", function () {
            assert.deepEqual(reverseArrayInPlace([1, 2, 3, 4, 5]), [5,4,3,2,1]);
        });
    });

    describe("A List", function () {
        context("arrayToList - when [10,20] array entered", function() {
            it("Expected output is  {value: 10, rest: {value: 20, rest: null}}", function () {
                assert.deepEqual(arrayToList([10,20]), {value: 10, rest: {value: 20, rest: null}});
            });
        });

        context("listToArray - when arrayToList([10, 20, 30]) list entered", function() {
            it("Expected output is  [10, 20, 30]", function () {
                assert.deepEqual(listToArray(arrayToList([10, 20, 30])), [10, 20, 30]);
            });
        });

        context("prepend - when prepend(10, prepend(20, null)) entered", function() {
            it("Expected output is  {value: 10, rest: {value: 20, rest: null}}", function () {
                assert.deepEqual(prepend(10, prepend(20, null)), {value: 10, rest: {value: 20, rest: null}});
            });
        });

        context("nth - when nth(arrayToList([10, 20, 30]), 1) entered", function() {
            it("Expected output is  20", function () {
                assert.deepEqual(nth(arrayToList([10, 20, 30]), 1), 20);
            });
        });
    });

    describe("deepEqual", function () {
        context("when let obj1 = {a:1, b:2} and let obj2 = {a:1, b:2} entered", function() {
            it("Expected output is  true", function () {
                assert.deepEqual(deepEqual({a:1, b:2}, {a:1, b:2}), true);
            });
        });

        context("when let obj1 = {c:10, d:20} and let obj2 = {a:1, b:2} entered", function() {
            it("Expected output is  false", function () {
                assert.deepEqual(deepEqual({c:10, d:20}, {a:1, b:2}), false);
            });
        });

    });
})();


