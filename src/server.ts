import 'reflect-metadata';
import express from 'express';

import './database';
import { router } from './routes';

const app = express();
const host = 'localhost';
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, host, () => console.log(`Server on: http://${host}:${port}`))
