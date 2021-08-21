import React from "react";
import "./style.scss";

export const Form = ({
    children = "",
    method = "POST"
}) => {

    const styles = {
        formWrapper: {
            maxWidth: 600,
            margin: "30px auto"
        },
        form: {
            padding: "50px 30px",
            marginTop: 20,
            borderRadius: 3,
            border: "1px solid #999",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }
    }

    return (
        <div style={styles.formWrapper}>
            <form style={styles.form} method={method}>
                {children}
            </form>
        </div>
    )
}