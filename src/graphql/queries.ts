import { gql } from 'apollo-server-express';
import { cartMutation, cartQuery, cartTypes } from '../endpoints/cart/schemas';
import { cartResolvers } from '../endpoints/cart/resolvers';
import { productsTypes, productsQuery, productsMutation } from '../endpoints/products/schemas';
import { productResolvers } from '../endpoints/products/resolvers';

export const typeDefs = gql`

  ${cartTypes}
  ${productsTypes}
  
  type Query {
    ${cartQuery}
    ${productsQuery}
  }

  type Mutation {
    ${cartMutation}
    ${productsMutation}
  }
`;

export const resolvers = {
  Query: {
    ...cartResolvers.Query,
    ...productResolvers.Query,
  },
  Mutation: {
    ...cartResolvers.Mutation,
    ...productResolvers.Mutation
  }
}

