export const API_BASE_URL = "https://rickandmortyapi.com/api";
export const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;

export const HOME = getApiUrl("/character");