"use strict";
(() => {
    const login = (data) => {
        console.log(data.email, data.password);
    };
    // login('juan@juan.co', 'Juan123');
    login({
        email: 'juan@juan.co',
        password: 123
    });
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'Pro1',
        createAt: new Date(1993, 1, 1),
        stock: 12
    });
    addProduct({
        title: 'Pro1',
        createAt: new Date(1993, 1, 1),
        stock: 12,
        size: 'S'
    });
    console.log(products);
})();
