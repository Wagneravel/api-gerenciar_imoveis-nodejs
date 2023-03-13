import { z } from "zod";
import { createScheduleSchema, returnListScheduleSchema, scheduleReturnSchema } from "../schemas/schedules.schema";



export type iScheduleRequest = z.infer<typeof createScheduleSchema>
export type iScheduleReturn = z.infer<typeof scheduleReturnSchema>
export type iListAllSchedules = z.infer<typeof returnListScheduleSchema>