import {Entity, PrimaryColumn, Column} from 'typeorm';
//parte 2 -  classe para representar a tabela tb_jogador através dos decorators
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
}
export default Jogador;