import { Link } from "react-router-dom";

export const ShopSidebar = () => {

    const styles = {
        sidebar: {
            display: "flex",
            flexDirection: "column",
        },
        sidebarTitle: {
            fontSize: 19,
            fontWeight: 600,
            marginBottom: "10px"
        },
        sidebarLink: {
            fontSize: 16,
            fontWeight: "400",
            color: "#32353b",
            textDecoration: "none",
            margin: "3px 0"
        }
    }

    const sidebarLinks = [
        {
            id: 1,
            value: "Футболки",
            link: "/shop?category=shirt",
            active: true
        },
        {
            id: 2,
            value: "Толстовки",
            link: "/shop?category=boots",
            active: false
        },
        {
            id: 3,
            value: "Обувь",
            link: "/shop?category=boots",
            active: false
        },
    ]

    return (
        <div style={styles.sidebar}>
            <div style={styles.sidebarTitle}>Категории</div>
            {
                sidebarLinks.map((sidebarLink) => {
                    if (sidebarLink.active) {
                        return <Link
                            className="shopSidebarActive"
                            style={styles.sidebarLink}
                            key={sidebarLink.id}
                            to={sidebarLink.link}
                        >
                            {sidebarLink.value}
                        </Link>
                    }
                    return <Link
                        style={styles.sidebarLink}
                        key={sidebarLink.id}
                        to={sidebarLink.link}
                    >
                        {sidebarLink.value}
                    </Link>
                })
            }
        </div>
    )
}