import { useState } from "react";

export const useHttp = () => {
    const [fetching, setFetching] = useState(false);
    const [message, setMessage] = useState(null);

    const clearMessage = () => setMessage(null);

    const request = async (url, method = "GET", body = null, headers = { "Content-Type": "application/json" }) => {

        if (fetching) return;

        setFetching(true);

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (data.message && data.status !== 200) setMessage(data.message);

        setFetching(false);

        return data;
    }

    return { fetching, message, request, clearMessage };
}