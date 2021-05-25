import { User } from './models/User';

const user = new User({ name: 'jeajea', age: 88 });

user.events.on('change', () => {
  console.log('chan');
});
user.events.trigger('change');
