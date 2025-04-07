const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "82.197.82.176",
  user: "u732913924_evangadiuser",
  password: process.env.DB_PASSWORD,
  database: "u732913924_evangadidb",
});

module.exports = db.promise();
