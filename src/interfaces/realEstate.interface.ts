import { z } from "zod";
import { createRealEstateSchema, getListRealEstateSchema, realEstateReturnSchema } from "../schemas/real_estates.schemas";



export type iRealEstateRequest = z.infer<typeof createRealEstateSchema>
export type iRealEstateReturn = z.infer<typeof realEstateReturnSchema>
export type iGetRealEstateReturn = z.infer<typeof getListRealEstateSchema>