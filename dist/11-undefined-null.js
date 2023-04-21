"use strict";
(() => {
    // let myNumber: number = undefined;
    // let myString: string = null;
    let myNull = null;
    let myUndefined = undefined;
    let myNumber = null;
    myNumber = 12;
    let myString = undefined;
    myString = 'Ass';
    function hi(name) {
        let hello = 'Hola ';
        if (name) {
            hello += name;
        }
        else {
            hello += 'Nobody';
        }
        console.log(hello);
    }
    function hiV2(name) {
        let hello = 'Hola ';
        hello += (name === null || name === void 0 ? void 0 : name.toLocaleLowerCase()) || 'Nobody';
        console.log(hello);
    }
    hi('Nicolas');
    hi(null);
    hiV2('Nicolas');
    hiV2(null);
})();
