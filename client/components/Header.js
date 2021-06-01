class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = { }
    }

    render(){
        return(
            <div>
            <div className="header-top-title"><a href="/">Market.io</a></div>
                <div className="header-hav">
                    <div className="header-item index"><a href="/"><i className="icon icon-home"></i>Главная</a></div>
                    <div className="header-item shop"><a href="/shop"><i className="icon icon-shop"></i>Магазин</a></div>
                    <div className="header-item dropdown">
                        <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="icon icon-user"></i>
                            Личный кабинет
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                this.props.userData != undefined &&
                                
                                <div>
                                    <li>
                                        <a className="dropdown-item" href={"/profile" + this.props.userData.id}>
                                            <i className="icon icon-user-dark"></i>
                                            { this.props.userData.user_firstname } { this.props.userData.user_lastname }
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                </div>
                            }

                            {
                                this.props.userData != undefined && this.props.userData.user_role == 2 && 
                                <li><a className="dropdown-item" href="/admin"><i className="icon icon-settings"></i>Админ панель</a></li>
                            }

                            {
                                this.props.userData != undefined
                                ?
                                <div>
                                    <li><a className="dropdown-item" href="/cart"><i className="icon icon-bag"></i>Корзина</a></li>
                                    <li><a className="dropdown-item" href="/logout"><i className="icon icon-logout"></i>Выход</a></li>
                                </div>
                                :
                                <div>
                                    <li><a className="dropdown-item" href="/login"><i className="icon icon-login"></i>Вход</a></li>
                                    <li><a className="dropdown-item" href="/signup"><i className="icon icon-userAdd"></i>Регистрация</a></li>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}