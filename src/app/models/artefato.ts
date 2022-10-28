import {Entity, Column, PrimaryColumn, TableInheritance} from 'typeorm';
@Entity('tb_artefato')

//parte 9
@TableInheritance({ column: { type: "varchar", name: "type" } })
export default abstract class Artefato {

    @PrimaryColumn('int')
    id: number;

    @Column('text')
    nome: string;
    @Column()
    peso: number;

    @Column()
    valor: number;

}