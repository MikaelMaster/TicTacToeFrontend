import axios, { AxiosRequestConfig } from "axios";

/**
 * Axios client instance configured with the base URL from the environment variable `BACKEND_URL`.
 * Sets the default headers for all requests to include `Content-Type` as `application/json`
 * and allows cross-origin requests from `https://localhost:3000`.
 */
const client = axios.create({
    baseURL: `${process.env.BACKEND_URL}`,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://localhost:3000"
    }
});

interface AxiosRequestMetadata {
    startTime?: Date;
}

interface CustomAxiosConfig extends AxiosRequestConfig {
    metadata?: AxiosRequestMetadata;
}

/**
 * Interceptor to add a delay to the response of each request if the request duration is less than 250ms.
 * This is necessary so frontend loaders animations are not too fast and do not flicker.
 */
client.interceptors.response.use(response => {
    const config = response.config as CustomAxiosConfig;
    const startTime = config.metadata?.startTime || new Date();
    const endTime = new Date();

    const requestDuration = endTime.getTime() - startTime.getTime();
    const delay = Math.max(250 - requestDuration, 0);

    return new Promise(resolve => {
        setTimeout(() => resolve(response), delay);
    });
}, error => {
    const config = error.config as CustomAxiosConfig;
    const startTime = config.metadata?.startTime || new Date();
    const endTime = new Date();

    const requestDuration = endTime.getTime() - startTime.getTime();
    const delay = Math.max(250 - requestDuration, 0);

    return new Promise((resolve, reject) => {
        setTimeout(() => reject(error), delay);
    });
});

export { client };