# GraphQL API

## Description
This project was developed in the GraphQL course, offered by [Alura Cursos Online](https://cursos.alura.com.br/course/graphql-construindo-api-apollo-server).

In the course, was built an API that fetches datas from a REST API.

## Requirements
- node v14
- npm  v9

## Get started
After cloning the repository, run this command to install all dependencies.
```shell
$ npm install
```

Run this command to start the REST API server:
```shell
$ npm run json-server:start
```

The REST API server listens on port 3000 for connections.
```shell
$ curl --request GET \
     --url http://localhost:3000
```

In other terminal session, run this command to start GraphQL API server:
```shell
$ npm start
```

The API GraphQL server listens on port 4000 for connections.
```shell
$ curl --request POST \
  --header 'content-type: application/json' \
  --url http://localhost:4000/ \
  --data '{"query":"query { __typename }"}'
```

For to access Apollo playground:
```shell
$ curl --request POST \
  --header 'content-type: application/json' \
  --url http://localhost:4000/playground \
  --data '{"query":"query { __typename }"}'
```

## Links
- GraphQL course: [https://cursos.alura.com.br/course/graphql-construindo-api-apollo-server](https://cursos.alura.com.br/course/graphql-construindo-api-apollo-server)
- GraphQL official documentation: [https://graphql.org/learn/](https://graphql.org/learn/)
- ApolloServer official documentation: [https://www.apollographql.com/docs/](https://www.apollographql.com/docs/)