import { Link } from "react-router-dom";
import { Dropdown, Icon, Nav, Sidenav } from "rsuite";
// import { useAdmin } from "../../components/hooks/adminSidebar.hook";

const style = {
    icon: {
        display: "flex",
        justifyContent: "center"
    }
}

export const AdminSide = () => {

    // const { sidebar } = useAdmin();

    // console.log(sidebar);

    return (
        <Sidenav expanded={true} defaultOpenKeys={['3', '4']} activeKey="1" style={{ display: "block" }}>
            <Sidenav.Body>
                <Nav>
                    <Nav.Item href="/" icon={<Icon icon="home" style={style.icon} />}>
                        <Link to="/">
                            Market.io
                        </Link>
                    </Nav.Item>
                    <Nav.Item icon={<Icon icon="dashboard" style={style.icon} />}>
                        <Link to="/admin">
                            Панель управления
                        </Link>
                    </Nav.Item>
                    <Nav.Item icon={<Icon icon="group" style={style.icon} />}>
                        Пользователи
                    </Nav.Item>
                    <Dropdown title="Продукты" icon={<Icon icon="shopping-cart" style={style.icon} />}>
                        <Dropdown.Item eventKey="3-1" icon={<Icon icon="list" />}>Все продукты</Dropdown.Item>
                        <Dropdown.Item eventKey="3-2" icon={<Icon icon="plus" />}>Добавить</Dropdown.Item>
                        <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
                        <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                    </Dropdown>
                    <Dropdown
                        eventKey="4"
                        title="Покупки"
                        icon={<Icon icon="usd" style={style.icon} />}
                    >
                        <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                        <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                        <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                    </Dropdown>
                    <Nav.Item icon={<Icon icon="star" style={style.icon} />}>
                        <Link to="/admin">
                            Отзывы
                        </Link>
                    </Nav.Item>
                </Nav>
            </Sidenav.Body>
        </Sidenav>
    )
};