import _ from 'lodash';

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

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);
