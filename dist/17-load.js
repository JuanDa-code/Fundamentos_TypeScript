"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const data = [
    {
        username: 'Juan',
        role: 'admin'
    },
    {
        username: 'Laura',
        role: 'customer'
    },
    {
        username: 'Alisson',
        role: 'customer'
    },
    {
        username: 'Pedro',
        role: 'seller'
    },
    {
        username: 'Saturia',
        role: 'seller'
    },
];
const rta = lodash_1.default.groupBy(data, (item) => item.role);
console.log(rta);
