import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateArmaMunicaoTable1666921202648 implements MigrationInterface {
//parte 9

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_arma_municao',
            columns: [
            {
            name: 'arma_id',
            type: 'int',
            isPrimary: true,
            isNullable: false
            },
            {
            name: 'municao_id',
            type: 'int',
            isPrimary: true,
            isNullable: false
            }
            ]
           }));
           await queryRunner.createForeignKey(
            'tb_arma_municao',
            new TableForeignKey({
            name: 'fk_arma_municao_a',
            columnNames: ['arma_id'],
            referencedTableName: 'tb_artefato',
            referencedColumnNames: ['id']
            })
           );
           await queryRunner.createForeignKey(
            'tb_arma_municao',
            new TableForeignKey({
            name: 'fk_tb_arma_municao_m',
            columnNames: ['municao_id'],
            referencedTableName: 'tb_artefato',
            referencedColumnNames: ['id']
            })
           );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tb_arma_municao', "fk_arma_municao_a");
        await queryRunner.dropForeignKey('tb_arma_municao',
        "fk_tb_arma_municao_m");
        await queryRunner.dropTable('tb_arma_municao'); 
    }

}
