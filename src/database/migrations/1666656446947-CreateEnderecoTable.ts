import {MigrationInterface, QueryRunner, Table} from "typeorm";

//parte 5 - criacao da migration da tabela endereço
export class CreateEnderecoTable1666656446947 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_endereco',
            columns: [
            {
            name: 'id',
            type: 'serial',
            isPrimary: true
            },
            {
            name: 'cep',
            type: 'varchar(8)',
            isNullable: false
            },
            {
            name: 'complemento',
            type: 'varchar(100)',
            isNullable: true
            }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_endereco');
    }

}
