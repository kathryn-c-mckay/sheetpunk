const path = require('path');
const fs = require('fs');
const express =  require('express');
const PORT = 3000;

const app = express();
charData = "";

fs.readFile('characters.json', function(err, data){
    if (err) throw err;

    const jsonData = JSON.parse(data);
    charData = jsonData;
});


require('dotenv').config({
  override: true,
  path: path.join(__dirname, 'development.env')
});


app.get('/api/players', (req, res) => {
    res.json(charData);
});


app.listen(PORT, () => {
    console.log('I am running :D');
});
