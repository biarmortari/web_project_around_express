# EUA Afora Express 🌎

## Descrição do Projeto

Este projeto é a primeira parte do back-end do "EUA Afora". Trata-se de um servidor Express capaz de responder a solicitações HTTP e retornar dados dos arquivos de texto. O servidor é a base inicial de uma API REST, que futuramente será conectada ao front-end e a um banco de dados.

## Rotas da API

1. GET /users

Retorna a lista completa de usuários.

2. GET /users/:id

Retorna os dados de um usuário específico pelo ID.

3. GET /cards

Retorna a lista de cards.

4. Rota padrão (404)

Quando uma rota inexistente é acessada, uma mensagem de erro.

## Tecnologias Utilizadas

- Node.js
- Express
- Nodemon
- ESLint - Airbnb Style Guide
