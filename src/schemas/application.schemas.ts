import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().max(50),
  description: z.string().nullable(),
});

export const returnCategorySchema = createCategorySchema.extend({
  id: z.number(),
});


export const listRealEstatesByCategorySchema = z.object({
    categoryId: z.number(),
});
  

export const createRealEstateSchema = z.object({
    name: z.string(),
    description: z.string().nullable(),
    type: z.string().nullable(),
    price: z.number().int(),
    categoryId: z.number(),
});

export const returnRealEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
});

export const createScheduleSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    date: z.string(),
    realEstateId: z.number(),
});

export const returnScheduleSchema = createScheduleSchema.extend({
    id: z.number(),
});

export const listSchedulesByRealEstateSchema = z.object({
    realEstateId: z.number(),
});

