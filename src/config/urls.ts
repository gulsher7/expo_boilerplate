export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;
export const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;

export const HOME = getApiUrl("/character");