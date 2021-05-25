import { User } from './models/User';

const user = new User({ name: 'curi', age: 33 });

user.on('change', () => {
  console.log('c1');
});
user.on('change', () => {
  console.log('c2');
});
user.on('save', () => console.log('s1'));
console.log(user);
user.trigger('change');
