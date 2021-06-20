import { useContext } from "react";
import { Button, CheckPicker, Drawer } from "rsuite";
import { FilterContext } from "./context/shop/shopFilterContext";
import { categories } from "./helpers/categories";

export const ShopFilter = () => {

    const { visible, hide } = useContext(FilterContext);

    return (
        <Drawer show={visible.show} onHide={hide} size="xs" >
            <Drawer.Header>
                <Drawer.Title>Фильтры</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
                <div className="paragraph">
                    <div>Категории</div>
                    <CheckPicker placeholder="Выберите категорию" data={categories} />
                </div>
                <div className="paragraph">
                    <div>Цена</div>

                </div>
            </Drawer.Body>
            <Drawer.Footer>
                {/* <div>Тест</div> */}
                <Button onClick={hide} color="blue">Сохранить</Button>
                <Button onClick={hide} color="red">Отмена</Button>
            </Drawer.Footer>
        </Drawer>
    );
}