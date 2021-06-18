import React from 'react';
import { Avatar, Icon } from "rsuite";
import { useAdmin } from "../../components/hooks/adminSidebar.hook";


export const AdminHeader = (props) => {

    const { toggle } = useAdmin();

    return (
        <div className="admin-header">
            <div className="admin-header-item admin-sidebar-collapse" onClick={toggle}>
                <Icon icon="bars" size="lg" />
            </div>

            {/* This link must send to /profile/:userId */}
            <a href="$" className="admin-header-item admin-header-item-user">
                <Avatar className="me-2" src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />
                <div className="admin-header-item-user-info">
                    <span className="admin-username">Имя Фамилия</span>
                    <span className="admin-role text-muted text-small">Администратор</span>
                </div>
            </a>
        </div>
    )
}