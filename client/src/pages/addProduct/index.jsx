import React, { useRef, useState } from "react";
import { Icon, Tag, TagGroup } from "rsuite";
import { Button } from "../../components/lib";
import { useHttp } from "../../hooks/useHttp";
import { categories } from "../../scripts/Category";

export const AddProduct = () => {
    const input = useRef();

    // const setFocus = () => {
    //     input.current.focus();
    // }

    const [typing, setTyping] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [tags, setTags] = useState([]);


    const handleButtonClick = () => {
        setTyping(true);
        // input.current.focus();
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
        category: categories[0].value,
        price: 0,
        // picture: ""
    });

    const loadPicture = event => {
        console.log(event.target.files);
    }

    const send = async () => {

        console.log({ form, tags });

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
            // photo: form.photo,
            keywords: tags
        }

        const response = await request("/api/products/add", "POST", JSON.stringify(data));

        if (message) {
            setLocalError(message);
            return;
        }

        console.log("SUCCESS", response);
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
                    {categories.map((category) => (
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
                                <Tag>
                                    <input
                                        ref={input}
                                        size="xs"
                                        style={{ width: 70 }}
                                        value={inputValue}
                                        onChange={(event) => setInputValue(event.target.value)}
                                        onBlur={handleInputConfirm}
                                        onKeyPress={handleInputConfirm}
                                    />
                                </Tag>
                            ) : (
                                <div>
                                    <Icon icon="plus-circle" onClick={handleButtonClick} size="2x" />
                                </div>
                            )
                        }
                    </TagGroup>
                </section>

                <input type="number" placeholder="Цена (руб)" value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} />

                {/* <input type="file" onChange={loadPicture} accept=".jpg, .jpeg, .png" /> */}

                {localError && (
                    <div className="error-form" style={{ marginBottom: 10 }}>
                        <div>
                            <b>Ошибка:</b>
                            &nbsp;{localError}
                        </div>
                    </div>
                )}

                <Button onClick={send} disabled={fetching}>Отправить</Button>
            </div>
        </div>
    )
}