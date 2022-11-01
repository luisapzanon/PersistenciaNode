import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import Local from '../models/Local'
@Entity('tb_mapa')
export default class Mapa {//codigo fonte referente ao pdf da parte 7.

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nome: string;

    @ManyToMany(() => Local)
    @JoinTable({name : "tb_mapa_local", joinColumn: {name:"mapa_id", referencedColumnName: "id"}, inverseJoinColumn: {name:"local_id", referencedColumnName: "id"}})
    locais: Local[];
}