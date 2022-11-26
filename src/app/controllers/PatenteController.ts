import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Patente from '../models/patente';

//parte 8 criar controller de patente
class PatenteController {

    async delete(req: Request, res: Response){

        //final - foi criado o delete da patente para realizar a implementação de testes
        const repository = getRepository(Patente);
        const {id} = req.body;
        const patenteExists = await repository.findOne({where :{id}});
        
        if(patenteExists){
            await repository.remove(req.body);
            return res.sendStatus(204);
        }else{
            res.sendStatus(404);
        }
    }

    async list(req: Request, res: Response){
        const repository = getRepository(Patente);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response){
        const repository = getRepository(Patente);
        const j = repository.create(req.body); //cria a entidade Endereco
        await repository.save(j); // persiste a entidade na tabela.
        return res.json(j);
    }
    // final - update patente
    async update(req: Request, res: Response){

        const repository = getRepository(Patente);
        const {id, nome, cor} = req.body;
        const idExists = await repository.findOne({where :{id}});
        console.log(idExists);
        
        if(!idExists){
            return res.sendStatus(404);
        }
        const j = repository.create(req.body); // final - cria a entidade patente
        await repository.save(j); //final - persiste a entidade na tabela.
        return res.json(j);
    }
}
export default new PatenteController();