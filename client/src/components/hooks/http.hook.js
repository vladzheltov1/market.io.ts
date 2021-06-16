import { useCallback, useState } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        error: null,
        errorDetail: null
    });

    const request = useCallback(async (url, method = "GET", body = null, headers = { "Content-Type": "application/json" }) => {
        /**
         * Avoiding the case, when a new request is sent
         * before the response to the previous one comes.
        */
        if (!loading) {
            try {
                setLoading(true);

                const response = await fetch(url, { method, body, headers });
                const data = await response.json();

                if (!response.ok || data.error) {
                    if (data.errorDetail) {
                        setErrors({ ...errors, errorDetail: data.errorDetail });
                    }
                    setErrors({ ...errors, error: data.error });
                    setLoading(false);

                    return;
                }

                setLoading(false);
                return data;

            } catch (e) {
                console.error(e);
            }
        }
    }, [loading, errors, setErrors]);

    const clearError = useCallback(() => {
        setErrors({
            error: null,
            errorDetail: null
        });
    }, [setErrors]);

    return { loading, errors, clearError, request };
}