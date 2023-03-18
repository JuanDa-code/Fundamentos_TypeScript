"use strict";
(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log('productPrice', productPrice);
    let customerAge = 28;
    customerAge = customerAge + 1;
    console.log('customerAge', customerAge);
    let productInStock;
    console.log('productInStock', productInStock);
    if (productInStock > 10) {
        console.log('is greater');
    }
    let discount = parseInt('100');
    console.log('discount', discount);
    if (discount <= 200) {
        console.log('Apply');
    }
    else {
        console.log('Not apply');
    }
    let hex = 0xfff;
    console.log('hex', hex);
    let bin = 0b1010;
    console.log('bin', bin);
})();
