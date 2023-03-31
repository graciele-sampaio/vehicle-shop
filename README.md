<div align="center">
  <img alt="image-vehicle-shop" src="https://i.imgur.com/4zp7WW3.png"/>
</div>
<h1 align="center">Vehicle Shop</h1>

<p align="center">
Utilizei alguns princípios de Programação Orientada a Objetos (POO) para construir uma API com CRUD(create, read, update e delete). O objetivo deste projeto foi gerenciar uma concessionária de veículos. Usei a Arquitetura de Software MSC(Model, Service, Controller), bem como testes de unidade para a camada service.</p>


## Tecnologias utilizadas
[<img src="https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white" alt="chai" title="chai" height="25" />](https://www.chaijs.com/api/bdd/)
&nbsp;
[<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" title="Docker" height="25" />](https://docs.docker.com/get-started/overview/)
&nbsp;
[<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" title="Express" height="25" />](https://devdocs.io/express/)
&nbsp;
[<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" title="MongoDB" height="25" />](https://www.mongodb.com/docs/)
&nbsp;
[<img src="https://img.shields.io/badge/mongoose-%23F05033.svg?style=for-the-badge&logo=mongoose&logoColor=407399&color=1c1c1c" alt="Mongoose" title="Mongoose" height="25" />](https://mongoosejs.com/docs/guide.html)
&nbsp;
[<img src="https://img.shields.io/badge/sinon.js-323330?style=for-the-badge&logo=sinon" alt="sinon" title="sinon" height="25" />](https://sinonjs.org/releases/latest/)
&nbsp;
[<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" title="typescript" height="25" />](https://www.typescriptlang.org/docs/)
&nbsp;


## Rodando com Docker

Clone o repositório 
```bash
   git@github.com:graciele-sampaio/vehicle-shop.git
```

Entre na pasta criada:
```bash
   cd vehicle-shop
```

Instale as dependências
```bash
   npm install
```

Rodando os serviços do node e mongodb no Docker.
```bash
   docker-compose up -d --build 
```

Para executar o terminal do node no container:
```bash
   docker exec -it car_shop bash
```

Para executar a aplicação com o tsnode, uilize o comando dentro do terminal do containernode:
```bash
   npm run dev
```

Para executar o terminal do banco de dados(mongodb) no container:
```bash
  docker exec -it car_shop_db bash
```

## Rodando localmente 
- Para rodar dessa forma, obrigatoriamente você deve ter instalado em seu computador a versão 16 do node.

Clone o repositório 
```bash
   git@github.com:graciele-sampaio/vehicle-shop.git
```

Entre na pasta criada:
```bash
   cd vehicle-shop
```

Instale as dependências
```bash
   npm install
```

## Documentação da API

#### Cadastra um carro
```http
   POST /cars
```

- Formato do corpo da requisição:
```http
{
  "model": "HB20",
  "year": 2015,
  "color": "Black",
  "status": true,
  "buyValue": 47.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```
##

#### Cadastra uma moto
```http
   POST /motorcycles
```

- Formato do corpo da requisição:
```http
{
  "model": "Yamaha lander 250",
  "year": 2015,
  "color": "red",
  "status": true,
  "buyValue": 23.990,
  "category": "Street",
  "engineCapacity": 250
}
```
##

#### Retorna um array com todos os carros
```http
   GET /cars
```

#### Retorna um array com todas as motos
```http
  GET /motorcycles
```
##

#### Retorna um carro a partir do id passado como parâmetro

```http
   GET /cars/:id
```

#### Retorna uma moto a partir do id passado como parâmetro

```http
   GET /motorcycles/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID da moto ou carro que você quer |

##

#### Atualiza dados do carro a partir do id passado como parâmetro
```http
   PUT /cars/:id
```
#### Atualiza dados da moto a partir do id passado como parâmetro
```http
   PUT /motorcycles/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID da moto ou carro que você quer |

##

#### Deleta o carro a partir do id passado como parâmetro
```http
   DELETE /cars/:id
```

#### Deleta a moto a partir do id passado como parâmetro
```http
   DELETE /motorcycles/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**.  O ID da moto ou carro que você quer | |

##
## Tabela resumo

|  Método | Rota  |Parâmetro   |Tipo   | Descrição  |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| POST  |/cars   | formato json disponível no tópico: "Documentação da API"  | consultar exemplo do corpo da requisição | Cadastra um carro por meio das informações passadas no corpo da requisição  |
| POST  |/motorcycles  | formato json disponível no tópico: "Documentação da API"   | consultar exemplo do corpo de requisição  | Cadastra uma moto por meio das informações passadas no corpo da requisição   |
| GET   | /cars  | - - -  | - - -   | Retorna um array com todos os carros cadastrados   |
| GET   | /motorcycles  | - - -  | - - -   | Retorna um array com todas as motos cadastradas   |
| GET   |/cars/:id   | id  | string   | Busca carro a partir do id passado como parâmetro |
| GET   |/motorcycles/:id   | id  | string   | Busca moto a partir do id passado como parâmetro |
| PUT   | /cars/:id  | id  | string   | Atualiza os dados de um carro a partir do id passado como parâmetro  |
| PUT   | /motorcycles/:id  | id  | string   | Atualiza os dados de uma moto a partir do id passado como parâmetro  |
| DELETE |/cars/:id    |id   | string   | Deleta um carro a partir do id passado como parâmetro   |
| DELETE |/motor/:id    |id   | string   | Deleta uma moto a partir do id passado como parâmetro   |
