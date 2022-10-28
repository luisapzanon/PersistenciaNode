import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
//parte 9
export class CreateJogadorArtefatoTable1666921139844 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_jogador_artefato',
            columns: [
            {
            name: 'jogador_nickname',
            type: 'varchar(10)',
            isPrimary: true,
            isNullable: false
            },
            {
            name: 'artefato_id',
            type: 'int',
            isPrimary: true,
            isNullable: false
            }
            ]
           }));
           await queryRunner.createForeignKey(
            'tb_jogador_artefato',
            new TableForeignKey({
            name: 'fk_jogador_artefato_j',
            columnNames: ['jogador_nickname'],
            referencedTableName: 'tb_jogador',
            referencedColumnNames: ['nickname']
            })
           );
           await queryRunner.createForeignKey(
            'tb_jogador_artefato',
            new TableForeignKey({
            name: 'fk_jogador_artefato_a',
            columnNames: ['artefato_id'],
            referencedTableName: 'tb_artefato',
            referencedColumnNames: ['id']
            })
           );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tb_jogador_artefato', "fk_jogador_artefato_j");
        await queryRunner.dropForeignKey('tb_jogador_artefato', "fk_jogador_artefato_a");
        await queryRunner.dropTable('tb_jogador_artefato'); 
    }

}
