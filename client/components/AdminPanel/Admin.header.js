const AdminHeader = (props) => {
    return(
        <div className="admin-header">
            <a href={"/profile/"+props.user.id} className="admin-header-item admin-header-item-user">
                <img className="admin-header-item-icon" src={props.user.user_avatar} />
                <div className="admin-header-item-user-info">
                    <span className="admin-username">{props.user.user_firstname + " " +  props.user.user_lastname}</span>
                    <span className="admin-role text-muted text-small">Администратор</span>
                </div>
            </a>
        </div>
    )
}