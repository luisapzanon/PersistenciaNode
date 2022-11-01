import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, RepositoryNotFoundError, JoinColumn} from 'typeorm';
import Jogador from '../models/jogador';
import Artefato from './artefato';
import Compra from './compra'

@Entity('tb_itens_compra')
class ItemCompra {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column({type: "varchar", nullable: true, precision: 2 })
    quantidade: number;

    @Column({type: "varchar", nullable: true, precision: 2 })
    valor: number;

    @ManyToOne(type => Compra)
    @JoinColumn({name: "compra_id", referencedColumnName: "id"})
    compra: Compra; 

    @ManyToOne(type => Artefato)
    @JoinColumn({name: "artefato_id", referencedColumnName: "id"})
    artefato: Artefato; 
}
export default ItemCompra;