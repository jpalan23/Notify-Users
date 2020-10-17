import express from 'express';
import 'babel-polyfill';
const app = express();

import userRouter from './routes/userRoute';
import adminRouter from './routes/adminRoute';

import { setEnvironment } from './config/env';


setEnvironment(app);
// Mounting the routes
app.use('/api',userRouter);
app.use('/api',adminRouter);

app.get('/', (req, res) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
      return res.send(
          'Running server in development mode.'
      );
  } else {
      // Returns the main index file in production environment
      return res.sendFile('index.html', { root: __dirname + '/../dist/' });
  }
})


app.use((req, res, next) => {
    const error = new Error('Route Not Found');
    error.status = 404;
    return res.status(error.status).send({
        error: {
          message: error.message
        }
      });
})



const port = process.env.PORT|| 7000;

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`API Listening on port ${port}: ${process.env.NODE_ENV}`));
  