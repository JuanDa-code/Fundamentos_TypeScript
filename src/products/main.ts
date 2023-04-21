import { createProduct, calcStock, products } from  './product.service';

createProduct({
  name: 'Pro1',
  createAt: new Date(1993, 1, 1),
  stock: 12
});

createProduct({
  name: 'Pro2',
  createAt: new Date(1995, 1, 1),
  stock: 20,
  size: 'S'
});

console.log(products);
const total = calcStock();
console.log(total);
