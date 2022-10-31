import {createConnection} from 'typeorm';
export async function setup() {
//parte 11
 //console.log(__dirname);
    await createConnection().then(() => console.log('Connectou no Banco de dados!!'))
}
