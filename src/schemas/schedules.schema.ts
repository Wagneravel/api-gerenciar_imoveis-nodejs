import { z } from "zod";
import { realEstateReturnSchema } from "./real_estates.schemas";
import { returnUserSchema } from "./users.schema";

export const scheduleSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
});

export const createScheduleSchema = scheduleSchema.omit({id:true}).extend({
  realEstateId: z.number(),
});

export const scheduleReturnSchema = scheduleSchema.extend({
  user: returnUserSchema,
  realEstate: realEstateReturnSchema
})



export const returnListScheduleSchema = z.array(scheduleReturnSchema);

