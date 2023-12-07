import express from "express";
import usersRoute from "../endpoints/users/routes";
import bannersRoute from "../endpoints/banners/routes"

const route = express.Router();

route.use("/users", usersRoute);
// route.use("/cart", cartRoute);
// route.use("/products", productsRouter);
// route.use("/categories", categoriesRoute)
// route.use("/orders", ordersRoute)
route.use("/banners", bannersRoute)

export default route;  
