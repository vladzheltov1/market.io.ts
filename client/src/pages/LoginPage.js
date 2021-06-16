import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "rsuite";
import { useHttp } from "../components/hooks/http.hook";
import "../css/form.scss";


export const LoginPage = () => {


    const { errors, clearError, request } = useHttp();
    const [form, setForm] = useState({ login: "", password: "" });

    const [formClass, setFormClass] = useState({
        loginClass: ["form-block", "form-after"],
        passwordClass: ["form-block", "form-after"]
    })

    const loginWrong = useCallback(() => {
        setFormClass({ ...formClass, loginClass: ["form-block", "form-after", "form-input-wrong"] });
    }, [formClass, setFormClass]);

    const passwordWrong = useCallback(() => {
        setFormClass({ ...formClass, passwordClass: ["form-block", "form-after", "form-input-wrong"] });
    }, [formClass, setFormClass]);

    const loginHandler = async () => {
        try {

            const json = {
                login: form.login,
                password: form.password,
            };

            const data = await request("/api/users/login", "POST", JSON.stringify(json));

            if (errors) {
                if (errors.errorDetail === "EMPTYFIELD") {
                    if (form.login.length === 0) loginWrong();
                    if (form.password.length === 0) passwordWrong();
                }
                else if (errors.errorDetail === "NOTEXISTS") loginWrong();
                else if (errors.errorDetail === "WRONGPASSWORD") passwordWrong();
            }
            else {
                // Authorize here
                // window.location.replace("/");
            }

        } catch (e) { /* Errors have already been caught */ };
    }

    return (
        <div className="container form-wrapper">
            <div className="form">
                <form className="form-form" method="POST">
                    <h3 className="form-title"> Вход </h3>{" "}
                    {errors.error && (
                        <div className="form-block error-form">
                            <b> Ошибка: </b> {errors.error}{" "}
                            {/* <i
                                className="icon icon-x error-form-close"
                                onClick={clearError}
                            ></i> */}
                            <Icon icon="close" onClick={clearError} />
                        </div>
                    )}
                    <div className={formClass.loginClass.join(" ")}>
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
                                if (event.target.value === "") {
                                    setFormClass({ ...formClass, loginClass: ["form-block", "form-after"] });
                                }
                            }}
                            value={form.login}
                            required
                        />
                    </div>
                    <div className={formClass.passwordClass.join(" ")}>
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
                                if (event.target.value === "") {
                                    setFormClass({ ...formClass, passwordClass: ["form-block", "form-after"] });
                                }
                            }}
                            value={form.password}
                            required
                        />
                    </div>
                    <div className="form-block form-flex">
                        <Button
                            color="green"
                            size="lg"
                            name="btn"
                            id="submit"
                            onClick={loginHandler}
                        >
                            Войти
                        </Button>
                        <br />
                        <a href="/user/reset"> Забыл пароль? </a>
                    </div>
                    <hr />
                    <div className="form-tip form-flex">
                        <span className="me-1"> Нет аккаунта? </span>
                        <Link to="/signup"> Регистрируйся! </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
