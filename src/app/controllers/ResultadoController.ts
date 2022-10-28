import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Resultado from '../models/resultado';
//parte 10
class ResultadoController {
    async list(req: Request, res: Response){
        const repository = getRepository(Resultado);
        const lista = await repository.find();
        console.log(lista);
        return res.json(lista);
    }
    /*
   Exemplo de mensagem para criar um registro::
   {
   "id" : {"round" : {"id" : 1}, "objetivo" : {"id" : 1}},
   "status" : "SIM"
   }
   
    */
   
    async store(req: Request, res: Response){
   
        const repository = getRepository(Resultado);
        const j = repository.create(req.body); //cria a entidade Endereco
        console.log(j);
        await repository.save(j); //persiste a entidade na tabela.
        return res.json(j);
    }
}
export default new ResultadoController();