import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";
import { useAuth } from "../../hooks/useAuth";
import { Grid } from "../lib/sck";

export const Header = (props) => {

    const [searchValue, setSearchValue] = useState('');

    /* Auth data */
    const { userData } = useAuth();

    /* Search tips fetching */
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


    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 10
        },
        headerGroup: {
            display: 'flex',
            alignItems: 'center',
            gap: 15
        },
        headerItem: {
            borderRadius: 30,
            background: '#f0f2f4',
            color: "#333",
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            height: 40,
            padding: '0 12px',
            fontSize: 16,
            textDecoration: "none"
        },
        searchField: {
            border: 'none',
            padding: '0 20px',
            maxWidth: 500,
            textAlign: 'start',
        }
    }

    return (
        <Grid templateColumn="200px auto">
            <Link to="/" style={{ color: "#333", textDecoration: "none" }}><h2>Market.io</h2></Link>
            <div style={styles.container}>
                <div style={styles.headerGroup}>
                    <input
                        value={searchValue}
                        onChange={handleChange}
                        onKeyDown={handlePress}
                        placeholder="Поиск"
                        style={{ ...styles.headerItem, ...styles.searchField }}
                    />
                    <Link to={"/search/" + searchValue} style={styles.headerItem}>
                        <Icon icon="search" />
                    </Link>
                </div>
                <div style={styles.headerGroup}>
                    {userData ? (
                        <Link to={"/profile/" + userData._id} style={styles.headerItem} className="shop-header-profile-block">
                            <Icon icon="user" />
                            <div className="shop-header-profile-title">{userData.firstname + " " + userData.lastname}</div>
                        </Link>
                    ) : (
                        <Link to={"/login/"} style={styles.headerItem} className="shop-header-profile-block">
                            <Icon icon="user" />
                            <div className="shop-header-profile-title">Войти</div>
                        </Link>
                    )}
                </div>
            </div>
        </Grid>
    )
}