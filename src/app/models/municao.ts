import {Entity, Column, PrimaryColumn, ChildEntity} from 'typeorm';
import Artefato from './artefato';
import { Calibre } from './calibre';
@ChildEntity()
//parte 9

export default class Municao extends Artefato{
    @Column()
    explosiva: boolean;
    @Column({
    type: "enum",
    enum: Calibre,
    })
    calibre: Calibre;
    }