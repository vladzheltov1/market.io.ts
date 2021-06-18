import { useCallback, useState } from "react";

export const useAdmin = () => {
    const [sidebar, setSidebar] = useState(true);

    // const toggle = () => {
    //     setSidebar(!sidebar);
    // }

    const toggle = useCallback(() => {
        setSidebar(!sidebar);
    }, [sidebar, setSidebar]);

    return { sidebar, toggle };
}