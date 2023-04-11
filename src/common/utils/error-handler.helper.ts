import statusCodes from "src/constant/statusCodes";

export const handleFetchError = async (res: any) => {
    if (res.status >= statusCodes.BAD_REQUEST && res.status < statusCodes.CONNECTION_TIMED_OUT) {
        const response = await res.clone().json();
        let errRes = {
            ...response,
            message: response?.message,
            status: res?.status
        };
        if (res.status === statusCodes.UNAUTHORIZED) {
            //logout user
        }
        throw errRes;
    }
    return res.json();
};
