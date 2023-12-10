import { Category } from "../../interfaces/category";
import categoriesService from "./services";

export const categoryResolvers = {
  Query: {
    getCategories: async () => {
      console.log("hey");
      
      const categories = await categoriesService.getAllCategories();
      if (!categories) {
        return "no categories found!";
      }     
      return categories;
    },
  },
  Mutation: {
    createCategory: async (_: any, { category }: { category: Category }) => {
      if (!category) throw new Error ("no category found!")
      const createdCategory = await categoriesService.createCategory(category);
      if (!createdCategory) throw new Error("problem while trying to create category!");
      console.log(createdCategory);
      return createdCategory;
    },

    createCategories: async (_: any, { categories }: { categories: Category[] }) => {
      console.log(categories);
      
      if (!categories) throw new Error ("no categories found!")
      const createdCategories = await categoriesService.createCategories2(categories);
      if (!createdCategories) throw new Error("problem while trying to create categories!");
      console.log(createdCategories);
      return createdCategories;
    },

    setClick: async (_: any, { id }: { id: string }) => {
      if (!id) throw new Error ("no category found!")
      const changedCategory = await categoriesService.setClick(id);
      if (!changedCategory) throw new Error("problem while trying to set the click!");
      console.log(changedCategory);
      return changedCategory;
    },
  },
};
