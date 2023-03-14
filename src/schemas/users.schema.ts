import { hashSync } from 'bcryptjs';
import * as z from 'zod';

export const userReqSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  admin: z.boolean().default(false),
});

export const returnUserSchema = userReqSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable()
})

export const userResponseSchema = returnUserSchema
    .omit({
    password: true
})

export const returnMultipleUsersSchema = userResponseSchema.array()

export const userUpdateSchema = userReqSchema.pick({name:true, email:true, password:true}).partial()

