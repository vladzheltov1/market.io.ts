import React, { useState } from "react";
import { Input, InputGroup, InputPicker } from "rsuite";

export const AddProduct = () => {

    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "",
        price: 0,
        picture: ""
    });

    const categories = [
        {
            label: "Штаны",
            value: "pants",
            role: "Master"
        }
    ]

    const loadPicture = event => {
        console.log(event.target.files);
    }

    return (
        <div className="wrapper">
            <h2>Добавить продукт</h2>
            <div>
                <input
                    placeholder="Название продукта"
                    onChange={event => setForm({ ...form, title: event.target.value })}
                />
                <textarea
                    placeholder="Описание продукта"
                    onChange={(event) => setForm({ ...form, description: event.target.value })}
                ></textarea>
                <InputPicker onChange={event => setForm({ ...form, category: event.target.value })} data={categories} style={{ width: "100%" }} />
                <InputGroup>
                    <Input type="number" onChange={event => setForm({ ...form, price: event.target.value })} />
                    <InputGroup.Addon>руб.</InputGroup.Addon>
                </InputGroup>

                <input type="file" onChange={loadPicture} accept=".jpg, .jpeg, .png" />

                {/* <Uploader listType="picture" action={loadPicture}>
                    <button>
                        <Icon icon='camera-retro' size="lg" />
                    </button>
                </Uploader> */}
            </div>
        </div>
    )
}