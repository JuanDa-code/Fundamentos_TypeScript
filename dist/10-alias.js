"use strict";
(() => {
    let userId;
    let shirtSize;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    shirtSize = 'S';
    function greeting(userId, size) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`);
        }
    }
    greeting(1111, 'S');
})();
