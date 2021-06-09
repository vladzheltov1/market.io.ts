export const dbConfig = {
    user: process.env.USER,
    password: process.env.PASS,
    host: process.env.HOST,
    database: process.env.DBNAME,
    waitForConnections: "true",
    connectionLimit: 10,
    queueLimit: 0
}