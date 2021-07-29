import React from "react";

export const NotFound = () => {

    const styles = {
        wrapperNf: {
            maxWidth: 800,
            display: "flex",
            height: "80vh",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 36
        },
        nfCode: {
            fontWeight: "600"
        },
        nfSlash: {
            margin: "0 5px"
        }
    }

    return (
        <div className="wrapper" style={styles.wrapperNf}>
            <div style={styles.nfCode}>404</div>
            <div style={styles.nfSlash}>|</div>
            <div>Not Found</div>
        </div>
    )
}