import getAllPopular from "./service";


export const populerResolvers = {
  Query: {
    getAllPopulars: async () => {

        const populars = await getAllPopular()
        if (typeof populars === "string") {
          throw new Error("cart of this user not found");
        }
        console.log(populars);
        
        return populars
    }
  } 
  }
