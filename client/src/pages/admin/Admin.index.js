import { AdminHeader } from "./Admin.header";
import { AdminSide } from "./Admin.side";

// const colors = [
//     "#A23D36",
//     "#FACA2C",
//     "#ADD475",
//     "#568484",
//     "#638CAD",
//     "#766895"
// ]

// const randColor = () => {
//     return colors[Math.floor(Math.random() * 5)];
// }

const adminIndexStyle = {
    adminContent: {
        display: "grid",
        gridTemplateColumns: "100%",
        gap: "20px",
        padding: "20px"
    },
    adminIndexBlock: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 200px",
        background: "#fff",
        fontSize: "3rem",
        borderRadius: "20px",
        color: "#fff !important"
    }
}

export const AdminIndex = (props) => {
    return (
        <div className="admin-container">
            <AdminSide appearance="subtle" />

            <div className="admin-right">
                <AdminHeader user={props.user} />
                <div style={adminIndexStyle.adminContent}>
                    {/* <Link to="/" style={adminIndexStyle.adminIndexBlock}>
                        Market.io
                    </Link>
                    <Link to="/" style={adminIndexStyle.adminIndexBlock}>
                        Market.io
                    </Link>
                    <Link to="/" style={adminIndexStyle.adminIndexBlock}>
                        Market.io
                    </Link> */}
                </div>
            </div>
        </div>
    );
}