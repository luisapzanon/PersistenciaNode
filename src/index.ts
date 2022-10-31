import 'reflect-metadata';
import express, { application } from 'express';
import { setup } from "./database/connect"
import routes from './routes';
//parte 11

const app = express();
app.use(express.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    next();
});
app.use(routes);
export {app, setup};