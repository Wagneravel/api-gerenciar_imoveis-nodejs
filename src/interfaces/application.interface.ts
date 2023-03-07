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

export interface CategoryDto {
  id: number;
  name: string;
}

export interface RealEstateDto {
  id: number;
  title: string;
  description: string;
  rooms: number;
  bathrooms: number;
  price: number;
  sold?: boolean;
  category: CategoryDto;
  createdAt: Date;
  updatedAt: Date;
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

export interface ScheduleDto {
  id: number;
  date: Date;
  realEstate: RealEstateDto;
}

export interface CreateScheduleDto {
  date: Date;
  realEstateId: number;
}

// Interface para a categoria
export interface Category {
  id: number;
  name: string;
}

// Interface para o imóvel
export interface RealEstate {
  id: number;
  title: string;
  description: string;
  rooms: number;
  bathrooms: number;
  price: number;
  sold: boolean;
  category: Category;
}

// Interface para o agendamento
export interface Schedule {
  id: number;
  date: Date;
  realEstate: RealEstate;
}

// Interface para a resposta do token de autenticação
export interface AuthResponse {
  token: string;
}

// Interface para a resposta da criação de usuário
export interface CreateUserResponse {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
