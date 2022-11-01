import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tb_local')
class Local {//codigo fonte referente ao pdf da parte 7.

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nome: string;

    @Column('text')
    cor: string;

    @Column('text')
    latitude: string;

    @Column('text')
    longitude: string;
}
export default Local;