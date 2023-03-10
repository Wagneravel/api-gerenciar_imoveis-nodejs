// import { Request } from 'express';
// import { Repository } from 'typeorm';
// import { AppDataSource } from '../../data-source';
// import { Address } from '../../entities';
// import { AppError } from '../../errors';

// interface CreateAddressDTO {
//   street: string;
//   zipCode: string;
//   number?: string;
//   city: string;
//   state: string;
// }

// export async function createAddressService(req: Request): Promise<Address> {
//   const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);
//   const { street, zipCode, number, city, state } = req.body as CreateAddressDTO;

//   const address = addressRepository.create({
//     street,
//     zipCode,
//     number,
//     city,
//     state,
//   });

//   try {
//     await addressRepository.save(address);
//   } catch (error) {
//     throw new AppError('Error creating address', 500);
//   }

//   return address;
// }