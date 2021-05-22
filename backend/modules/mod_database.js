var mysql = require('mysql2');
var dbConfig = JSON.parse(JSON.stringify(require('../configs/cfg_database.json')));
function CONNECT() {
    var connection = mysql.createConnection(dbConfig);
    if (connection) {
        console.log("Connection with the database established!");
    }
    if (!connection) {
        console.error("Can't connect to the database!");
        setTimeout(function () {
            CONNECT();
        }, 5000);
    }
    connection.on('error', function (e) {
        console.error("Failed to establish connection with the database!");
        console.error(e);
        setTimeout(function () {
            CONNECT();
        }, 5000);
    });
    module.exports = connection;
}
CONNECT();
