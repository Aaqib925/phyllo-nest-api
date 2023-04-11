
import { handleFetchError } from "./error-handler.helper";


interface IFetchUtil {
    url: string;
    method?: string;
    body?: any;
    token?: string;
    image?: boolean;
    abortSignal?: any;
}

export const fetchUtil = async (data: IFetchUtil) => {
    const {
        url,
        method = "GET",
        body = null,
        token = null,
        image = false,
        abortSignal = null
    } = data;
    let headers = {};

    if (!image) {
        headers = { "Content-Type": "application/json" };
    }

    if (token) {
        headers = { ...headers, Authorization: token };
    }

    return fetch(`${url}`, {
        method,
        headers,
        body,
        ...(abortSignal && { signal: abortSignal })
    }).then(handleFetchError);
};
