import { useState } from "react";
import { Pagination } from "rsuite";
// import { ShopFilter } from "../components/ShopFilter";
import { ShopProduct } from "../components/ShopProduct";

export const ShopPage = () => {

    const [activePage, setActivePage] = useState(1);

    const handleSelect = (value) => {
        setActivePage(value);
    }

    return (
        <div className="wrapper">
            {/* <ShopFilter /> */}

            <div className="shop-products">
                <ShopProduct />
            </div>


            <div style={{ margin: "50px 0", display: "flex", justifyContent: "center" }}>
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
        </div>
    )
}