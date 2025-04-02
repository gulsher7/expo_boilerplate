import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";
import { secureStorage } from "./secureStorage";

// Define API response interface
interface ApiResponse<T = any> {
    status: boolean;
    data: T;
    message?: string;
    error?: string;
}

// Define API error interface
interface ApiError {
    error: string | Error;
    message: string;
    status?: number;
    [key: string]: any;
}

// Create an Axios instance
const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const token = await secureStorage.getItem("AUTH_TOKEN");
        if (token && config.headers) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

function isObject(variable: unknown): variable is Record<string, unknown> {
    return variable !== null && typeof variable === "object";
}

export async function apiReq<T = any>(
    endPoint: string,
    data: Record<string, any>,
    method: 'get' | 'post' | 'put' | 'delete',
    headers: Record<string, string> = {},
    requestOptions: Partial<AxiosRequestConfig> = {}
): Promise<ApiResponse<T>> {
    return new Promise(async (res, rej) => {
        try {
            const config: AxiosRequestConfig = {
                headers,
                ...requestOptions,
            };

            let response: AxiosResponse<ApiResponse<T>>;

            if (method === "get" || method === "delete") {
                response = await axiosInstance[method](endPoint, {
                    ...config,
                    params: data,
                });
            } else {
                response = await axiosInstance[method](endPoint, data, config);
            }

            console.log(response, "api response", endPoint);

            const { data: responseData } = response;
            if (responseData.status === false) {
                return rej(responseData);
            }
            return res(responseData);
        } catch (error) {
            console.log(error, "<===error in utils");
            if ((error as AxiosError)?.response?.status === 401) {
                return rej(error);
            }

            if (
                error instanceof AxiosError &&
                error.response?.data &&
                isObject(error.response.data)
            ) {
                return rej({
                    ...error.response.data,
                    error: error.response.data.error || "Network Error",
                });
            } else {
                const apiError: ApiError = {
                    error: error as Error,
                    message: error instanceof Error ? error.message : "Network Error",
                };
                return rej(apiError);
            }
        }
    });
}

export function apiGet<T = any>(
    endPoint: string,
    data: Record<string, any> = {},
    headers: Record<string, string> = {},
    requestOptions: Partial<AxiosRequestConfig> = {}
): Promise<ApiResponse<T>> {
    return apiReq<T>(endPoint, data, "get", headers, requestOptions);
}

export function apiPost<T = any>(
    endPoint: string,
    data: Record<string, any>,
    headers: Record<string, string> = {},
    requestOptions: Partial<AxiosRequestConfig> = {}
): Promise<ApiResponse<T>> {
    return apiReq<T>(endPoint, data, "post", headers, requestOptions);
}

export function apiPut<T = any>(
    endPoint: string,
    data: Record<string, any>,
    headers: Record<string, string> = {},
    requestOptions: Partial<AxiosRequestConfig> = {}
): Promise<ApiResponse<T>> {
    return apiReq<T>(endPoint, data, "put", headers, requestOptions);
}

export function apiDelete<T = any>(
    endPoint: string,
    data: Record<string, any> = {},
    headers: Record<string, string> = {},
    requestOptions: Partial<AxiosRequestConfig> = {}
): Promise<ApiResponse<T>> {
    return apiReq<T>(endPoint, data, "delete", headers, requestOptions);
}
