import * as express from 'express';

export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRouter.getInstance) {
      AppRouter.instance = express.Router();
    }
    return AppRouter.instance;
  }
}
