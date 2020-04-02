require("dotenv").config();
const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const expiresIn = '1 day'

const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      console.log(info);
      return ctx.db.query.users({}, info);
    }
  },
  Mutation: {
    async createUser(parent, { data }, ctx, info) {
      const password = await bcrypt.hash(data.password, 10);
      const user = await ctx.db.mutation.createUser({
        data: {
          ...data,
          password
        }
      });
      return {
        user: user,
        token: jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, { expiresIn })
      }
    },
    async loginUser(parent, { email, password }, ctx, info) {
      const user = await ctx.db.query.user({ where: { email } });
      if (!user) throw new Error('No User Found');
  
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error('Wrong Password');
  
      const authPayload = {
        user: user,
        token: jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, { expiresIn })
      }
      return authPayload
    },
  }
}
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/calinzapan-bbfab7/database/dev',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})
server.start(() => console.log('Server is running on http://localhost:4000'))