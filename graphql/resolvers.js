const { db } = require("../database/database");
const { queries } = require("../database/queries");

const resolvers = {
  Query: {
    movies: async () => {
      const res = await db.query(queries.getmovies);
      return res.rows;
    },
  },
};

module.exports = { resolvers };
