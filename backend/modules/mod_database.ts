const mysql = require('mysql2');
const dbConfig = JSON.parse(JSON.stringify(require('../configs/cfg_database.json')));

function CONNECT(): void{
    const connection = mysql.createConnection(dbConfig);

    if(!connection){
        console.error("Can't connect to the database!"); 

        setTimeout(function(){
            CONNECT();
        }, 5000);
    }

    connection.on('error', function(e){

        if(e.code == "PROTOCOL_CONNECTION_LOST"){
            console.error("Connection lost: The server closed the connection! Retrying in 5 seconds...");
        }
        else{
            console.error("Failed to establish connection with the database!");
            console.error(e);
        }

        setTimeout(function(){
            CONNECT();
        }, 5000);
    });
// 
    module.exports = connection;
}  

CONNECT();