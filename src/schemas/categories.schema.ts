import { z } from "zod";
import { realEstateSchema } from "./real_estates.schemas";

export const createCategorySchema = z.object({
  name: z.string().max(50),
});

export const returnCategorySchema = createCategorySchema.extend({
  id: z.number(),
});

export const categorySchema = z.object({
    name: z.string().min(3).max(50),
  });

export const getAllCategoriesSchema = z.array(returnCategorySchema)  

export const getRealEstateByCategory = returnCategorySchema.extend({
  realEstates: z.array(realEstateSchema)
})