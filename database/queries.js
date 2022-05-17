const queries = {
  getmovies: "SELECT * FROM movies",
  getusers: "SELECT * FROM users",
  movies:
    " SELECT * FROM movies LEFT JOIN users ON movies.movie_fk = users.user_id",
};

module.exports = { queries };
