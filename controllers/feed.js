const pool = require('../db');
const fs = require('fs');

exports.getPosts = async (req, res, next) => {
    res.status(200).json({
        msg: "ok!"
    });

    try{
        let results = await pool.query("SELECT * FROM mytable1");
        fs.writeFile('test.csv', JSON.stringify(results.rows), ()=>{console.log('file created!')})
    }catch(err){
        console.log(err);
    }
    
};