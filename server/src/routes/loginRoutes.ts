import * as express from 'express';

interface RequestWithBody extends express.Request {
  body: { [key: string]: string | undefined };
  query: { [key: string]: string | undefined };
  session: {};
}

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

const router = express.Router();
router.get('/login', (req: express.Request, res: express.Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: express.Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true };

    console.log('req.session: ' + req.session);
    res.redirect('/');
  } else {
    res.send('invalid email or password');
  }
});

router.get('/', (req: express.Request, res: express.Response) => {
  console.log('req session 2: ' + req.session);
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>you are logged in</div>
        <a href='/logout'>Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>you are not logged in</div>
        <a href='/login'>Login</a>
      </div>
    `);
  }
});

router.get('/logout', (req: express.Request, res: express.Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get(
  '/protected',
  requireAuth,
  (req: express.Request, res: express.Response) => {
    res.send('welcome');
  }
);

export { router };
