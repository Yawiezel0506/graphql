import { gql } from "apollo-server-express";
import { cartMutation, cartQuery, cartTypes } from "../endpoints/cart/schemas";
import {
  categoryMutation,
  categoryQuery,
  categoryTypes,
} from "../endpoints/categories/schemas";

import { cartResolvers } from "../endpoints/cart/resolvers";
import { categoryResolvers } from "../endpoints/categories/resolvers";

export const typeDefs = gql`

  ${cartTypes}
  ${categoryTypes}
  
  type Query {
    ${cartQuery}
    ${categoryQuery}
  }

  type Mutation {
    ${cartMutation}
    ${categoryMutation}
  }
`;

export const resolvers = {
  Query: {
    ...cartResolvers.Query,
    ...categoryResolvers.Query,
  },
  Mutation: {
    ...cartResolvers.Mutation,
    ...categoryResolvers.Mutation
  },
};
