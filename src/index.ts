import express from "express";
import cors from "cors";
import morgan from "morgan";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServerErrorCode } from "@apollo/server/errors";
import http from "http";
import { connectToDatabase } from "./utils/mongoose";
import { typeDefs } from "./graphql/queries";
import { resolvers } from "./graphql/queries";

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

server.start().then(() => {
  app.use(
    "/",
    express.json(),
    cors({}),
    morgan("dev"),
    expressMiddleware(server)
  );
});

httpServer.listen({ port: 4500 }, async () => {
  await connectToDatabase();
  console.log(`🚀 Server ready at http://localhost:4500/graphql`);
});
