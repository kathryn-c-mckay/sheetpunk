
const path = require('path');
const fs = require('fs');
charData = "";

fs.readFile('thebetween-allcharactersplaybooks.json', function(err, data){
    if (err) throw err;

    const jsonData = JSON.parse(data);
    charData = jsonData;
});


require('dotenv').config({
  override: true,
  path: path.join(__dirname, 'development.env')
});


    

const {Pool, Client} = require('pg');

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT
});

(async () => {
  const client = await pool.connect();
  try{
    const dataQuery = 'INSERT INTO betweencharacterinfo(json_data) VALUES($1); ';
    //const {rows} = await client.query("INSERT INTO countries (name, capitol, population) VALUES ('Japan', 'Tokyo', 9001);");
    //const {rows} = await client.query("SELECT * FROM countries");
    const dataInsert = await client.query(dataQuery, [charData]);
    console.log(dataInsert);
 }catch (err) {
  console.log(err);
 } finally {
  client.release();
 }
   
})();