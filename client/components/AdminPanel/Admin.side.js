const AdminSide = (props) => {

    const setActive = () => {
        document.querySelector('.'+props.active).classList.add('admin-side-item-active')
    }

    React.useEffect(() => {
        setActive();
    });

    return (
        <div className="admin-side">
            <a href="/" className="admin-side-item admin-side-title">
                Market.io
            </a>

            <hr className="admin-hr" />
            
            <a href="/admin" className="admin-side-item">
                Панель управления
            </a>
            {/* href="/admin/products" */}
            <div className="admin-side-item m-dropdown" data-target="#products">
                Товары
            </div>
            <div className="admin-side-item admin-side-item-secondary m-dropdown-target" id="products">
                Что-то в дропе
            </div>

            <a href="/admin/products" className="admin-side-item">
                Пользователи
            </a>
        </div>
    );
}