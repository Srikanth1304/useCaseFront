const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'M1racle@123',
  database: 'Hack'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});



// POST route to handle patient data
app.post('/details', (req, res) =>{
  const {firstName,lastName,company,email,phoneNumber,message } = req.body;


  const query = 'INSERT INTO Query (firstName, lastName, company, email, phoneNumber, message) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [firstName,lastName,company,email,phoneNumber,message ], (err, result) => {
    if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Error executing query');
        }
        else{

          console.log(result)
          res.status(201).send(' Query added to database');
        }
  });
});

app.post('/getdetails', (req, res) =>{


  const query = 'select *from Query';
  db.query(query, [firstName,lastName,company,email,phoneNumber,message ], (err, result) => {
    if (err) {
        console.error('Error executing query: ' + err.stack);
        return res.status(500).send('Error executing query');
        }
        else{
          console.log(result)
          res.status(201).send(result);
        }
  });
});



// Start server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});