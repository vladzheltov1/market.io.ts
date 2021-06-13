const SignupPage = () => {

    /* States */
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [login, setLogin] = React.useState('');
    const [gender, setGender] = React.useState('M');
    const [password1, setPassword1] = React.useState('');
    const [password2, setPassword2] = React.useState('');

    const [firstnameClassList, setFirstnameClassList] = React.useState(['form-block', 'form-after']);
    const [lastnameClassList, setLastnameClassList] = React.useState(['form-block', 'form-after']);
    const [emailClassList, setEmailClassList] = React.useState(['form-block', 'form-after']);
    const [loginClassList, setLoginClassList] = React.useState(['form-block', 'form-after']);
    const [password1ClassList, setPassword1ClassList] = React.useState(['form-block', 'form-after']);
    const [password2ClassList, setPassword2ClassList] = React.useState(['form-block', 'form-after']);

    const [error, setError] = React.useState('');

    /* ------------------------------ */


    // Firstname field input
    const inputFirstname = React.useCallback((event) => {
        setFirstname(event.target.value);
        if(event.target.value.length === 0) {
            setFirstnameClassList(['form-block', 'form-after']);
        }
    }, [firstname, setFirstname]);



    // Lastname field input
    const inputLastname = React.useCallback((event) => {
        setLastname(event.target.value);
        if(event.target.value.length === 0) {
            setLastnameClassList(['form-block', 'form-after']);
        }
    }, [lastname, setLastname]);



    // Email field input
    const inputEmail = React.useCallback((event) => {

        setEmail(event.target.value);
        if(event.target.value.length === 0) {
            setEmailClassList(['form-block', 'form-after']);
        }

    }, [email, setEmail, setEmailClassList]);



    // Login field input
    const inputLogin = React.useCallback((event) => {

        setLogin(event.target.value);
        if(event.target.value.length === 0) {
            setLoginClassList(['form-block', 'form-after']);
        }

    }, [login, setLogin, setLoginClassList]);



    // Password1 field input
    const inputPassword1 = React.useCallback((event) => {

        setPassword1(event.target.value);
        if(event.target.value.length === 0) {
            setPassword1ClassList(['form-block', 'form-after']);
        }

    }, [password1, setPassword1, setPassword1ClassList]);



    // Password2 field input
    const inputPassword2 = React.useCallback((event) => {

        setPassword2(event.target.value);
        if(event.target.value.length === 0){
            setPassword2ClassList(['form-block', 'form-after']);
        }

    }, [password2, setPassword2, setPassword2ClassList]);

    const getGender = React.useCallback((event) => {
        setGender(event.target.value);
    });

    // Close error message
    const closeError = React.useCallback(() => {
        setError('');
    }, [setError]);



    // Main request to the server
    const sendRequest = React.useCallback(() => {
        const json = JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            gender: gender,
            login: login,
            pass1: password1,
            pass2: password2
        });

        const load = () => {
            let serverData = JSON.parse(request.response);

            if(serverData.error){
                setError(serverData.error);
            }

            if(serverData.errorDetail === "NOTEXISTS"){
                setLoginClassList(['form-block', 'form-after', 'form-input-wrong']);
                return;
            }
            else if(serverData.errorDetail === "WRONGPASSWORD"){
                setPasswordClassList(['form-block', 'form-after', 'form-input-wrong']);
                return;
            }

            window.location.replace('/');
        };

        let request = new XMLHttpRequest();

        request.open('POST', '/server/signup', true);
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener('load', load);
        request.send(json);

    }, [
        firstname,
        lastname,
        email,
        login,
        gender,
        password1,
        password2,
        setEmailClassList,
        setLoginClassList,
        setPassword1ClassList,
        setPassword2ClassList,
        setError
    ]);

    return(
        <div className="form">
            <form className="form-form" method="POST">
                <h3 className="form-title">Регистрация</h3>
                {
                    error && (
                        <div className="form-block error-form">
                            <b>Ошибка:</b> {error}
                            <i className="icon icon-x error-form-close" onClick={closeError}></i>
                        </div>
                    )
                }
                <div className={firstnameClassList.join(' ')}>
                    <i className="icon icon-user-dark "></i>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="form-input form-form-input"
                        placeholder="Имя"
                        autoComplete="username"
                        onChange={inputFirstname}
                        value={firstname}
                        required
                    />
                </div>
                <div className={lastnameClassList.join(' ')}>
                    <i className="icon icon-user-dark "></i>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="form-input form-form-input"
                        placeholder="Фамилия"
                        autoComplete="username"
                        onChange={inputLastname}
                        value={lastname}
                        required
                    />
                </div>
                <div className={emailClassList.join(' ')}>
                    <i className="icon icon-user-dark "></i>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input form-form-input"
                        placeholder="Почта"
                        onChange={inputEmail}
                        value={email}
                        required
                    />
                </div>
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
                <div className={loginClassList.join(' ') + " form-flex form-gender-block"}>
                    <i className="icon icon-user-dark"></i>
                    <label className="form-label">Пол</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" onChange={getGender} value="M" name="flexRadioDefault" id="male" defaultChecked/>
                        <label className="form-check-label" htmlFor="male">
                            М
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" onChange={getGender} value="F" name="flexRadioDefault" id="female"/>
                        <label className="form-check-label" htmlFor="female">
                            Ж
                        </label>
                    </div>
                </div>
                <div className={password1ClassList.join(' ')}>
                    <i className="icon icon-lock "></i>
                    <input
                        type="password"
                        id="gender"
                        name="gender"
                        className="form-input form-form-input"
                        placeholder="Пароль"
                        autoComplete="current-password"
                        onChange={inputPassword1}
                        value={password1}
                        required
                    />
                </div>
                <div className={password2ClassList.join(' ')}>
                    <i className="icon icon-lock "></i>
                    <input
                        type="password"
                        id="password2"
                        name="password2"
                        className="form-input form-form-input"
                        placeholder="Повторите пароль"
                        autoComplete="current-password"
                        onChange={inputPassword2}
                        value={password2}
                        required
                    />
                </div>
                <div className="form-block form-flex">
                    <input
                        type="button"
                        name="btn"
                        className="btn btn-big btn-green btn-form"
                        id="submit"
                        value="Регистрация"
                        onClick={sendRequest}
                    />
                </div>
                <hr/>
                <div className="form-tip form-flex">
                    <span className="me-1">Уже есть аккаунт?</span>
                    <a href="/login">Входи!</a>
                </div>
            </form>
        </div>
    );
}
