import express from 'express';
import 'babel-polyfill';
const app = express();
import userRouter from './routes/userRoute';


import { setEnvironment } from './config/env';

// import env from './env';

setEnvironment(app);
// Mounting the routes
app.use('/api',userRouter);


app.get('/', (req, res) => {

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
  