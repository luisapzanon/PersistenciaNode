import { app, setup } from "../../index"
import { afterAll, describe, expect, test } from "@jest/globals";
import supertest from "supertest";
import { getConnection} from "typeorm"
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
//PARTE 11

//Só pode ser utilizado com banco de dados vazio

describe("persistence test", () => {

    afterAll(async () => {
        await getConnection().close()
    });

    beforeAll(async () => {
        await setup()
    });

    it(`/jogador/list, /jogador/delete, /endereco/store e /jogador/store
        `, 
        async () => {
            var agent = supertest(app);


            //lista todos os jogadores
            const jogadorList = await agent.post('/jogador/list');

            //Espera que o resultado do list seja 200 que significa ok
            expect(jogadorList.statusCode).toEqual(200);
            
            if(jogadorList.body.length > 0){ // se a length do resultado for maior que 0
                for (var jogador of jogadorList.body){ // faz um loop no resultado dos jogadores
                    //Define uma constant que armazena o jogador.nickname da forma que ele vai ser inserido na rota de delete
                    const nicknameJogador = {"nickname" : jogador.nickname}
                    //chama a rota que deleta jogador
                    const deleteJogador = await agent.post('/jogador/delete').send(nicknameJogador);
                    
                    console.log("Removeu o jogador: " + jogador.nickname);
                    
                    //espera que o resultado da exclusao seja 204
                    expect(deleteJogador.statusCode).toEqual(204);
                }       
            } else {
                //variavel que armazena a forma como o endereço devera ser colocado na requisicao de inserção
                const enderecoStore = {
                    "id": 99,
                    "cep": 99052333,
                    "complemento": "casa"
                }
                //chama a rota que armazena endereco
                const storeEndereco = await agent.post('/endereco/store').send(enderecoStore);

                //espera que o resultado da inserção seja igual a 200
                expect(storeEndereco.statusCode).toEqual(200);

                console.log('Inseriu o endereço com id: ' + enderecoStore.id);

                
    
                //variavel que armazena a forma como o jogador devera ser colocado na requisicao de inserção
                const jogadorStore ={
                    "nickname": "LuisaPasqualin",
                    "senha": "123456",
                    "pontos": 200,
                    "data_cadastro": "2022-10-29",
                    "data_ultimo_login": "2022-10-29",
                    "endereco":{
                        "id": 99,
                        "cep": 99052333,
                        "complemento": "casa"
                    }
                }
                //chama a rota que armazena jogador
                const storeJogador = await agent.post('/jogador/store').send(jogadorStore);

                //espera que o resultado da inserção seja igual a 200
                expect(storeJogador.statusCode).toEqual(200);
                console.log('Inseriu o jogador: ' + jogadorStore.nickname);
            }
        }
    );

    it('/patente/list, /patente/delete, /patente/store, /jogador/update', 
        async() => {
            var agent = supertest(app);

            //lista todas as patentes
            const patenteList = await agent.post('/patente/list');
            //Espera que o resultado do list seja 200 que significa ok
            expect(patenteList.statusCode).toEqual(200);
            if(patenteList.body.length > 0){ // se a length do resultado for maior que 0
                
                for (var patente of patenteList.body){ // faz um loop no resultado das patentes
                    //Define uma constant que armazena o id.patente da forma que ele vai ser inserido na rota de delete
                    const idPatente = {"id" : patente.id}
                    //chama a rota que deleta jogador
                    const deletePatente = await agent.post('/patente/delete').send(idPatente);
                    
                    console.log("Removeu a patente: " + patente.nome);
                    
                    //espera que o resultado da exclusao seja 204
                    expect(deletePatente.statusCode).toEqual(204);
                }   
            } else {
                //variavel que armazena a forma como a patente devera ser colocado na requisicao de inserção
                const patenteStore ={
                    "id": 10,
                    "cor": "brown",
                    "nome": "bronze"
                }


                //chama a rota que armazena patente
                const storePatente = await agent.post('/patente/store').send(patenteStore);

                //espera que o resultado da inserção seja igual a 200
                expect(storePatente.statusCode).toEqual(200);

                console.log('Inseriu a patente: ' + patenteStore.nome);

                //variavel que armazena a forma como a patente devera ser colocado na requisicao de update
                const jogadorUpdate ={
                    "nickname": "LuisaPasqualin",
                    "senha": "123456",
                    "pontos": 200,
                    "data_cadastro": "2022-10-29",
                    "data_ultimo_login": "2022-10-29",
                    "endereco":{
                        "id": 99,
                        "cep": 99052333,
                        "complemento": "casa"
                    },
                    "patentes": [{"id": 10}]
                }
                //chama a rota que atualiza jogador
                const updateJogador = await agent.post('/jogador/update').send(jogadorUpdate)
                
                //espera que o resultado da atualizacao seja igual a 200                
                expect(updateJogador.statusCode).toEqual(200);
                console.log('Atualizou o jogador: '+ jogadorUpdate.nickname+ ' com a patente ' + patenteStore.nome);
            }
        }
    )
});

