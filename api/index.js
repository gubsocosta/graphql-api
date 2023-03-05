const { ApolloServer } = require('apollo-server')

const userSchema = require('./user/schema/user.graphql')
const userResolvers = require('./user/resolvers/user.resolvers')
const UserApi = require('./user/data-source/user.api.data-source')

const typeDefs = [userSchema]

const resolvers = [userResolvers]

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      userApi: new UserApi()
    }
  },
  playground: true,
})

server.listen().then(({ url }) => {
  console.log(`Server listening in ${url} port`)
})
