const Pool = require("pg").Pool;
require("dotenv").config();

const db = new Pool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.USER_PASSWORD,
  database: "moviezine",
  port: 5432,
});

module.exports = { db };
