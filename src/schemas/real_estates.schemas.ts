import { z } from "zod";

export const listRealEstatesByCategorySchema = z.object({
  categoryId: z.number(),
});

export const returnRealEstateSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  type: z.string().nullable(),
  price: z.number().int(),
  categoryId: z.number(),
});


export const createRealEstateSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  type: z.string().nullable(),
  price: z.number().int(),
  categoryId: z.number(),
});

export const returnCreateRealEstateSchema = createRealEstateSchema.extend({
  id: z.number(),
});

export const realEstateSchema = z.object({
    title: z.string().min(5).max(100),
    description: z.string().min(10).max(500),
    rooms: z.number().int().positive(),
    bathrooms: z.number().int().positive(),
    price: z.number().int().positive(),
    sold: z.boolean().optional(),
    categoryId: z.number().int(),
  });