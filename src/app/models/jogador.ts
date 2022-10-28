import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany} from 'typeorm';
import Endereco from './endereco' // import a classe Endereco
import Patente from './patente'; // parte 7 importar o model de patente
import Compra from './compra'; // parte 7 importar o model de compra
import Artefato from './artefato';

//parte 2 -  classe para representar a tabela tb_jogador através dos models

//parte 5 - modificar classe jogador

@Entity('tb_jogador')
class Jogador {

    @PrimaryColumn('text')
    nickname: string;

    @Column('text')
    senha: string;

    @Column('int')
    pontos: number;

    @Column('date')
    data_cadastro: Date;

    @Column('date')
    data_ultimo_login: Date;

    @ManyToOne(type => Endereco)
    @JoinColumn({name: "endereco_id", referencedColumnName: "id"})
    endereco: Endereco;

    //parte 7
    //agregacao
    @ManyToMany(() => Patente)
    @JoinTable({name : "tb_jogador_patente", joinColumn: {name:
    "jogador_nickname", referencedColumnName: "nickname"}, inverseJoinColumn: {name:
    "patente_id", referencedColumnName: "id"}})
    patentes: Patente[];
    //agregacao por composicao
    @OneToMany(() => Compra, compra => compra.jogador)
    compras: Compra[];
    @ManyToMany(() => Artefato)
    @JoinTable({name : "tb_jogador_artefato", joinColumn: {name:
    "jogador_nickname", referencedColumnName: "nickname"}, inverseJoinColumn: {name:
    "artefato_id", referencedColumnName: "id"}})
    artefatos: Artefato[];
}
export default Jogador;