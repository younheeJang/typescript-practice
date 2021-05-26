import * as express from 'express';
import { router } from './routes/loginRoutes';
import * as bodyParser from 'body-parser';
import * as cookieSession from 'cookie-session';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['sdaf'] }));
app.use(router);
app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`
    <div>hi</div>
    `);
});

app.listen(2000, () => {
  console.log('2000');
});
