import { Router } from 'express'; // parte 1 - importa o Router do pacote express
import JogadorController from './app/controllers/JogadorController'; // parte 2 - importa o controller do jogador


const router = Router(); // parte 1 - instancia o router na const router

router.post('/jogadores', JogadorController.store); //parte 2 - chamada do post do controller pela rota /jogadores

export default router; // parte 1 - exporta o router