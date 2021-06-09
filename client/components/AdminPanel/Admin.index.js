const AdminIndex = (props) => {
    return (
        <div className="admin-container">
            <AdminSide active="dashboard" />

            <div className="admin-right">
                <AdminHeader user={props.user} />
                <div className="admin-content">
                    Контент
                </div>
            </div>
        </div>
    );
}