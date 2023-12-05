import express from 'express';
import cors from "cors"
import morgan from "morgan"
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import http from 'http';
import { connectToDatabase } from './utils/mongoose';
import { typeDefs } from './graphql/queries';
import { resolvers } from './endpoints/cart/controllers';

const app = express();
const httpServer = http.createServer(app);
app.use(express.json());
app.use(cors({}))
app.use(morgan('dev'))

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  formatError: (formattedError, error) => {
    if (
      formattedError.extensions?.code ===
      ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
    ) {
      return {
        ...formattedError,
        message: "Your query doesn't match the schema. Try double-checking it!",
      };
    }
    return formattedError;
  },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })], 
});

server.start().then(() => {
  app.use(
    '/',
    express.json(), 
    cors({}),
    morgan('dev'),
    expressMiddleware(server)
  )
})

httpServer.listen({ port: 4500 }, async() => {
  await connectToDatabase()
  console.log(`🚀 Server ready at http://localhost:4500/graphql`);
});


 