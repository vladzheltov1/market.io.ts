export const server = {
    IP: process.env.IP || "localhost",
    PORT: process.env.PORT || '5000',
    PROTOCOL: "http"
}

export const adress = server.PROTOCOL+"://"+server.IP+":"+server.PORT;