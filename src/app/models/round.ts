import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany,
JoinTable} from 'typeorm';
//parte 10
import Partida from './partida';
import Objetivo from './objetivo';
import {Modo} from './modo';
@Entity('tb_round')
export default class Round {
    @PrimaryColumn('int')
    id: number;
    @Column()
    numero: number;
    @Column('timestamp')
    inicio: Date;
    @Column('timestamp')
    fim: Date;
    @Column({
type: "enum",
enum: Modo,
    })
    modo: Modo;
    //associação.
    @ManyToOne(type => Partida)
    @JoinColumn({name: "partida_id", referencedColumnName: "id"})
    partida: Partida;
    //agregacao
    @ManyToMany(() => Objetivo)
    @JoinTable({name : "tb_round_objetivo", joinColumn: {name:
    "round_id", referencedColumnName: "id"}, inverseJoinColumn: {name: "objetivo_id",
    referencedColumnName: "id"}})
    objetivos: Objetivo[];
}