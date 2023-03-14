import { number, z } from "zod";
import { createAddressSchema, returnAddressSchema } from "./address.schema";
import { returnCategorySchema } from "./categories.schema";

export const listRealEstatesByCategorySchema = z.object({
  categoryId: z.number(),
});

export const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  size: z.number().positive(),
  value: z.string().or(z.number().positive()),
});


export const createRealEstateSchema = realEstateSchema.omit({id:true}).extend({
  address: createAddressSchema,
  categoryId: z.number(),
});


export const realEstateReturnSchema = realEstateSchema.extend({
  address: returnAddressSchema,
  category: returnCategorySchema
})

export const getListRealEstateSchema = z.array(realEstateReturnSchema) 



