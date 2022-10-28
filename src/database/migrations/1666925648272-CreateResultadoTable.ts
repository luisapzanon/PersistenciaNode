import {MigrationInterface, QueryRunner, Table, TableForeignKey} from
"typeorm";

export class CreateResultadoTable1666925648272 implements MigrationInterface {
//parte 10

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_resultado',
            columns: [
            {
            name: 'objetivo_id',
            type: 'int',
            isPrimary: true
            },
            {
            name: 'round_id',
            type: 'int',
            isPrimary: true
            },
            {
            name: 'status',
            type: 'text',
            isNullable: false
            },
            ]
        }));
        await queryRunner.createForeignKey(
            'tb_resultado',
            new TableForeignKey({
            name: 'fk_resultado_objetivo',
            columnNames: ['objetivo_id'],
            referencedTableName: 'tb_objetivo',
            referencedColumnNames: ['id']
            })
        );
        await queryRunner.createForeignKey(
            'tb_resultado',
            new TableForeignKey({
            name: 'fk_resultado_round',
            columnNames: ['round_id'],
            referencedTableName: 'tb_round',
            referencedColumnNames: ['id']
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tb_resultado', "fk_resultado_objetivo");
        await queryRunner.dropForeignKey('tb_resultado',
        "fk_resultado_round");
        await queryRunner.dropTable('tb_resultado');
    }

}
