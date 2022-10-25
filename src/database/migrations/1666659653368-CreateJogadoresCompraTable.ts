import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

//parte 7 criar migration ta tabela tb_compra
export class CreateJogadoresCompraTable1666659653368 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_compra',
            columns: [
            {
            name: 'id',
            type: 'serial',
            isPrimary: true
            },
            {
            name: 'data',
            type: 'timestamp',
            isNullable: true,
            default: 'now()'
            },
            {
            name: 'total',
            type: 'numeric(10,2)',
            isNullable: true,
            default: 0
            },
            {
            name: 'jogador_nickname',
            type: 'varchar(10)',
            isNullable: false
            }
            ]
        }));
        await queryRunner.createForeignKey(
            'tb_compra',
            new TableForeignKey({
            name: 'fk_compra_jogador',
            columnNames: ['jogador_nickname'],
            referencedTableName: 'tb_jogador',
            referencedColumnNames: ['nickname']
            })
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tb_compra', "fk_compra_jogador");
        await queryRunner.dropTable('tb_compra'); 
    }

}
