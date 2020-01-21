/*jshint esversion: 6 */
(function(){
    "use strict";

    function map(array, func){
        let result = [];
        array.forEach((item, index) => {
            result.push(func(item));
        });
        return result;
    }

    function filter(array, func){
        let result = [];
        array.forEach((item, index) => {
            if (func(item)) {
                result.push(item);
            }

        });
        return result;
    }


    describe("Custom map function", function() {
        it("Expected output of [1,2,3,4,5] is [10,20,30,40,50]", function() {
            assert.deepEqual(map([1,2,3,4,5], (el) => el * 10), [10,20,30,40,50]);
        });
    });

    describe("Custom filter function", function() {
        it("Expected output of [1,2,3,4,5] which is greater than 3 is [4,5]", function() {
            assert.deepEqual(filter([1,2,3,4,5], (el) => el > 3), [4,5]);
        });
    });
})();


