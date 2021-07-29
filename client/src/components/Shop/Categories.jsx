import React from "react";
import { Link } from "react-router-dom";

export const Categories = () => {

    /** General styles for the component */
    const styles = {
        title: {
            fontSize: 24,
            fontWeight: '400',
            margin: '0 0 10px 0',
        },
        item: {
            listStyleType: 'none',
            margin: '5px 0'
        }
    }

    /**
        Perfectly, we need to get this data from the server to 
        be sure that the list is full, but that's fine so far.
    */
    const categoryList = [
        {
            title: "Телефоны",
            link: "/search/телефон"
        },
        {
            title: "Планшеты",
            link: "/search/планшет"
        },
        {
            title: "Игровые приставки",
            link: "/search/приставка"
        },
        {
            title: "Джойстики",
            link: "/search/джойстик"
        }
    ]

    return (
        <div>
            <div style={styles.title}>Категории</div>
            <ul>
                {
                    categoryList.map((category) => (
                        <li style={styles.item} key={category.title}>
                            <Link to={category.link}>{category.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}