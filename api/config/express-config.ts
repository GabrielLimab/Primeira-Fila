import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import { getEnv } from '../utils/functions/get-env';
import { errorHandler } from '../src/middlewares/error-handler';

dotenv.config();
export const app: Express = express();

const options: CorsOptions = {
  origin: [getEnv('APP_URL_ADDRESS'), getEnv('APP_URL_LOCALHOST')],
  credentials: true
};
app.use(cors(options));

app.use(cookieParser());

app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());

import { router as usersRouter } from '../src/domains/users/controllers/index';
import { router as moviesRouter } from '../src/domains/movies/controllers/index';
import { router as ratingsRouter } from '../src/domains/ratings/controllers/index';

app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/ratings', ratingsRouter);

app.use(errorHandler);