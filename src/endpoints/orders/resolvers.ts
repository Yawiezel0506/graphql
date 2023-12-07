import { SendOrderDetails } from "../../interfaces/orders";
import ordersService from "./services";

export const ordersResolvers = {
  Query: {
    getOrder: async (_: any, { userId }: { userId: string }) => {
      try {
        console.log(userId);
        const response = await ordersService.getUserOrders(userId);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    sendOrder: async (_: any, { order }: { order: SendOrderDetails }) => {
      try {
        if (!order) throw new Error("no order found!");
        console.log(order);
        const createdOrder = await ordersService.createOrder(order);
        if (!createdOrder)
          throw new Error("problem while trying to create order!");
        console.log(createdOrder);
        return createdOrder;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
