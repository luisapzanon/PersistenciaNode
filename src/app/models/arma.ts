import {Entity, Column, PrimaryColumn, ManyToMany, JoinTable,
ChildEntity} from 'typeorm';
import Artefato from './artefato';
import Municao from './municao';
import { Tipo } from './tipo';
//parte 9
@ChildEntity()
export default class Arma extends Artefato{
    @Column()
    comprimento_cano: number;
    @Column({
    type: "enum",
    enum: Tipo,
    })
    tipo: Tipo;
    //agregacao
    @ManyToMany(() => Municao)
    @JoinTable({name : "tb_arma_municao", joinColumn: {name: "arma_id",
    referencedColumnName: "id"}, inverseJoinColumn: {name: "municao_id",
    referencedColumnName: "id"}})
    municoes: Municao[];
}