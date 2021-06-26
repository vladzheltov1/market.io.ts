import { ShopBottomNav } from "../components/ShopBottomNav";
import { ShopProduct } from "../components/ShopProduct";
import { ShopSidebar } from "../components/ShopSidebar";

export const ShopPage = () => {

    const style = {
        wrapper: {
            background: "#fff",
            padding: "40px",
            borderRadius: "30px",
            maxWidth: "1170px",
        },
        // body: {
        //     height: "calc(100vh - 88px)",
        //     position: "relative",
        //     padding: "30px",
        //     background: "linear-gradient(111deg, rgba(241,246,247,1) 0%, rgba(248,237,232,1) 37%, rgba(230,240,248,1) 72%, rgba(224,223,246,1) 100%)"
        // }
    }

    return (
        <div className="wrapper" style={style.wrapper}>
            <div style={{ display: "flex", gap: 40, maxHeight: "100%" }}>
                <ShopSidebar />
                <ShopProduct />
            </div>
            <ShopBottomNav />
        </div>
    );
}