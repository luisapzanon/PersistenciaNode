import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/jogador';
import jwt from 'jsonwebtoken';

//parte 3 - criar auth controller
class AuthController {
    async authenticate(req: Request, res: Response){

        const repository = getRepository(Jogador);
        const {nickname, senha} = req.body;
        const jogadorExists = await repository.findOne({where :
        {nickname}});
        if(!jogadorExists){
            return res.sendStatus(401);
        }
        if(jogadorExists.senha == senha){
            const token = jwt.sign({id: jogadorExists.nickname},
            'minha_chave_secreta', { expiresIn: '1d'});
        
            jogadorExists.senha = '';
            return res.json({jogadorExists, token});
        } else {
            return res.sendStatus(401);
        }
    }
}
export default new AuthController();