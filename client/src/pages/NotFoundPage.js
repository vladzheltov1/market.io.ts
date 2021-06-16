export const NotFoundPage = () => {

    const styles = {
        wrapperNf: {
            maxWidth: "800px",
            display: "flex",
            height: "70vh",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "36px"
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