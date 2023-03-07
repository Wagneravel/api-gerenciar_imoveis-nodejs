import { z } from "zod";

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
  
export const returnListScheduleSchema = z.object({
id: z.number(),
name: z.string(),
email: z.string().email(),
phone: z.string(),
date: z.string(),
realEstateId: z.number(),
});


export const scheduleSchema = z.object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    realEstateId: z.number().int(),
  });