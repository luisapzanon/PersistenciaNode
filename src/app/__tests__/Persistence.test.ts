import { app, setup } from "../../index"
import { afterAll, describe, expect, test } from "@jest/globals";
import supertest from "supertest";
import { getConnection} from "typeorm"
//PARTE 11

//Só pode ser utilizado com banco de dados vazio

describe("persistence test", () => {

    afterAll(async () => {
        await getConnection().close()
    });

    beforeAll(async () => {
        await setup()
    });

    it('teste /endereco/list e /endereco/delete', async () => {
        var agent = supertest(app);
        
        const postList = await agent.post('/endereco/list');

        expect(postList.statusCode).toEqual(200);
        console.log(postList.statusCode);
        
        
        if (postList.body.length > 0){
        for(const e of postList.body){
           
            const data = { "id" : e.id };
            console.log("Encontrou o endereco: ");
            console.log(data);
            
            const postDelete = await agent.post('/endereco/delete').send(data);
            
            console.log("Removeu o endereco: ");
            console.log(data);
            
            expect(postDelete.statusCode).toEqual(204);
        }
        }else{
            var data = {"id": 99, "cep": "12345678", "complemento": "402"};
            JSON.stringify(data)
            const postCreate = await agent.post('/endereco/store').send(data);
            
            console.log("Cadastrou o endereco: " + JSON.stringify(data));

            console.log(postCreate.statusCode);
            
            expect(postCreate.statusCode).toEqual(200);
        }
    });


    it('teste /jogador/list e /jogador/delete', async () => {
        var agent = supertest(app);
        const ret = await agent.post('/jogador/list');
        expect(ret.statusCode).toEqual(200);

        //esta parte está errada, pois no controller do jogador, o list só funciona retornando o endereço, e no caso do cadastro desse teste, ele não vincula um endereço ao jogador
        if (ret.body.length > 0){
            console.log(`Encontrou ${ret.body.length} jogadores cadastrados.`);
            
            for(const p of ret.body){
            
                const data = { "nickname" : p.nickname };
                console.log(`Removendo o jogador ${data.nickname}.`);
                const postDeleteJogador = await agent.post('/jogador/delete').send(data);
                expect(postDeleteJogador.statusCode).toEqual(204);
                //esse remocao pode gerar alguma violacao de chave, caso o endereco esteja sendo referenciado por outro jogador.
                //ou aplicar a estratégia de cascade no ManytoOne
                if(typeof p.endereco != 'undefined'){

                    console.log(`Removendo o endereco ${p.endereco.id}.`);
                    const postDeleteEndereco = await agent.post('/endereco/delete').send({ "id" : p.endereco.id});
                    expect(postDeleteEndereco.statusCode).toEqual(204);
                }
                
            }
        }else{
            console.log("Não encontrou jogadores cadastrados, cadastrando novo jogador e endereco.");
            const postCreateEndereco = await agent.post('/endereco/store').send({"id": 1, "cep": "12345678", "complemento": "402"});
            expect(postCreateEndereco.statusCode).toEqual(200);
            const postFindEndereco = await agent.post('/endereco/find').send({"cep": "12345678"});
            expect(postFindEndereco.statusCode).toEqual(200);
            //console.log(postFindEndereco.body);
            const data = {"nickname": "t@g1.com",
                          "senha": "11111",
                          "pontos": 10,
                          "data_cadastro": "2022-10-29",
                          "data_ultimo_login": "2022-10-29",
                          "endereco_id": postFindEndereco.body.id
                        };
                        console.log(data);
                        
                    
            const postCreateJogador = await agent.post('/jogador/store').send(data);
            expect(postCreateJogador.statusCode).toEqual(200);
        }
        });

});

