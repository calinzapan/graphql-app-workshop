
const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: req => ({
      ...req,
      db: new Prisma({
        typeDefs: 'src/generated/prisma.graphql',
        // endpoint: endpoint of the Prisma DB service
        secret: 'mysecret123',
        debug: true,
      }),
    }),
  })
  
  
  server.start(() => console.log('Server is running on http://localhost:4000'))