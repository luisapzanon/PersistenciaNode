//parte 10
import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn} from
'typeorm';
@Entity('tb_objetivo')
export default class Objetivo {
    @PrimaryColumn('int')
    id: number;
    @Column("varchar", { length: 200 })
    descricao: string;
    @Column()
    pontos: number;
}