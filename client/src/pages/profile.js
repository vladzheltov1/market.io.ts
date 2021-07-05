import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "rsuite";
import { useAuth } from "../hooks/useAuth";
import { useHttp } from "../hooks/useHttp";
import { utils } from "../scripts/Utils";

export const Profile = (props) => {
    const [user, setUser] = useState({});
    const [joined, setJoined] = useState("");

    const { message, fetching, request } = useHttp();

    const { getUserData } = useAuth();
    const loggedUserData = getUserData();

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await request("/api/users/" + props.match.params.id, "GET");

                if (utils.isObjectEmpty(response.data) || message) {
                    props.history.push("/");
                    return;
                }

                setUser(response.data);
                setJoined(utils.dateAdaper(response.data.user_joined));
            }

            fetchData();
        } catch (error) {
            console.log(error);
        }

    }, []);

    return (
        <div className="wrapper">
            {fetching ? (
                <Loader size="md" center content="Загрузка..." vertical />
            ) : (
                <div className="profile__flex">
                    <div className="profile-block profile__left-info">
                        <div className="profile__photo-wrapper">
                            <img src={"/uploads/users/" + user.user_avatar} alt="" />
                        </div>
                    </div>
                    <div className="profile-block profile__right-info">
                        <div className="profile__name">{user.user_firstname} {user.user_lastname}</div>
                        {
                            user.user_role === 2 ? (
                                <div className="profile__role" style={{ color: "red" }}>Администратор</div>
                            ) : (
                                <div className="profile__role">Пользователь</div>
                            )
                        }
                        <div className="profile__tabs">
                            <div className="profile__tab active">Информация</div>
                            <div className="profile__tab">Другое</div>
                        </div>
                        <div className="profile__data-block">
                            <div className="profile__data-name">Роль в системе</div>
                            <div className="profile__data-value">{user.user_role === 2 ? "Администратор" : "Пользователь"}</div>
                        </div>
                        <div className="profile__data-block">
                            <div className="profile__data-name">Дата регистрации</div>
                            <div className="profile__data-value">{joined}</div>
                        </div>
                        {loggedUserData && user._id === loggedUserData._id && (
                            <>
                                <hr />
                                <div className="profile__data-block">
                                    <div className="profile__data-name">Почта</div>
                                    <div className="profile__data-value">{user.user_email}</div>
                                </div>
                                <div className="profile__data-block">
                                    <div className="profile__data-name">Логин</div>
                                    <div className="profile__data-value">{user.user_login}</div>
                                </div>
                            </>
                        )}
                    </div>
                    {loggedUserData && user._id === loggedUserData._id && (
                        <Link className="profile__edit-button" to="#">Редактировать</Link>
                    )}
                </div>
            )}
        </div>
    )
}