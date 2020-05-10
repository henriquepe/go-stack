import express, { response } from 'express';
import { helloWorld } from './routes';

const app = express();

app.get('/', helloWorld);

app.listen(3333, (request, response) => {
  console.log('server started on port 3333')
} )

