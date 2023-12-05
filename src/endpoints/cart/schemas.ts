import { gql } from "apollo-server-express";

export const cartTypes = gql`
  type ProductCart {
    productId: String!
    quantity: Int!
    description: String!
    price: Int!
  }

  type Cart {
    products: [ProductCart]!
    userId: String
  }

  input ProductInput {
    productId: String!
    quantity: Int!
    description: String!
    price: Int!
  }

  input AddToCartInput {
    userId: String!
    products: [ProductInput]!
  }

  input UpdateQuantityInput {
    userId: String!
    productId: String!
    quantity: Int!
  }

  input DeleteProductInput {
    userId: String!
    productId: String!
  }
`;

export const cartQuery = `#graphql
    cart(id: ID!): Cart!
    carts: [Cart]!
`;

export const cartMutation = `#graphql
    addToCart(input: AddToCartInput): Cart
    updateQuantity(input: UpdateQuantityInput): Cart
    deleteCart(id: ID!): Cart
    deleteProduct(input: DeleteProductInput): String
`;
