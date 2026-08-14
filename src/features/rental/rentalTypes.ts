export enum RentalStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  RETURN_REQUESTED = "RETURN_REQUESTED",
  COMPLETED = "COMPLETED",
}

export interface RentalUser {
  _id: string;
  fullName: string;
  picture?: string;
}

export interface RentalTool {
  _id: string;
  name: string;
  pricePerDay: number;
  image: string;
}

export interface Rental {
  _id: string;
  renter: RentalUser;
  owner: RentalUser;
  tool: RentalTool;
  rentalStatus: RentalStatus;
  totalPrice: number;
  startDate: string;
  endDate: string;
  rentalDays?: number;
}

export type RentToolParams = {
  toolId: string;
  startDate: string;
  endDate: string;
};
