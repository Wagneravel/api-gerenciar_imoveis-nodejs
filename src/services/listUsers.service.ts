// import { Repository } from "typeorm";
// import { AppDataSource } from "../data-source";
// import { User } from "../entities";
// import { AppError } from "../errors";

// interface UserDTO {
//   id: string;
//   name: string;
//   email: string;
//   admin: boolean;
//   created_at: Date | null;
//   updated_at: Date | null;
//   delete_at: Date | null;
// }

// export const getUsersService = async (isAdmin: boolean): Promise<UserDTO[]> => {
//   if (!isAdmin) {
//     throw new AppError('Unauthorized', 401);
//   }

//   const userRepository: Repository<User> = AppDataSource.getRepository(User);
//   const users: User[] = await userRepository.find();

//     return users.map(user => ({
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         admin: user.admin,
//         created_at: user.createdAt,
//         updated_at: user.updatedAt,
//         delete_at: user.deletedAt
//     }))
// }