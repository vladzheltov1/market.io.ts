const LoginPage = () => {

    "use strict";

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [error, setError] = React.useState('');

    const [loginClassList, setLoginClassList] = React.useState(['form-block', 'form-after']);
    const [passwordClassList, setPasswordClassList] = React.useState(['form-block', 'form-after']);


    const inputLogin = React.useCallback((event) => {
        setLogin(event.target.value);

        if(event.target.value.length === 0){
            setLoginClassList(['form-block', 'form-after']);
        }

    }, [setLogin, setLoginClassList]);


    const inputPassword = React.useCallback((event) => {
        setPassword(event.target.value);

        if(event.target.value.length === 0){
            setPasswordClassList(['form-block', 'form-after']);
        }

    }, [setPassword, setPasswordClassList]);


    const closeError = React.useCallback(() => {
        setError('');
    }, [setError]);


    const sendRequest = React.useCallback(() => {
        const json = JSON.stringify({ login, password });

        // console.log({json});

        // fetch("/server/login", {method: "POST", body: {login, password}})
        //     .then(response => response.json())
        //     .then(data => {
        //         if(data.error){
        //             setError(data.error);
        //             // if(data.errorDetail === "EMPTYFIELD"){
        //             //     if(login.length === 0) setLoginClassList(['form-block', 'form-after', 'form-input-wrong']);
        //             //     if(password.length === 0) setPasswordClassList(['form-block', 'form-after', 'form-input-wrong']);
        //             // }
        //             // else if(serverData.errorDetail === "NOTEXISTS"){
        //             //     setLoginClassList(['form-block', 'form-after', 'form-input-wrong']);
        //             // }
        //             // else if(serverData.errorDetail === "WRONGPASSWORD"){
        //             //     setPasswordClassList(['form-block', 'form-after', 'form-input-wrong']);
        //             // }
        //         }
        //
        //         else{
        //             window.location.replace('/');
        //         }
        //     });

        const load = () => {
            const data = JSON.parse(request.response);

            if(data.error){
                setError(data.error);
                if(data.errorDetail === "EMPTYFIELD"){
                    if(login.length === 0){
                        setLoginClassList(['form-block', 'form-after', 'form-input-wrong']);
                    }
                    if(password.length === 0){
                        setPasswordClassList(['form-block', 'form-after', 'form-input-wrong']);
                    }
                }
                else if(data.errorDetail === "NOTEXISTS"){
                    setLoginClassList(['form-block', 'form-after', 'form-input-wrong']);
                }
                else if(data.errorDetail === "WRONGPASSWORD"){
                    setPasswordClassList(['form-block', 'form-after', 'form-input-wrong']);
                }
            }

            else{
                window.location.replace('/');
            }
        };

        let request = new XMLHttpRequest();

        request.open('POST', '/server/login', true);
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener('load', load);
        request.send(json);

    }, [login, password, setLoginClassList, setPasswordClassList, setError]);

    return(
        <div className="form">
            <form className="form-form" method="POST">
                <h3 className="form-title">Вход</h3>
                {
                    error && (
                        <div className="form-block error-form">
                            <b>Ошибка:</b> {error}
                            <i className="icon icon-x error-form-close" onClick={closeError}></i>
                        </div>
                    )
                }
                <div className={loginClassList.join(' ')}>
                    <i className="icon icon-user-dark "></i>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        className="form-input form-form-input"
                        placeholder="Логин"
                        autoComplete="username"
                        onChange={inputLogin}
                        value={login}
                        required
                    />
                </div>
                <div className={passwordClassList.join(' ')}>
                    <i className="icon icon-lock "></i>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-input form-form-input"
                        placeholder="Пароль"
                        autoComplete="current-password"
                        onChange={inputPassword}
                        value={password}
                        required
                    />
                </div>
                <div className="form-block form-flex">
                    <input
                        type="button"
                        name="btn"
                        className="btn btn-big btn-green btn-form"
                        id="submit"
                        value="Войти"
                        onClick={sendRequest}
                    />
                    <a href="/user/reset">Забыл пароль?</a>
                </div>
                <hr/>
                <div className="form-tip form-flex">
                    <span className="me-1">Нет аккаунта?</span>
                    <a href="/signup">Регистрируйся!</a>
                </div>
            </form>
        </div>
    );

}
