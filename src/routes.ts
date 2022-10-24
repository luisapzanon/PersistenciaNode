import { Router } from 'express'; // parte 1 - importa o Router do pacote express
import JogadorController from './app/controllers/JogadorController'; // parte 2 - importa o controller do jogador

import AuthController from './app/controllers/AuthController'; // parte 3 - importa o controller de autenticação


const router = Router(); // parte 1 - instancia o router na const router

router.post('/jogadores', JogadorController.store); //parte 2 - chamada do post do controller pela rota /jogadores

router.post('/auth', AuthController.authenticate); // parte 3 - chamada do post do controller para autenticação de login

export default router; // parte 1 - exporta o router