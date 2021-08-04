import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Radio, RadioGroup } from "rsuite";
import { Button, ErrorBlock, Input, Space, Text } from "../components/lib/sck";
import { useHttp } from "../hooks/useHttp";

export const Signup = () => {

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        login: "",
        gender: "M",
        password1: "",
        password2: ""
    });

    const radioHandler = (value) => {
        setForm({ ...form, gender: value });
    }

    const { request, message, clearMessage, fetching } = useHttp();

    const signUpHandler = async () => {
        try {
            const json = {
                firstname: form.firstname,
                lastname: form.lastname,
                email: form.email,
                gender: form.gender,
                login: form.login,
                pass1: form.password1,
                pass2: form.password2
            };

            const result = await request("/api/users/signup", "POST", JSON.stringify(json));

            console.log(result);

        } catch (e) { };
    }

    return (
        <div className="wrapper form-wrapper">
            <div className="form">
                <form className="form-form" method="POST">
                    <Text mode="h3">Регистрация</Text>
                    <Space height={20} />
                    {message && (
                        <>
                            <ErrorBlock message={message} clearMessage={clearMessage} />
                            <Space height={15} />
                        </>
                    )}
                    <Input
                        icon="user"
                        label="Имя"
                        onChange={event => setForm({ ...form, firstname: event.target.value })}
                        value={form.firstname}
                    />
                    <Space height={20} />
                    <Input
                        icon="user"
                        label="Фамилия"
                        onChange={event => setForm({ ...form, lastname: event.target.value })}
                        value={form.lastname}
                    />
                    <Space height={20} />
                    <Input
                        type="email"
                        icon="envelope"
                        label="Почта"
                        onChange={event => setForm({ ...form, email: event.target.value })}
                        value={form.email}
                    />
                    <Space height={20} />
                    <Input
                        icon="id-card"
                        label="Логин"
                        onChange={event => setForm({ ...form, login: event.target.value })}
                        value={form.login}
                    />
                    <div className="form-block form-gender-block">
                        <Icon icon="intersex" />
                        <label className="form-label">Пол</label>

                        <RadioGroup name="radioList" value={form.gender} onChange={value => {
                            radioHandler(value);
                        }} inline>
                            <Radio value="M" onClick={radioHandler}>Мужской</Radio>
                            <Radio value="F" onClick={radioHandler}>Женский</Radio>
                        </RadioGroup>
                    </div>

                    <Input
                        type="password"
                        icon="lock"
                        label="Пароль"
                        onChange={event => setForm({ ...form, password1: event.target.value })}
                        value={form.password1}
                    />
                    <Space height={20} />
                    <Input
                        type="password"
                        icon="lock"
                        label="Повторите пароль"
                        onChange={event => setForm({ ...form, password2: event.target.value })}
                        value={form.password2}
                    />
                    <Space height={20} />
                    <Button
                        color="green"
                        onClick={signUpHandler}
                        disabled={fetching}
                    >
                        Регистрация
                    </Button>

                    <hr />
                    <div className="flex jfy-center">
                        <Text>Уже есть аккаунт?&nbsp;</Text>
                        <Link to="/login">Входи!</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
