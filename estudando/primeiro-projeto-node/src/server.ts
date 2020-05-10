import express from 'express';
import routes from './routes/index';

const app = express();
app.use(express.json());

// routes se torna um middleware dentro do projeto.
// aqui estamos adicionando todas as rotas do routes dentro do app
app.use(routes);

app.listen(3333, () => {
	console.log('Server started on port 3333');
});

/*



*/
