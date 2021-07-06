import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";
import { Button } from "../components/Market.io/Button";
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
                    <h3 className="form-title"> Вход </h3>{" "}
                    {message && (
                        <div className="form-block error-form">
                            <div>
                                <b> Ошибка: </b> {message}
                            </div>
                            <span className="error-form-close">
                                <Icon icon="close" onClick={clearMessage} />
                            </span>
                        </div>
                    )}
                    <div className="form-block form-after">
                        <Icon icon="user" />
                        <input
                            type="text"
                            id="login"
                            name="login"
                            className="form-input form-form-input"
                            placeholder="Логин"
                            autoComplete="username"
                            onChange={event => {
                                setForm({ ...form, login: event.target.value });
                            }}
                            value={form.login}
                            required
                        />
                    </div>
                    <div className="form-block form-after">
                        <Icon icon="lock" />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input form-form-input"
                            placeholder="Пароль"
                            autoComplete="current-password"
                            onChange={event => {
                                setForm({ ...form, password: event.target.value });
                            }}
                            value={form.password}
                            required
                        />
                    </div>
                    <div className="form-block form-flex">
                        <Button
                            color="green"
                            onClick={loginHandler}
                            disabled={fetching}
                        >
                            Войти
                        </Button>
                        <br />
                        <Link to="/user/reset"> Забыли пароль? </Link>
                    </div>
                    <hr />
                    <div className="form-tip form-flex">
                        Нет аккаунта?&nbsp;
                        <Link to="/signup"> Регистрируйся! </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}