import 'reflect-metadata';
import { router } from '../server/src/routes/loginRoutes';

@controller
class Plane {
  color: string = 'purple';

  @get('/login')
  fly(): void {
    console.log('vrrrrrrrrrr');
  }
}

function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(secret);

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);
    router.get(path, middleware, target.prototype[key]);
  }
}
