(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  // login('juan@juan.co', 'Juan123');
  login({
    email: 'juan@juan.co',
    password: 123
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

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
}) ();
