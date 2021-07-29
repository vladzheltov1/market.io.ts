import React, { useRef, useState } from "react";
import { Icon, Tag, TagGroup } from "rsuite";
import { Button } from "../components/Market.io/market.io";
import { useHttp } from "../hooks/useHttp";
import { _CATEROGIES } from "../scripts/Category";

export const AddProduct = () => {
    const input = useRef();

    const setFocus = () => {
        input.current.focus();
    }

    const [typing, setTyping] = useState(false, setFocus);
    const [inputValue, setInputValue] = useState("");
    const [tags, setTags] = useState([]);


    const handleButtonClick = () => {
        setTyping(true);
    }

    const handleInputConfirm = (event) => {
        if (event.key !== "Enter") return;

        setTags([...tags, inputValue] || tags);
        setTyping(false);
        setInputValue("");
    }

    const handleTagRemove = (tag) => {
        setTags(tags.filter(item => item !== tag));
    }




    const [localError, setLocalError] = useState(null);

    const { fetching, message, request } = useHttp();

    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "",
        price: 0,
        picture: ""
    });

    const loadPicture = event => {
        console.log(event.target.files);
    }

    const send = async () => {
        for (let key in form) {
            if (!form[key]) {
                setLocalError("Одно из полей пустое!");
                return;
            }
        }

        const data = {
            title: form.title,
            description: form.description,
            category: form.category,
            price: form.price,
            photo: form.photo,
            keywords: tags
        }

        const response = await request("/products/add", "POST", JSON.stringify(data));

        if (response.status > 300) {
            setLocalError(response.message);
            return;
        }

        console.log("SUCCESS");
    }

    return (
        <div className="wrapper" style={{ maxWidth: 800 }}>
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

                <select name="category" id="category" onChange={(event) => setForm({ ...form, category: event.target.value })} value={form.category}>
                    {_CATEROGIES.map((category) => (
                        <option value={category.value} key={category.value}>{category.label}</option>
                    ))}
                </select>

                <section>
                    <TagGroup>
                        {tags.map((item, index) => (
                            <Tag
                                key={index}
                                closable
                                onClose={() => {
                                    handleTagRemove(item);
                                }}
                            >
                                {item}
                            </Tag>
                        ))}
                        {
                            typing ? (
                                <input
                                    ref={input}
                                    size="xs"
                                    style={{ width: 70 }}
                                    value={inputValue}
                                    onChange={(event) => setInputValue(event.target.value)}
                                    onBlur={handleInputConfirm}
                                    onKeyPress={handleInputConfirm}
                                />
                            ) : (
                                <div>
                                    <Icon icon="plus-circle" onClick={handleButtonClick} size="2x" />
                                </div>
                            )
                        }
                    </TagGroup>
                </section>

                <input type="number" placeholder="Цена (руб)" />

                <input type="file" onChange={loadPicture} accept=".jpg, .jpeg, .png" />

                {localError && (
                    <div className="error-form" style={{ marginBottom: 10 }}>
                        <div>
                            <b>Ошибка:</b>
                            &nbsp;{localError}
                        </div>
                    </div>
                )}

                <Button onClick={send}>Отправить</Button>
            </div>
        </div>
    )
}