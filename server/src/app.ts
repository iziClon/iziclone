import express from 'express';
import 'reflect-metadata';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5200, () => {
    console.log('Server has started');
});
