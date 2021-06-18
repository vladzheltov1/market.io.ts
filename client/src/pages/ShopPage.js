import { useState } from "react";
import { CheckPicker, RangeSlider, Rate } from "rsuite";
import { categories } from "../components/helpers/categories";

export const ShopPage = () => {

    const [rate, setRate] = useState(5);

    return (
        <div className="wrapper">
            <div className="shop-filters">
                <CheckPicker placeholder="Выберите категорию" data={categories} style={{ width: "200px", marginBottom: "40px" }} />
                <RangeSlider
                    min={0}
                    max={5000}
                    step={500}
                    defaultValue={[0, 500]}
                    graduated
                    progress
                    renderMark={(mark) => {
                        return mark;
                    }}
                />

                <Rate onChange={(value) => setRate(value)} defaultValue={rate} size="sm" />
            </div>
        </div>
    )
}