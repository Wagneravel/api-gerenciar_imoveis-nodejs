import { hashSync } from 'bcryptjs';
import * as z from 'zod';

export const userReqSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(120).transform(password=>{
    return hashSync(password, 10)
    }),
  admin: z.boolean().default(false),
});

export const returnUserSchema = userReqSchema.extend({
  id: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  deletedAt: z.date().nullable().optional()
})

export const userResponseSchema = returnUserSchema
    .omit({
    password: true
})

export const returnMultipleUsersSchema = userResponseSchema.array()


export const userUpdateSchema = userReqSchema.pick({name:true, email:true, password:true}).partial()




// export const userSchema = z.object({
//   name: z.string().min(1).max(50),
//   email: z.string().email(),
//   password: z.string().min(8),
//   admin: z.boolean().optional(),
//   createdAt: z.date().optional(),
//   updatedAt: z.date().optional(),
//   deletedAt: z.date().nullable().optional(),
//   realEstates: z.array(z.object({
//     id: z.string(),
//     name: z.string(),
//     description: z.string(),
//     area: z.number().int(),
//     rooms: z.number().int(),
//     available: z.boolean(),
//     categoryId: z.string().optional(),
//     userId: z.string().optional(),
//     createdAt: z.date().optional(),
//     updatedAt: z.date().optional(),
//     deletedAt: z.date().nullable().optional(),
//     schedules: z.array(z.object({
//       id: z.string(),
//       date: z.date(),
//       userId: z.string(),
//       realEstateId: z.string(),
//       createdAt: z.date().optional(),
//       updatedAt: z.date().optional(),
//       deletedAt: z.date().nullable().optional(),
//     })).optional(),
//   })).optional(),
// });

// export const lisUsersSchema = z.array(userSchema)

















