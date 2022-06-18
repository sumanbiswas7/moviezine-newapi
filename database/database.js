const Pool = require("pg").Pool;
require("dotenv").config();

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.USER_PASSWORD,
  database: process.env.DATABASE,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = { db };
