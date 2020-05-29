const express = require('express');
const bodyParser = require('body-parser');
const {Client} = require('pg');

const fs = require('fs');

const client = new Client({
    user: "postgres",
    password: "1973",
    host: "localhost",
    port: 5432,
    database: "matpas"
})

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();

})

app.use('/feed', feedRoutes);

client.connect()
.then(result =>{
    app.listen(3000);    
})
// .then(() => client.query("SELECT * FROM mytable1"))
// .then(results=> fs.writeFile('test.csv', JSON.stringify(results.rows), ()=>{}))
.catch(err => console.log(err))



