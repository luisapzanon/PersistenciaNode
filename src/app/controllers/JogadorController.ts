import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/jogador'; // importa o model do jogador
// parte 2 - criar o controller JogadorController
class JogadorController {
    async store(req: Request, res: Response){

        const repository = getRepository(Jogador);
        //parte 2 - foi necessário mudar os dados requisitados pelo body pois estava dando erro ao realizar o post
        const {nickname, senha, pontos, data_cadastro, data_ultimo_login} = req.body;
        const nicknameExists = await repository.findOne({where : {nickname}});
        if(nicknameExists){
            return res.sendStatus(409);
        }
        const j = repository.create({nickname, senha, pontos, data_cadastro, data_ultimo_login}); //cria a entidade Jogador
        await repository.save(j); //persiste a entidade na tabela.
        return res.json(j);
        }
}
export default new JogadorController();