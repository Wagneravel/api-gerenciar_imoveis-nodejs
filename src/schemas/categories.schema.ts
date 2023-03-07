import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().max(50),
  description: z.string().nullable(),
});

export const returnCategorySchema = createCategorySchema.extend({
  id: z.number(),
});

export const categorySchema = z.object({
    name: z.string().min(3).max(50),
  });