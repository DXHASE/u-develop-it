const mysql = require('mysql2');

//Connect to database (MySQL)
const db = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'Apaches0',
        database:'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;