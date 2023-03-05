const { GraphQLScalarType } = require('graphql')

const userResolvers = {
  RoleType: {
    STUDENT: 'STUDENT',
    TEACHER: 'TEACHER',
    COORDINATOR: 'COORDINATOR',
  },
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'datetime string in ISO-8601 format',
    serialize: value => value.toISOString(),
    parseValue: value => new Date(value),
    parseLiteral: ast => new Date(ast.value)
  }),
  CustomResponse: {
    __resolveType: (obj, context, info) => false
  },
  Query: {
    users: (root, args, { dataSources }, info) => dataSources.userApi.list(),
    user: (root, { id }, { dataSources }) => dataSources.userApi.getById(id)
  },
  Mutation: {
    addUser: async (root, { user }, { dataSources }) => dataSources.userApi.add(user),
    changeUser: async (root, { id, user }, { dataSources }) => dataSources.userApi.change(id, user),
    removeUser: async (root, { id }, { dataSources }) => dataSources.userApi.remove(id)
  }
}

module.exports = userResolvers
