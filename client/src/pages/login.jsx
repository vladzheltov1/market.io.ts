import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ErrorBlock, Input, Space, Text } from "../components/lib/sck";
import { useHttp } from "../hooks/useHttp";

export const Login = () => {

    const [form, setForm] = useState({ login: "", password: "" });

    const { request, fetching, message, clearMessage } = useHttp();
    const loginHandler = async () => {
        try {
            const body = JSON.stringify({ login: form.login, password: form.password });
            const data = await request("/api/users/login", "POST", body);

            if (data.status === 200) {
                localStorage.setItem("userData", JSON.stringify(data.data));

                // We HAVE TO reload the page to update the data,
                // so DON'T change this thing with props.history.push('/')
                // because it doesn't reload the page, so the data gets outdated.
                window.location.replace('/');

            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="wrapper form-wrapper">
            <div className="form">
                <form className="form-form" method="POST">
                    <Text mode="h3">Вход</Text>
                    <Space height={20} />
                    {message && (
                        <>
                            <ErrorBlock message={message} clearMessage={clearMessage} />
                            <Space height={15} />
                        </>
                    )}
                    <Input
                        type="text"
                        label="Логин"
                        icon="user"
                        onChange={event => {
                            setForm({ ...form, login: event.target.value });
                        }}
                        value={form.login}
                    />
                    <Space height={20} />
                    <Input
                        type="password"
                        label="Пароль"
                        icon="unlock-alt"
                        onChange={event => {
                            setForm({ ...form, password: event.target.value });
                        }}
                        value={form.password}
                    />
                    <Space height={10} />
                    <Link to="/user/reset"> Забыл пароль? </Link>
                    <Space height={10} />
                    <Button
                        color="green"
                        onClick={loginHandler}
                        disabled={fetching}
                        primary
                    >
                        Войти
                    </Button>
                    <hr />
                    <div className="flex jfy-center">
                        <Text icon="home">Нет аккаунта?&nbsp;</Text>
                        <Link to="/signup"> Регистрируйся! </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}