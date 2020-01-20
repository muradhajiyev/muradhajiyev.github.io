/*jshint esversion: 6  */
(function() {
    "use strict";

    /**
     * simple sum
     * @returns {array} sum of elements of array
     */
    let sum = array => array.reduce((prevVal, elem, i, array) => prevVal + elem);

    /**
     * simple multiply
     * @returns {array} sum of elements of array
     */
    let multiply = array => array.reduce((prevVal, elem, i, array) => prevVal * elem);

    /* Define a function reverse() that computes the reversal of a string.
        For example, reverse("jag testar") should return the string "ratset gaj".*/

    let reverseString = str => str.split("").reduce((prevVal, el, i, arr) => prevVal + arr[arr.length-1-i], "");


    /* Write a function findLongestWord() that takes an array of words and returns the length of the longest one. */

    let findLongestWord = arr => arr.reduce((prev, el, i, arr) => el.length > prev.length ? el : prev);

    describe("Sum and Multiplication of elements of an array", function() {

        context("when [1,2,3,4] array entered", function() {

            it("the sum is 10", function() {
                assert.equal(sum([1,2,3,4]), 10);
            });

            it("the multiplication is 24", function() {
                assert.equal(multiply([1,2,3,4]), 24);
            });

        });

    });

    describe("Reverse String", function() {

        context("when \"abcdef\" entered", function() {

            it("the reverse is \"fedcba\"", function() {
                assert.equal(reverseString("abcdef"), "fedcba");
            });

        });

    });


    describe("Finding the longest word in an array", function() {

        context("when ['a', 'bb', 'ccc', 'dddd'] entered", function() {

            it("the longest one is \"dddd\"", function() {
                assert.equal(findLongestWord(['a', 'bb', 'ccc', 'dddd']), "dddd");
            });

        });

    });

}());