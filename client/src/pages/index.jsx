import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Categories } from "../components/Shop/Categories";
import { Header } from "../components/Shop/Header";
import { getRandomColor } from "../scripts/Colorizer";

export const Index = (props) => {
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
    const [adsClassList, setAdsClassList] = useState(defaultClassState);

    /* Window resize handler */
    useEffect(() => {
        window.addEventListener("resize", windowResize);
        windowResize();

        /* No need to set dependencies, it works anyways */
        // eslint-disable-next-line
    }, []);

    const windowResize = () => {
        if (window.innerWidth <= 1000) {
            setAdsClassList([...adsClassList, 'block-vertical']);
        }
        else {
            setAdsClassList(defaultClassState);
        }
    }
    return (
        <div className="wrapper">

            <Header />

            <div className="shop-grid-row">
                <Categories />

                <div className="index__main-content">
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
        </div>
    )
}