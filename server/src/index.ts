import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['sdaf'] }));
app.use(AppRouter.getInstance());

app.listen(2000, () => {
  console.log('2000');
});
