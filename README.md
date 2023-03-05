# API GraphQL +  Node + ApollServer

## Descrição
Esse projeto foi desenvolvido no curso de GraphQL - construindo uma API com Apollo Server, oferecido pela Alura Cursos Online.

No curso, foi construída uma API com GraphQL que busca os dados de uma outra API REST.
Os dados são disponilizado sobre o protocolo HTTP.

## Requisitos
- node v14
- npm  v9

## Iniciando a aplicação
Após clonar o objeto, entre no terminal e vá até a raiz do projeto.

Execute este comando para baixar as dependências do projeto.
```shell
$ npm install
```

Para iniciar a API REST, execute esse comando:
```shell
$ npm run json-server:start
```
A API REST estará recebendo requisições na porta 3000.
```shell
$ curl --request GET \
     --url http://localhost:3000
```

Para iniciar a API GraphQL, execute esse comando:
```shell
$ npm start
```
A API GraphQL estará escutando na porta 4000.
```shell
$ curl --request POST \
  --header 'content-type: application/json' \
  --url http://localhost:4000/ \
  --data '{"query":"query { __typename }"}'
```

## Links
- Curso GraphQL: https://cursos.alura.com.br/course/graphql-construindo-api-apollo-server
- Documentação oficial GraphQL: https://graphql.org/learn/
- Documentação oficial ApolloServer: https://www.apollographql.com/docs/