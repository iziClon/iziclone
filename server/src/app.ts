import express from 'express';
import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createConnection } from 'typeorm';

import { apiRouter } from './routes';
import { config } from './configs';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(apiRouter);

// @ts-ignore
global.rootDir = __dirname;

const { PORT } = config;

app.listen(PORT, async () => {
    console.log(`Server has started on Port: ${PORT}`);
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('DATABASE Connect');
            //todo кинути запит в базу і перевірити чи хоч щось є
            //todo run seed
        }
    } catch (err) {
        if (err) {
            console.log(err);
        }
    }
});
