import React, { useEffect, useState } from "react";
import { Loader } from "rsuite";
import { useAuth } from "../hooks/useAuth";
import { useHttp } from "../hooks/useHttp";
import { utils } from "../scripts/Utils";

export const Profile = (props) => {
    const [user, setUser] = useState({});
    const { message, fetching, request, clearMessage } = useHttp();
    const { getUserData } = useAuth();

    useEffect(() => {
        const ID = props.match.params.id;

        try {
            const fetchData = async () => {
                const response = await request("/api/users/" + ID, "GET");

                if (utils.isObjectEmpty(response.data)) props.history.push("/");
            }
            fetchData();
        } catch (error) {
            console.log(error);
        }

    }, []);

    return (
        <div className="wrapper">
            {!utils.isObjectEmpty(user) ? (
                <div className="profile__flex">
                    <div className="profile__left-info">
                        <div className="profile__photo-wrapper">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="profile__right-info">
                        <div className="profile__name">{user.user_firstname} {user.user_lastname}</div>
                        <div className="profile__role">{user.user_role === 2 ? "Администратор" : "Пользователь"}</div>
                    </div>
                </div>
            ) : (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Loader size="md" center content="Загрузка..." vertical />
                </div>
            )}
        </div>
    )
}