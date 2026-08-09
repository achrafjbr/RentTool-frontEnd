import type { State } from "../../../types/State";

export type ToolReviewParams = {
  review: string;
  tool: string;
};

export type UpdateToolReviewParams = { reviewId: string; review: string };

export interface ToolReviewResponse {
  _id: string;
  review: string;
  tool: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
}

export interface Author {
  _id: string;
  fullName: string;
  picture: string;
  createdAt: string;
}

export interface ToolReviewState extends State {
  reviews: ToolReviewResponse[];
  review: ToolReviewResponse | null;
}
