import express from "express";
import cors from "cors";
import morgan from "morgan";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import { connectToDatabase } from "./utils/mongoose";
import { typeDefs } from "./graphql/queries";
import { resolvers } from "./graphql/queries";
import dotenv from "dotenv"
import { client } from "./utils/redisConnect";


const app = express();
const httpServer = http.createServer(app);


dotenv.config()

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

const PORT = process.env.PORT || 4500

httpServer.listen({ port: PORT }, async () => {
  await connectToDatabase();
  await client.connect()
  console.log(`🚀 Server ready at http://localhost:4500/graphql`);
  console.log(`🚀 Redis is connected!!`);
});
