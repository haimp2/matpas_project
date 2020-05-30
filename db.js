const {Pool} = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "1973",
    host: "localhost",
    port: 5432,
    database: "matpas"
})

module.exports = pool;