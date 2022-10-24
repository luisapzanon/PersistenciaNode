import  express  from "express"; // parte 1 - importa express
import routes from "./routes"; // parte 1 - importa rotas
import 'reflect-metadata'; // parte 1 - importa reflect metadata
import './database/connect.ts' // parte 1 - importa o arquivo de conexão com o banco de dados

const app = express(); // parte 1 - define o app para rodar como express

app.use(express.json()) // parte 1 - faz o app utilizar do express.json para poder ler e manipular json
app.use(routes) // parte 1 - faz o app utilizar as rotas

app.use((req, res, next) => { // parte 1 - faz o app utilizar cors (utilizado para comparilhar arquivos entre diferentes origens (MECANISMO))
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, XRequested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    next();
});

app.listen(3000, () => console.log('Server started at http://localhost:3000')); // parte 1 - app roda na porta 3000 e manda para o log
