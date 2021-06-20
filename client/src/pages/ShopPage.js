import { Container, Content, Footer } from "rsuite";
import { ShopFilterState } from "../components/context/shop/ShopFilterState";
import { ShopBottomNav } from "../components/ShopBottomNav";
import { ShopFilter } from "../components/ShopFilter";
import { ShopFilterButton } from "../components/ShopFilterButton";
import { ShopProduct } from "../components/ShopProduct";

export const ShopPage = () => {
    return (
        <ShopFilterState>
            <div className="wrapper shop-page-wrapper">
                <Container>
                    <Container>
                        <ShopFilterButton />
                        <Content><ShopProduct /></Content>
                        <Footer><ShopBottomNav /></Footer>
                    </Container>
                    <ShopFilter />
                </Container>
            </div>
        </ShopFilterState>
    );
}