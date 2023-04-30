# Ecommerce API

Essa é uma API desenvolvida para um ecommerce fictício. Ela permite a criação, edição, listagem e exclusão de produtos, além de permitir o cadastro e autenticação de usuários.

## Feito com:

![Node.js](https://img.shields.io/badge/-Node.js-43853d?logo=Node.js&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white&style=flat-square)
![npm](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white&style=flat-square)

A API foi desenvolvida utilizando Node.js, TypeScript e npm.

## Instalação

Para instalar as dependências do projeto, basta executar o seguinte comando na raiz do projeto:

```
npm install
```

## Executando a API

Para executar a API em modo de desenvolvimento, basta executar o seguinte comando na raiz do projeto:

```
npm run dev || yarn dev
```

Isso iniciará a API na porta 3000.

## Endpoints

- `GET /products`: lista todos os produtos cadastrados
- `GET /products/:id`: retorna o produto com o ID especificado
- `POST /products`: cria um novo produto
- `PUT /products/:id`: atualiza o produto com o ID especificado
- `DELETE /products/:id`: exclui o produto com o ID especificado

## Autor

Esse projeto foi desenvolvido por Matheus Reis.
