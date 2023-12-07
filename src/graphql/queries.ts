import { gql } from "apollo-server-express";
import { cartMutation, cartQuery, cartTypes } from "../endpoints/cart/schemas";
import { categoryMutation, categoryQuery, categoryTypes } from "../endpoints/categories/schemas";
import { cartResolvers } from "../endpoints/cart/resolvers";
import { categoryResolvers } from "../endpoints/categories/resolvers";
import { productsTypes, productsQuery, productsMutation } from '../endpoints/products/schemas';
import { productResolvers } from '../endpoints/products/resolvers';
import { usersQuery, usersMutation, usersType } from "../endpoints/users/schemas";
import { UsersResolvers } from "../endpoints/users/resolvers";


export const typeDefs = gql`

  ${cartTypes}
  ${productsTypes}
  ${categoryTypes}
  ${usersType}
  
  type Query {
    ${cartQuery}
    ${productsQuery}
    ${categoryQuery}
    ${usersQuery}
  }

  type Mutation {
    ${cartMutation}
    ${productsMutation}
    ${categoryMutation}
    ${usersMutation}
  }
`;

export const resolvers = {
  Query: {
    ...cartResolvers.Query,
    ...productResolvers.Query,
    ...categoryResolvers.Query,
    ...UsersResolvers.Query
  },
  Mutation: {
    ...cartResolvers.Mutation,
    ...productResolvers.Mutation,
    ...categoryResolvers.Mutation,
    ...UsersResolvers.Mutation
  },
};
