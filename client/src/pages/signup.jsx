import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Radio, RadioGroup } from "rsuite";
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
                    <h3 className="form-title">Регистрация</h3>
                    {
                        message && (
                            <div className="form-block error-form">
                                <b>Ошибка:</b> {message}
                                <Icon icon="close" size="ls" className="error-form-close" onClick={clearMessage} />
                            </div>
                        )
                    }
                    <div className="form-block form-after">
                        <Icon icon="user" />
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            className="form-input form-form-input"
                            placeholder="Имя"
                            autoComplete="username"
                            onChange={event => setForm({ ...form, firstname: event.target.value })}
                            value={form.firstname}
                            required
                        />
                    </div>
                    <div className="form-block form-after">
                        <Icon icon="user" />
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            className="form-input form-form-input"
                            placeholder="Фамилия"
                            autoComplete="username"
                            onChange={event => setForm({ ...form, lastname: event.target.value })}
                            value={form.lastname}
                            required
                        />
                    </div>
                    <div className="form-block form-after">
                        <Icon icon="envelope" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input form-form-input"
                            placeholder="Почта"
                            onChange={event => setForm({ ...form, email: event.target.value })}
                            value={form.email}
                            required
                        />
                    </div>
                    <div className="form-block form-after">
                        <Icon icon="user" />
                        <input
                            type="text"
                            id="login"
                            name="login"
                            className="form-input form-form-input"
                            placeholder="Логин"
                            autoComplete="username"
                            onChange={event => setForm({ ...form, login: event.target.value })}
                            value={form.login}
                            required
                        />
                    </div>
                    <div className="form-block form-after form-gender-block">
                        <Icon icon="intersex" />
                        <label className="form-label">Пол</label>

                        <RadioGroup name="radioList" value={form.gender} onChange={value => {
                            radioHandler(value);
                        }} inline>
                            <Radio value="M" onClick={radioHandler}>Мужской</Radio>
                            <Radio value="F" onClick={radioHandler}>Женский</Radio>
                        </RadioGroup>

                    </div>
                    <div className="form-block form-after">
                        <Icon icon="lock" />
                        <input
                            type="password"
                            id="gender"
                            name="gender"
                            className="form-input form-form-input"
                            placeholder="Пароль"
                            autoComplete="current-password"
                            onChange={event => setForm({ ...form, password1: event.target.value })}
                            value={form.password1}
                            required
                        />
                    </div>
                    <div className="form-block form-after">
                        <Icon icon="lock" />
                        <input
                            type="password"
                            id="password2"
                            name="password2"
                            className="form-input form-form-input"
                            placeholder="Повторите пароль"
                            autoComplete="current-password"
                            onChange={event => setForm({ ...form, password2: event.target.value })}
                            value={form.password2}
                            required
                        />
                    </div>
                    <div className="form-block form-flex">
                        <Button
                            color="green"
                            size="lg"
                            name="btn"
                            id="submit"
                            onClick={signUpHandler}
                            disabled={fetching}
                        >
                            Регистрация

                        </Button>
                    </div>
                    <hr />
                    <div className="form-tip form-flex">
                        Уже есть аккаунт?&nbsp; <Link to="/login">Входи!</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
