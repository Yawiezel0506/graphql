import getAllPopular from "./service";


export const populerResolvers = {
  Query: {
    getAllPopulars: async () => {

        const populars = await getAllPopular()
        if (typeof populars === "string") {
          throw new Error("populars not found");
        }
        
        return populars
    }
  } 
  }
