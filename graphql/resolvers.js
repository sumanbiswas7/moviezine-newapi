const { db } = require("../database/database");
const { queries } = require("../database/queries");

const resolvers = {
  Query: {
    getmovies: async () => {
      const res = await db.query(queries.getmovies);
      return res.rows;
    },
    getusers: async () => {
      const res = await db.query(queries.getusers);
      return res.rows;
    },
    movies: async () => {
      const res = await db.query(queries.movies);
      return res.rows;
    },
  },
};

module.exports = { resolvers };
