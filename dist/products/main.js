"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.createProduct)({
    name: 'Pro1',
    createAt: new Date(1993, 1, 1),
    stock: 12
});
(0, product_service_1.createProduct)({
    name: 'Pro2',
    createAt: new Date(1995, 1, 1),
    stock: 20,
    size: 'S'
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStock)();
console.log(total);
