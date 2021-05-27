import 'reflect-metadata';
export function get(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata('path', path, target, key);
    };
}
