import {Entity, Column, PrimaryColumn} from 'typeorm';
@Entity('tb_patente')
// parte 7 criar model de patente
class Patente {

    @PrimaryColumn('int')
    id: number;

    @Column('text')
    nome: string;

    @Column('text')
    cor: string;

}
export default Patente;