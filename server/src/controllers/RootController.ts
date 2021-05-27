import * as express from 'express';
import { get, controller, use } from './decorators';

function requireAuth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('not permitted');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: express.Request, res: express.Response) {
    console.log('req session 2: ' + req.session);
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>you are logged in</div>
          <a href='/auth/logout'>Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <div>you are not logged in</div>
          <a href='/auth/login'>Login</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: express.Request, res: express.Response) {
    res.send('welcome');
  }
}
