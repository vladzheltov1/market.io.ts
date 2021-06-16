import React from 'react';
import { Avatar } from "rsuite";

export const AdminHeader = (props) => {
    return (
        <div className="admin-header">
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