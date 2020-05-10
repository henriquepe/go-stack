import express from 'express';
import './database';
import 'reflect-metadata';

const app = express();

app.use(express.json());

app.listen(3340, () => {
  console.log('server starte on port 3340');
});
