import { TOKEN_KEY } from "./constants";

export const setToken = (token: string): void =>
  localStorage.setItem(TOKEN_KEY, token);

export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY);

export const deleteToken = (): void => localStorage.removeItem(TOKEN_KEY);
