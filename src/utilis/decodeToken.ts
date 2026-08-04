import { jwtDecode } from "jwt-decode";
import { getToken } from "./tokenService";

export interface JWTPayload {
  id: string;
  fullName: string;
}
export const decodeJwtToken = () => {
  const token = getToken();
  const decoded = jwtDecode<JWTPayload>(token!);
  return decoded;
};
