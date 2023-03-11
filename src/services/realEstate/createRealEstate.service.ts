import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iRealEstateRequest, iRealEstateReturn } from "../../interfaces/realEstate.interface";
import { createAddressSchema } from "../../schemas/address.schema";


export async function createRealEstateService(data: iRealEstateRequest): Promise<iRealEstateReturn> {

  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)  
  const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)  
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)  

  const addressData = data.address

  // Verificar se já existe um imóvel com o mesmo endereço
  const existingAddress = await addressRepository.findOneBy({
    ...addressData, 
    number: addressData.number? addressData.number! : null!
  });
  if (existingAddress) {
    throw new AppError('Endereço já cadastrado.');
  }

  const newAddress =  addressRepository.create(addressData)
  await addressRepository.save(newAddress)

  // Buscar a categoria pelo ID
  const category = await categoryRepository.findOneBy({id: data.categoryId});
  if (!category) {
    throw new AppError('Categoria não encontrada.');
  }

  // Criar uma nova instância de Imóvel
  const realEstate = realEstateRepository.create({
    value: data.value,
    size: data.size,
    sold:data.sold,
    address: newAddress,
    category,
  });

  // Salvar no banco de dados
  await realEstateRepository.save(realEstate);

  return realEstate;
}
