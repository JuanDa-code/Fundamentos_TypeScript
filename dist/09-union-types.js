"use strict";
(() => {
    let userId;
    userId = 1212;
    userId = 'asas';
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`);
        }
        else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greeting('Hi');
    greeting(12.121212);
})();
