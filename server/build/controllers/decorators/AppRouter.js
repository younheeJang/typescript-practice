import * as express from 'express';
export class AppRouter {
    static getInstance() {
        if (!AppRouter.getInstance) {
            AppRouter.instance = express.Router();
        }
        return AppRouter.instance;
    }
}
