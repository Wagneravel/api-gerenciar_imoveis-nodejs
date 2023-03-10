import { z } from "zod";
import { createCategorySchema, returnCategorySchema } from "../schemas/categories.schema";

export type iCategoryRequest = z.infer<typeof createCategorySchema>
export type iCategoryResponse = z.infer<typeof returnCategorySchema>