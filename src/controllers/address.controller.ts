import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address } from "../entities";

export async function createAddressController(req: Request, res: Response): Promise<void> {
  const { street, zipCode, number, city, state } = req.body;

  const addressRepository : Repository<Address> = AppDataSource.getRepository(Address) 

  const address = new Address();
  address.street = street;
  address.zipCode = zipCode;
  address.number = number;
  address.city = city;
  address.state = state;

  await addressRepository.save(address);

  res.status(201).json(address);
}