import { useContext } from "react";
import { Button } from "rsuite";
import { FilterContext } from "./context/shop/shopFilterContext";

export const ShopFilterButton = () => {

    const { show } = useContext(FilterContext);

    const style = {
        background: "#f0f0f0",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
    }

    return (
        <div style={style}>
            <Button color="red" onClick={show}>Фильтры</Button>
        </div>
    )
}