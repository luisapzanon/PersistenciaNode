import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Partida from '../models/partida';
class PartidaController {
//parte 10
    async list(req: Request, res: Response){
    const repository = getRepository(Partida);
    const lista = await repository.find();
    return res.json(lista);
    }

    async store(req: Request, res: Response){

    const repository = getRepository(Partida);
    const j = repository.create(req.body); //cria a entidade Endereco
    await repository.save(j); //persiste a entidade na tabela.
    return res.json(j);
    }
}
export default new PartidaController();