const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'data1',
  password:'asdg234gh',
  port:3306
});

module.exports = connection