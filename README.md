## Descrição

Sistema de gerenciamento de produtos composta por uma API REST e um consumidor. A API faz a publicação de mensagens de manipulação de produtos numa fila do RabbitMQ, que são processadas pela aplicação consumidora consumidora inscrita na fila para realizar alterações no banco de dados PostgreSQL. O sistema também conta com o uso de Redis para gerenciamento de cache no resgate de produtos, gerenciamento de autorização de acesso usando JWT, criptografia de senha no banco de dados.

## Principais tecnologias

[![My Skills](https://skills.thijs.gg/icons?i=nodejs,ts,docker,postgres,redis,jest,express)]()

- Node.js
- Docker
- RabbitMQ
- PostgreSQL
- Redis
- JWT
- Jest
- Eslint
- Swagger
- Knex
- Express
- Typescript

## Requisitos

- Node.js
- Docker

## Execução

1. Instalar dependências
    ```
    npm install
    ```

2. Iniciar contêiners (RabbitMQ, PostgreSQL e Redis)
    ```
    docker-compose up -d
    ```

3. Iniciar API
    ```
    npm run api-dev
    ```

4. Iniciar consumer
    ```
    npm run consumer-dev
    ```

5. Usar a API  
Acessar a documentação em http://localhost:3333/docs
