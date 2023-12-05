import { gql } from 'apollo-server-express';
import { cartMutation, cartQuery, cartTypes } from '../endpoints/cart/schemas';
import { cartResolvers } from '../endpoints/cart/resolvers';


export const typeDefs = gql`

  ${cartTypes}
  
  type Query {
    ${cartQuery}
  }

  type Mutation {
    ${cartMutation}
  }
`;

export const resolvers = {
  Query: {
    ...cartResolvers.Query
  },
  Mutation: {
    ...cartResolvers.Mutation
  }
}

