import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Radio, RadioGroup } from "rsuite";

export const SignupPage = () => {

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        login: "",
        gender: "M",
        password1: "",
        password2: ""
    });

    const [classList, setClassList] = useState({
        firstname: ['form-block', 'form-after'],
        lastname: ['form-block', 'form-after'],
        email: ['form-block', 'form-after'],
        gender: ['form-block', 'form-after'],
        login: ['form-block', 'form-after'],
        password1: ['form-block', 'form-after'],
        password2: ['form-block', 'form-after']
    });

    const [error, setError] = React.useState('');

    const radioHandler = (value) => {
        setForm({ ...form, gender: value });
    }

    /* ------------------------------ */

    // Close error message
    const closeError = React.useCallback(() => {
        setError('');
    }, [setError]);



    // Main request to the server
    const sendRequest = React.useCallback(() => {
        const json = JSON.stringify({
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            gender: form.gender,
            login: form.login,
            pass1: form.password1,
            pass2: form.password2
        });

        const load = () => {
            let serverData = JSON.parse(request.response);

            if (serverData.error) {
                setError(serverData.error);
            }

            // if (serverData.errorDetail === "NOTEXISTS") {
            //     setClassList(...classList,  ['form-block', 'form-after', 'form-input-wrong']);
            //     return;
            // }
            // else if (serverData.errorDetail === "WRONGPASSWORD") {
            //     setClassList(...classList, ['form-block', 'form-after', 'form-input-wrong']);
            //     return;
            // }

            window.location.replace('/');
        };

        let request = new XMLHttpRequest();

        request.open('POST', '/server/signup', true);
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener('load', load);
        request.send(json);

    }, [form, setError]);

    return (
        <div className="container form-wrapper">
            <div className="form">
                <form className="form-form" method="POST">
                    <h3 className="form-title">Регистрация</h3>
                    {
                        error && (
                            <div className="form-block error-form">
                                <b>Ошибка:</b> {error}
                                {/* <i className="icon icon-x error-form-close" onClick={closeError}></i> */}
                                <Icon icon="close" size="ls" className="error-form-close" onClick={closeError} />
                            </div>
                        )
                    }
                    <div className={classList.firstname.join(' ')}>
                        {/* <i className="icon icon-user-dark "></i> */}
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
                    <div className={classList.lastname.join(' ')}>
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
                    <div className={classList.email.join(' ')}>
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
                    <div className={classList.login.join(' ')}>
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
                    <div className={classList.gender.join(' ') + " form-gender-block"}>
                        <Icon icon="intersex" />
                        <label className="form-label">Пол</label>

                        <RadioGroup name="radioList" value={form.gender} onChange={value => {
                            radioHandler(value);
                        }} inline>
                            <Radio value="M" onClick={radioHandler}>Мужской</Radio>
                            <Radio value="F" onClick={radioHandler}>Женский</Radio>
                        </RadioGroup>

                    </div>
                    <div className={classList.password1.join(' ')}>
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
                    <div className={classList.password2.join(' ')}>
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
                            onClick={sendRequest}
                        >
                            Регистрация

                        </Button>
                    </div>
                    <hr />
                    <div className="form-tip form-flex">
                        <span className="me-1">Уже есть аккаунт?</span>
                        <Link to="/login">Входи!</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
