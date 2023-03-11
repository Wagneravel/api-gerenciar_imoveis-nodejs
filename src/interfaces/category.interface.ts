import { z } from "zod";
import { createCategorySchema, getAllCategoriesSchema, getRealEstateByCategory, returnCategorySchema } from "../schemas/categories.schema";

export type iCategoryRequest = z.infer<typeof createCategorySchema>
export type iCategoryResponse = z.infer<typeof returnCategorySchema>
export type iCategoriesReturn = z.infer<typeof getAllCategoriesSchema>
export type iRealEstateByCategoryReturn = z.infer<typeof getRealEstateByCategory>