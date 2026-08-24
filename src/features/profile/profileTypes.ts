import type { State } from "../../types/State";

export interface UserProfile {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
  picture?: string;
  bio?: string;
  city?: string;
  picturePublicId?: string;
}

export interface UserProfileState extends State {
  profile: UserProfile | null;
}
