const Pool = require("pg").Pool;
require("dotenv").config();

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.USER_PASSWORD,
  database: process.env.DATABASE,
  port: 5432,
  connectionString:
    "postgres://mtzcqnjwragjen:6eec39dbd5deda0ca6bb0762fc948bbbc70ae8bec104e10865fbd05414cf18c1@ec2-3-224-8-189.compute-1.amazonaws.com:5432/d5k3tvrqtci2d8",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = { db };
