import {ManyToOne, JoinColumn, Column} from "typeorm";
import Round from './round';
import Objetivo from './objetivo';
//parte 10
export class ResultadoID {
 //associação.
    @ManyToOne(type => Round, {primary : true})
    @JoinColumn({name: "round_id", referencedColumnName: "id"})
    round: Round;
    //associação.
    @ManyToOne(type => Objetivo, {primary : true})
    @JoinColumn({name: "objetivo_id", referencedColumnName: "id"})
    objetivo: Objetivo;
}