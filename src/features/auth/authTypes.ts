import type { State } from "../../types/State";

export interface AuthenticationResponse {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  whatssap?: string;
  picture?: string;
  bio?: string;
  city?: string;
}

// export default interface SignUpResponse extends AuthenticationResponse {}
// export interface Me extends AuthenticationResponse {}

export interface SignInResponse {
  user: AuthenticationResponse;
  token: string;
}

export interface SignUpParams {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface AutenticationState extends State {
  user: AuthenticationResponse | null;
  token: string | null;
  isAuthenticated: boolean;
}
