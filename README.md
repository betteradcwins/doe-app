# Aplicação desenvolvida durante a maratonaDev da [Rockseat](https://rocketseat.com.br/)

Aplicação tem diferenças da desenvolvida pela rockseat, como o banco de dados e a forma de manipulação da DOM.
A aplicação consiste de um formulário para cadastro de doares de sangue e uma listagem dos últimos cadastrados.

![Screenshot](https://i.imgur.com/lJZhR2e.png?1)

## Para executar a aplicação

git clone https://github.com/betteradcwins/doe-app.git

cd doe-app/server

*É necessário configurar as várias de ambiente*

yarn install

yarn dev 

### TODO

* [x] Setup Server
    * [x] Install Dependencies
    * [x] Setup Express App
    * [x] Setup Not Found and Error Middlewares
* [x] Model DB
  * What data will be store?
* [x] Setup Mongoose Model(s)
* [x] POST /
    * Create a new donator
* [x] GET /donors
    * List all donators
* [x] Setup Client
* [x] Create Form to add a new donator
* [x] List the lastest donators