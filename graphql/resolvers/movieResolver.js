const { db } = require("../../database/database");
const { queries } = require("../../database/queries");

const movieResolver = async () => {
  const res = await db.query(queries.getmovies, (error, results) => {
    if (error) return error;
    return results.rows;
  });

  return res;
};

module.exports = { movieResolver };
