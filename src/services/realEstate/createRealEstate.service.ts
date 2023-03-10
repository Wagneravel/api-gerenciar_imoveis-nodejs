// import { Repository } from "typeorm";
// import { AppDataSource } from "../../data-source";
// import { Address, Category, RealEstate } from "../../entities";


// export async function createRealEstateService(data: CreateRealEstateData): Promise<RealEstate> {

//     const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)  
//     const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)  
//     const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)  


//   // Verificar se já existe um imóvel com o mesmo endereço
//   const existingAddress = await addressRepository.findOne({ where: data.address });
//   if (existingAddress) {
//     throw new Error('Endereço já cadastrado.');
//   }

//   // Buscar a categoria pelo ID
//   const category = await categoryRepository.findOne(data.categoryId);
//   if (!category) {
//     throw new Error('Categoria não encontrada.');
//   }

//   // Criar uma nova instância de Endereço e salvar no banco
//   const address = addressRepository.create(data.address);
//   await addressRepository.save(address);

//   // Criar uma nova instância de Imóvel
//   const realEstate = realEstateRepository.create({
//     value: data.value,
//     size: data.size,
//     address,
//     category,
//   });

//   // Salvar no banco de dados
//   await realEstateRepository.save(realEstate);

//   return realEstate;
// }
