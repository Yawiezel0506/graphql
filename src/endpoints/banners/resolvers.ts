import bannerService from "./service";

export const bannersResolvers = {
  Query: {
    getBanners: async () => {
      try {
        const response = await bannerService.getAllBanners()
        console.log(response);
        
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
  },
};
