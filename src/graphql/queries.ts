import { gql } from "apollo-server-express";
import { cartMutation, cartQuery, cartTypes } from "../endpoints/cart/schemas";
import { categoryMutation, categoryQuery, categoryTypes } from "../endpoints/categories/schemas";
import { cartResolvers } from "../endpoints/cart/resolvers";
import { categoryResolvers } from "../endpoints/categories/resolvers";
import { productsTypes, productsQuery, productsMutation } from '../endpoints/products/schemas';
import { productResolvers } from '../endpoints/products/resolvers';

export const typeDefs = gql`

  ${cartTypes}
  ${productsTypes}
  ${categoryTypes}
  
  type Query {
    ${cartQuery}
    ${productsQuery}
    ${categoryQuery}
  }

  type Mutation {
    ${cartMutation}
    ${productsMutation}
    ${categoryMutation}
  }
`;

export const resolvers = {
  Query: {
    ...cartResolvers.Query,
    ...productResolvers.Query,,
    ...categoryResolvers.Query,
  },
  Mutation: {
    ...cartResolvers.Mutation,
    ...productResolvers.Mutation,
    ...categoryResolvers.Mutation
  },
};
