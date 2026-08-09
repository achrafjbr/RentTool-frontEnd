export type UserReviewParams = {
  review: string;
  to: string;
};

export type UpdateUserReviewParams = { userId: string; review: string };

export interface ToolReviewResponse {
  _id: string;
  review: string;
  to: string;
  createdAt: string;
  updatedAt: string;
  from: Author;
}

export interface Author {
  _id: string;
  fullName: string;
  picture: string;
}
