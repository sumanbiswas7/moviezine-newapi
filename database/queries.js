const queries = {
  getmovies: "SELECT * FROM movies",
  getusers: "SELECT * FROM users",
  addmovie:
    "INSERT INTO movies (movie_name, movie_director, movie_release, movie_image, movie_description, movie_type, movie_rating, movie_casts, movie_fk) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
  movies:
    " SELECT * FROM movies LEFT JOIN users ON movies.movie_fk = users.user_id",
};

module.exports = { queries };
