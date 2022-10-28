import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Objetivo from '../models/objetivo';
class ObjetivoController {
//parte 10

    async list(req: Request, res: Response){
        const repository = getRepository(Objetivo);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response){

        const repository = getRepository(Objetivo);
        const j = repository.create(req.body); //cria a entidade Endereco
        await repository.save(j); //persiste a entidade na tabela.
        return res.json(j);
    }
}
export default new ObjetivoController();