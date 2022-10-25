import {Entity, Column, PrimaryColumn} from 'typeorm';
//parte 5 - criar model da tabela endereço
@Entity('tb_endereco')
class Endereco {

    @PrimaryColumn('int')
    id: number;

    @Column("varchar", { length: 8 })
    cep: string;
    @Column("varchar", { length: 100 })
    complemento: string;

}
export default Endereco;