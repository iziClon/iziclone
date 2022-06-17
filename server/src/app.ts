import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import cookieParser from 'cookie-parser';

import { config } from './configs';
import { apiRouter } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(apiRouter);

app.listen(config.PORT, async () => {
    console.log(`Server has started on Port: ${config.PORT}`);
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('DATABASE Connect');
        }
    } catch (err) {
        if (err) {
            console.log(err);
        }
    }
});
