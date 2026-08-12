import type { State } from "../../types/State";

export enum ToolStatus {
  AVAILABLE = "AVAILABLE",
  RENTED = "RENTED",
}
export interface Owner {
  _id: string;
  fullName: string;
  city: string;
  picture?: string;
  createdAt: string;
}
export interface Tool {
  _id: string;
  name: string;
  description: string;
  category: string;
  pricePerDay: number;
  depositAmount: number;
  image: string;
  city?: string; // could be null for now i'll change it to be required later on.
  toolStatus: ToolStatus;
  owner: Owner;
}

export interface ToolState extends State {
  tools: Tool[];
  selectedTool: Tool | null;
  ownerTools: Tool[];
  cities: string[];
}
