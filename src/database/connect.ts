import { createConnection } from 'typeorm'; // parte 1 - importa createConnection do typeorm
/* Object-Relational Mapping (ORM), ~~
em português, mapeamento objeto-relacional,
é uma técnica para aproximar o paradigma de desenvolvimento de aplicações orientadas a objetos ao paradigma do banco de dados relacional.
*/
createConnection().then(() => console.log('Connectou no Banco de dados!!')); /* parte 1 - Conecta no banco de dados utilizando as informaçoes inseridas no
arquivo ormconfig*/