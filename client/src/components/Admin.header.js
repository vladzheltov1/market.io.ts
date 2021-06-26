import React from 'react';
import { Avatar, Icon } from "rsuite";

export const AdminHeader = (props) => {
    return (
        <div className="admin-header">
            <div className="admin-header-elements">
                <div>
                    Текст
                </div>
                <div>
                    Текст
                </div>
                <div>
                    Текст
                </div>
            </div>
            <div className="admin-header-icons">
                <div>
                    <Icon icon="bell" size="lg" />
                </div>
                <div>
                    <Avatar
                        circle
                        src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"
                    />
                </div>
            </div>
        </div>
    )
}