
export enum UserRole {
  SELLER = "seller",
  BUYER = "buyer",
  ADMIN = "admin"
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Business {
  id: string;
  name: string;
  description: string;
  industry: string;
  location: string;
  employeeCount: number;
  annualRevenue: number;
  foundedYear: number;
  askingPrice: number;
  sellerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  businessId: string;
  read: boolean;
  createdAt: Date;
}

export type FeatureItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export type TestimonialItem = {
  content: string;
  author: string;
  role: string;
  avatarUrl?: string;
};

export type HowItWorksStep = {
  title: string;
  description: string;
  icon: React.ElementType;
};
