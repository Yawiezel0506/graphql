import { gql } from 'apollo-server-express';


export const typeDefs = gql`
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
  
  type Query {
    cart(id: ID!): Cart!
    carts: [Cart]!
  }

  type Mutation {
    addToCart(input: AddToCartInput): Cart 
    updateQuantity(input: UpdateQuantityInput): Cart  
    deleteCart(id: ID!): Cart 
    deleteProduct(input: DeleteProductInput): String
  }
`;

