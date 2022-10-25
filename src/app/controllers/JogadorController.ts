import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/jogador'; // importa o model do jogador
import Endereco from '../models/endereco'; // parte 6 - importa model endereco
// parte 2 - criar o controller JogadorController
class JogadorController {
    //parte 6 delete
    async delete(req: Request, res: Response){
        const repository = getRepository(Jogador);
        const {nickname, endereco} = req.body;
        const nicknameExists = await repository.findOne({where :{nickname}});
        if(nicknameExists){
            await repository.remove(nickname);
            return res.sendStatus(204);
        } else{
            return res.sendStatus(404);
        }
        }

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
    //parte 6 - update
    async update(req: Request, res: Response){

        const repository = getRepository(Jogador);
        const {nickname, endereco} = req.body;
        const nicknameExists = await repository.findOne({where :{nickname}});
        const enderecoExists = await getRepository(Endereco).findOne({where : {"id" : endereco.id}});
        
        if(!endereco || !nicknameExists || !enderecoExists){
            return res.sendStatus(404);
        }
        const j = repository.create(req.body); //cria a entidade Jogador
        await repository.save(j); //persiste a entidade na tabela.
        return res.json(j);
    }
    //parte 6 - list
    async list(req: Request, res: Response){
        const repository = getRepository(Jogador);
        const lista = await
        repository.createQueryBuilder('tb_jogador').getMany();
        return res.json(lista);
    }
}
export default new JogadorController();