import type { State } from "../../../types/State";

export type UserReviewParams = {
  review: string;
  to: string;
};

export type UpdateUserReviewParams = { userId: string; review: string };

export interface UserReviewResponse {
  _id: string;
  review: string;
  to: string;
  from: Author;
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  _id: string;
  fullName: string;
  picture: string;
  createdAt: string;
}

export interface UserReviewState extends State {
  reviews: UserReviewResponse[];
  review: UserReviewResponse | null;
}
