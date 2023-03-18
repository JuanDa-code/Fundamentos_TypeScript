"use strict";
(() => {
    let prices = [1, 2, 2, 1, 1, 212, 'Hi', true];
    // prices.push('Example');
    // prices.push(true);
    // prices.push({});
    prices.push(121212);
    let products = ['Hola', true];
    products.push(false);
    let mixed = ['Hi', true];
    mixed.push(12);
    mixed.push([]);
    mixed.push({});
    let numbers = ['As'];
    numbers.map(item => item * 2);
})();
