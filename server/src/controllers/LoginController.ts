import * as express from 'express';
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: express.Request, res: express.Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
      </div>
      <button>Submit</button>
    </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: express.Request, res: express.Response) {
    const { email, password } = req.body;
    if (email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn: true };

      console.log('req.session: ' + req.session);
      res.redirect('/');
    } else {
      res.send('invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: express.Request, res: express.Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
