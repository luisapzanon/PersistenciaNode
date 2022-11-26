import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/jogador'; // importa o model do jogador
import Endereco from '../models/endereco'; // parte 6 - importa model endereco
import Patente from '../models/patente';
// parte 2 - criar o controller JogadorController
class JogadorController {
    //parte 6 delete
    async delete(req: Request, res: Response){

        const repository = getRepository(Jogador);
        const {nickname, endereco} = req.body;
        const nicknameExists = await repository.findOne({where :{nickname}});
        if(nicknameExists){
            //modificacao necessaria para remover o jogador do banco, somente ele estava acusando erro: Cannot remove, given value must be an entity, instead "nome" is given.
            await repository.remove(req.body);
            return res.sendStatus(204);
        }else{
            res.sendStatus(404);
        }
         }

    async store(req: Request, res: Response){

        const repository = getRepository(Jogador);
        //parte 2 - foi necessário mudar os dados requisitados pelo body pois estava dando erro ao realizar o post
        const {nickname, senha, pontos, data_cadastro, data_ultimo_login, endereco, patentes} = req.body; // final - update para adicionar patentes e endereco
        const nicknameExists = await repository.findOne({where : {nickname}});
        if(nicknameExists){
            return res.sendStatus(409);
        }
        const j = repository.create({nickname, senha, pontos, data_cadastro, data_ultimo_login,endereco, patentes});//cria a entidade Jogador // final - update para adicionar patentes e endereco
        
        await repository.save(j); //persiste a entidade na tabela.
        return res.json(j);
        }
    //parte 6 - update
    async update(req: Request, res: Response){

        const repository = getRepository(Jogador);
        const {nickname, endereco, patentes} = req.body; // adicionado patentes
        const nicknameExists = await repository.findOne({where :{nickname}});

        let patenteExists = null //final - define o verificador de patente existente
        for(var patente of patentes){
            patenteExists = await getRepository(Patente).findOne({where : {"id" : patente.id}}); // final - faz um loop nas patentes enviadas e caso alguma nao exista, a variavel se define como true e deixa de executar o update
            if(!patenteExists){
                break
            }
        }
        const enderecoExists = await getRepository(Endereco).findOne({where : {"id" : endereco.id}});

        
        if(!endereco || !patentes || !nicknameExists || !enderecoExists || !patenteExists){ // final - se nao for enformado patente ou endereco, e se algum dos dados inseridos nao existirem, o sistema nao deixa salvar no banco de dados
            return res.sendStatus(404);
        }
        const j = repository.create(req.body); //cria a entidade Jogador
        await repository.save(j); //persiste a entidade na tabela.
        return res.json(j);
    }
    //parte 11

    async list(req: Request, res: Response){
        const repository = getRepository(Jogador);
        //realiza um innerjoin para recuperar os dados do endereco decada jogador.
        //realiza um left joint para trazer os dados da tabela associativa (tb_jogador_patente)
        const lista = await
        repository.createQueryBuilder('tb_jogador').innerJoinAndSelect("tb_jogador.endereco",
        "endereco").leftJoinAndSelect("tb_jogador.patentes", "patente").getMany();
        return res.json(lista);
         }
}
export default new JogadorController();