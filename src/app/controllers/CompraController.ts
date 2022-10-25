import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Compra from '../models/compra';

//parte 8 criar controller de compra
class CompraController {

    async list(req: Request, res: Response){
        const repository = getRepository(Compra);
        const lista = await repository.find();
        return res.json(lista);
    };
    
    async store(req: Request, res: Response){
        const repository = getRepository(Compra);
        const j = repository.create(req.body); //cria a entidade Endereco
        await repository.save(j); //persiste a entidade na tabela.
        return res.json(j);
    }
}
export default new CompraController();