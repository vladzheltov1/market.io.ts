import { useState } from "react";
import { Pagination } from "rsuite";

export const ShopBottomNav = () => {

    const [activePage, setActivePage] = useState(1);

    const handleSelect = value => setActivePage(value);

    const style = {
        marginTop: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }

    return (
        <div style={style}>
            <Pagination
                prev
                last
                next
                first
                size="sm"
                pages={10}
                ellipsis
                boundaryLinks
                activePage={activePage}
                onSelect={handleSelect}
            />
        </div>
    )
}