type ResponseData = {
    status: number,
    message?: string,
    httpVersion: string | number,
    data?: any    
}

/**
 * Sends response to the client with the given data and some extra data
 */
export const sendResponse = (res, data: ResponseData) => {
    const response = {
        serverName: "Market.io - API server",
        httpVersion: data.httpVersion,
        message: data.message ?? null,
        data: data.data ?? null,
        status: data.status,
    }

    return res.status(response.status).json(response);
}