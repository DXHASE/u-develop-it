const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

//GET a list of all candidates
// db.query(`SELECT * FROM candidates`, (err,rows) => {
//     console.log(rows);
// });

//GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err,row) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(row);
// });

//Delete a candidate   | 1 == extra param that "?" references
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, results) => {
// if(err){
//     console.log(err)
// }
// console.log(results);
// });

//Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
VALUES (?,?,?,?)`;

const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params,(err,result) => {
if(err){
    console.log(err)
}
console.log(result);
});

//Default response for any other request(Not Found)
app.use((req,res) => {
    res.status(404).end();
});