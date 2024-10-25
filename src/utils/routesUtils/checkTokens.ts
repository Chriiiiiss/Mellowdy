import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../../types/auth';

export const isTokenExpired = (token: string) => {
  try {
    const decoded: JwtPayload = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  } catch (error) {
    return true; // Guess it's expired or not valid :shrug:
  }
};
