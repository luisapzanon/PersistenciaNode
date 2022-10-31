//parte 6 - criacao do controller de endereco
import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/jogador';
import Endereco from '../models/endereco';

class EnderecoController {

    async list(req: Request, res: Response){
        const repository = getRepository(Endereco);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response){
        const repository = getRepository(Endereco);
        const j = repository.create(req.body); //cria a entidade Endereco
        await repository.save(j); //persiste a entidade na tabela.
        return res.json(j);
    }

    //PARTE 11
    async delete(req: Request, res: Response){
        try{
            const repository = getRepository(Endereco);
            const {id} = req.body;
        
            const end = await repository.findOne({where : {"id" : id }});
        
            if(end){
        
            await repository.remove(end);
        
            return res.sendStatus(204);
        
            }else{
        
                return res.sendStatus(404);
            }
        }catch(e:unknown){
            console.log(e);
            return res.sendStatus(500);
        }

        }
        async find(req: Request, res: Response){
            const repository = getRepository(Endereco);
            const {cep} = req.body;
            const end = await repository.findOne({where : {cep}});
        if(end){
            return res.json(end);
        }else{
            return res.sendStatus(404);
        }
    } 
}

export default new EnderecoController();