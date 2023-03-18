(() => {
  let isEnable = true;
  // isEnable = 'as';
  // isEnable = 1212;
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const ramdon = Math.random();
  console.log('random', ramdon);
  isNew = ramdon >= 0.5 ? true : false;
  console.log('isNew', isNew);

  const myBoolean: boolean = true;
}) ();
