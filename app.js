const express = require('express');
const mysql = require('mysql');
const app = express()

// create a connection and connect it 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

db.connect((err) => {
    if (err) throw err;
    console.log('mysql is connected successfully...');
});

// create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database created successfully...');
    })
})

// create Table 

app.get('/createPostTable', (req, res) => {
    let sql = 'CREATE TABLE Posts (id int Auto_increment primary key,title varchar(255), body varchar(255))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('posts table created successfully..');
    })
})




app.listen(process.env.PORT || 5000, () => console.log('server is running'));