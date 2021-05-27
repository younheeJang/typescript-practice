import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import * as express from 'express';

export function use(middleware: express.RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
