

export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
  }
  
  export interface LoginDto {
    email: string;
    password: string;
  }
  
  export interface CreateCategoryDto {
    name: string;
  }
  
  export interface CreateRealEstateDto {
    title: string;
    description: string;
    rooms: number;
    bathrooms: number;
    price: number;
    sold?: boolean;
    categoryId: number;
  }
  
  export interface CreateScheduleDto {
    date: Date;
    realEstateId: number;
  }