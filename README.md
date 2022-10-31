# persistenciaNode
Trabalho sobre persistencia em banco de dados utilizando API com NodeJS + Typescript
# Iniciar
Npm install
<br><br> ---Modificar conexao do banco no arquivo ormconfig.json<br>
"username": nome do usuario banco de dados, provavelmente sera postgres,<br>
"password": senha do banco de dados,<br>
"database": nome do banco de dados criado
<br><br> ---Rodar migrations
    <br>npm run typeorm migration:run
<br><br>---Rodar Testes (somente com banco de dados vazio)
    <br>npm run test
<br><br>---Rodar servidor
    <br>npm run dev
<br><br>---Testes no insomnia, importar consultas pelo arquivo na pasta importInsomnia e rodar testes