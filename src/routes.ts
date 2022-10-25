import { Router } from 'express'; // parte 1 - importa o Router do pacote express
import JogadorController from './app/controllers/JogadorController'; // parte 2 - importa o controller do jogador

import AuthController from './app/controllers/AuthController'; // parte 3 - importa o controller de autenticação

import EnderecoController from './app/controllers/EnderecoController';



const router = Router(); // parte 1 - instancia o router na const router

//parte 6 - alteração nas rotas
router.post('/jogador/store', JogadorController.store);
router.post('/jogador/update', JogadorController.update);
router.post('/jogador/delete', JogadorController.delete);
router.post('/jogador/list', JogadorController.list);
router.post('/auth', AuthController.authenticate);
router.post('/endereco/store', EnderecoController.store);
router.post('/endereco/list', EnderecoController.list);

export default router; // parte 1 - exporta o router