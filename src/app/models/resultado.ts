import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn}
from "typeorm";
import {ResultadoID} from "./resultadoID";
import {Status} from './status';
import Round from './round';
import Objetivo from './objetivo';
//parte 10
@Entity('tb_resultado')
export default class Resultado {

 //https://typeorm.io/#/embedded-entities
    @Column(() => ResultadoID)
    id: ResultadoID;
    @Column({
    type: "enum",
    enum: Status,
    })
    status: Status;
}