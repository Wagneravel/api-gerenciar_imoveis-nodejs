import { Request, Response } from "express";
import { AppError } from "../errors";
import { createRealEstateService } from "../services/realEstate/createRealEstate.service";
import { listAllRealEstates } from "../services/realEstate/getRealEstate.service";

export async function createRealEstateController(req: Request, res: Response): Promise<void> {
    const { value, size, address, categoryId } = req.body;
  
    try {
      const realEstate = await createRealEstateService({ value, size, address, categoryId });
  
      res.status(201).json(realEstate);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

 

export async function getAllRealEstatesController(req: Request, res: Response) {
  try {
    const realEstates = await listAllRealEstates();
    res.status(200).json(realEstates);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving real estates' });
  }
}