import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateRoundTable1666925590361 implements MigrationInterface {
//parte 10

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_round',
            columns: [
            {
            name: 'id',
            type: 'serial',
            isPrimary: true
            },
            {
            name: 'numero',
            type: 'int',
            isNullable: false
            },
            {
            name: 'inicio',
            type: 'timestamp',
            isNullable: true,
            default: 'now()'
            },
            {
            name: 'fim',
            type: 'timestamp',
            isNullable: true,
            },
            {
            name: 'partida_id',
            type: 'int',
            isNullable: false
            },
            {
            name: 'modo',
            type: 'varchar(30)',
            isNullable: true
            }
            ]
            }));
        await queryRunner.createForeignKey(
            'tb_round',
            new TableForeignKey({
            name: 'fk_round_partida',
            columnNames: ['partida_id'],
            referencedTableName: 'tb_partida',
            referencedColumnNames: ['id']
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tb_round',
        "fk_round_partida");
        await queryRunner.dropTable('tb_round');
    }

}
