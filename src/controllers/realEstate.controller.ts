import { Request, Response } from "express";
import { AppError } from "../errors";
import { listAllRealEstates } from "../services/realEstate/getRealEstate.service";
import { createRealEstateService } from "../services/realEstate/createRealEstate.service";
import { iRealEstateRequest, iRealEstateReturn } from "../interfaces/realEstate.interface";

export async function createRealEstateController(req: Request, res: Response): Promise<Response> {
  const realEstateData: iRealEstateRequest = req.body

  const newRealEstate: iRealEstateReturn = await createRealEstateService(realEstateData)
  
  return res.status(201).json(newRealEstate)
}

 

export async function getAllRealEstatesController(req: Request, res: Response) {
  
    const realEstates = await listAllRealEstates();
    
    res.status(200).json(realEstates);
}

