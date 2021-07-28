import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";
import { useAuth } from "../hooks/useAuth";

export const Index = (props) => {

    /* Colors to choose as a background */
    const colors = ["#f1f7fc", "#f9f4f4", "#f6f6f6", "#fcf4f0", "#EBEAFB", "#F7D9CF"];
    /* Select random color */
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length - 1)];


    const trendingData = [
        {
            title: "Телефоны",
            link: "/search/телефон",
            image: "/uploads/products/iphone.png"
        },
        {
            title: "Джойстики",
            link: "/search/джойстик",
            image: "/uploads/products/dualshock.png"
        },
        {
            title: "Мониторы",
            link: "/search/монитор",
            image: "/uploads/products/monitor.png"
        },
        {
            title: "Клавиатуры",
            link: "/search/клавиатура",
            image: "/uploads/products/keyboard.png"
        },
    ]

    const defaultClassState = ['index__block', 'index__block-ads'];
    /* Search field value */
    const [searchValue, setSearchValue] = useState('');
    const [adsClassList, setAdsClassList] = useState(defaultClassState);

    /* Auth data */
    const { userData } = useAuth();

    /* Window resize handler */
    useEffect(() => {
        window.addEventListener("resize", windowResize);
        windowResize();
    }, []);

    const windowResize = () => {
        if (window.innerWidth <= 1000) {
            setAdsClassList([...adsClassList, 'block-vertical']);
        }
        else {
            setAdsClassList(defaultClassState);
        }
    }

    /* Tips fetching for search */
    const fetchData = (() => {
        // if (value.trim().length !== 0 && !value.includes(prevValue)) {
        //     setPrevValue(value);

        //     const response = request("/api/search")
        // }
    });


    /* Works out when the text is being typed */
    const handleChange = ((event) => {
        setSearchValue(event.target.value);

        /* We don't need to send a request if its value is too short */
        if (searchValue.length >= 2) {
            fetchData();
        }
    });

    /* This function redirects the user to the search page when Enter is pressed */
    const handlePress = (event => event.key === 'Enter' && props.history.push('/search/' + searchValue));

    return (
        <div className="wrapper index-wrapper">

            <div className="index__left-bar">
                <div className="index__left-bar__title">Категории</div>
                <ul className="index__category-list">
                    <li className="index__category-list__item">
                        <Link to={"/search/телефон"}>Телефоны</Link>
                    </li>
                    <li className="index__category-list__item">
                        <Link to={"/search/планшет"}>Планшеты</Link>
                    </li>
                    <li className="index__category-list__item">
                        <Link to={"/search/приставка"}>Игровые приставки</Link>
                    </li>
                    <li className="index__category-list__item">
                        <Link to={"/search/джойстик"}>Джойстики</Link>
                    </li>
                </ul>
            </div>

            <div className="index__main-content">
                <div className="index__header">
                    <div className="index__header-group">
                        <input
                            value={searchValue}
                            onChange={handleChange}
                            onKeyDown={handlePress}
                            placeholder="Поиск"
                            className="index__header__element index__search-field"
                        />
                        <Link to={"/search/" + searchValue} className="index__header__element">
                            <Icon icon="search" />
                        </Link>
                    </div>
                    <div className="index__header-group">
                        {userData ? (
                            <Link to={"/profile/" + userData._id} className="index__header__element">
                                <Icon icon="user" />
                            </Link>
                        ) : (
                            <Link to={"/login/"} className="index__header__element">
                                <Icon icon="user" />
                            </Link>
                        )}
                    </div>
                </div>
                <div className="index__ads">
                    <Link to="/shop" className={adsClassList.join(' ') + " background-grad1"}>
                        <div className="index__block-content">
                            <div className="index__block__title">Скидки!</div>
                            <div className="index__block__text">Самые популярные товары теперь ещё девешле!</div>
                        </div>
                        <div className="index__block-image">
                            <img src="https://clipart-best.com/img/headphones/headphones-clip-art-3.png" alt="" />
                        </div>
                    </Link>
                    <div className="index__ads__small-block">
                        <Link to="/shop" className="index__block index__small-block background-grad2">
                            Скидки на наушники до 30%!
                        </Link>
                        <Link to="/shop" className="index__block index__small-block background-grad3">
                            Ещё текст здесь
                        </Link>
                    </div>
                </div>
                <div className="index__trending">
                    <h3 className="index__trending__title">Популярное</h3>
                    <div className="index__trending__container">
                        {
                            trendingData.map((item) => (
                                <Link to={item.link} className="index__block block-vertical" style={{ background: getRandomColor() }}>
                                    <div className="index__block-content">
                                        <div className="index__block__text">{item.title}</div>
                                    </div>
                                    <div className="index__block-image">
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}