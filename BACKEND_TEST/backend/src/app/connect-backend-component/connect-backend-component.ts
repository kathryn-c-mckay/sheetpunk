import { Component } from '@angular/core'; 

const path = require('path');
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
    const {rows} = await client.query('SELECT * FROM countries');
    console.log(rows);
 }catch (err) {
  console.log(err);
 } finally {
  client.release();
 }
   
})();



@Component({
  selector: 'app-connect-backend-component',
  imports: [],
  templateUrl: './connect-backend-component.html',
  styleUrl: './connect-backend-component.css',
})
export class ConnectBackendComponent {

}
