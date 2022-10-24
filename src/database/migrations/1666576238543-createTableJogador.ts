import {MigrationInterface, QueryRunner, Table} from "typeorm";

//migration criada pelo typeORM para criar a tabela tb_jogador, para fazer funcionar de acordo com o tutorial foi necessário utilizar o typeorm na versão 0.2.38
export class createTableJogador1666576238543 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_jogador',
            columns: [
            {
             name: 'nickname',
             type: 'varchar(10)',
             isPrimary: true
            },
            {
             name: 'senha',
             type: 'varchar(5)'
            },
            {
             name: 'pontos',
             type: 'int',
             default: 0
            },
            {
             name: 'data_cadastro',
             type: 'date',
             default: 'now()'
            },
            {
             name: 'data_ultimo_login',
             type: 'timestamp'
            }
            ]
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_jogador');
    }

}
