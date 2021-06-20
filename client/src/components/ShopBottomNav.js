import { useState } from "react";
import { Pagination } from "rsuite";

export const ShopBottomNav = () => {

    const [activePage, setActivePage] = useState(1);

    const handleSelect = value => setActivePage(value);


    const style = {
        margin: "50px 0",
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
                last
                ellipsis
                boundaryLinks
                activePage={activePage}
                onSelect={handleSelect}
            />
        </div>
    )
}