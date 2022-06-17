import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5200, async () => {
    console.log('Server has started');
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
