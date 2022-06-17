const queries = {
  getmovies: "SELECT * FROM movies",
  randommovies: "SELECT * FROM movies ORDER BY random() LIMIT $1",
  getusers: "SELECT * FROM users",
  addmovie: `INSERT INTO movies 
              (movie_name, movie_director, movie_release, movie_image,
              movie_description, movie_type, movie_rating, movie_casts, movie_fk)
              VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
  movies:
    " SELECT * FROM movies LEFT JOIN users ON movies.movie_fk = users.user_id",
  movie: "SELECT * FROM movies WHERE movie_id = $1",
  adduser:
    "INSERT INTO users (user_name,user_password,user_email,user_profile,user_country) VALUES ($1,$2,$3,$4,$5)",
  updateuser:
    "UPDATE users SET user_name = $1, user_email = $2, user_country = $3, user_profile = $4 WHERE user_id = $5",

  updatemovie: `UPDATE movies
                  SET movie_name = $1, movie_director = $2, movie_release = $3, movie_image = $4,
                  movie_description = $5, movie_type = $6, movie_rating = $7, movie_casts = $8 
                  WHERE movie_id = $9`,

  deletemovie: "DELETE FROM movies WHERE movie_id = $1",

  like: {
    likes:
      "SELECT * FROM likes INNER JOIN users ON likes.like_user_fk = users.user_id",

    ifLikeExist:
      "SELECT * FROM likes WHERE like_user_fk = $1 AND like_movie_fk = $2",

    delete: "DELETE FROM LIKES WHERE like_movie_fk = $1 AND like_user_fk = $2",

    movieCount: "UPDATE movies SET movie_like_arr = $1 WHERE movie_id = $2",

    addLike:
      "INSERT INTO likes (like_movie_fk, like_user_fk, like_timestamp) VALUES ($1,$2,$3)",
  },

  comment: {
    comments: `SELECT * FROM comments
                  INNER JOIN users ON
                  comments.comment_user_fk = users.user_id
                  WHERE comments.comment_movie_fk = $1`,

    addComment: `INSERT INTO comments
                  (comment_movie_fk, comment_user_fk, comment_text, comment_timestamp)
                  VALUES ($1, $2, $3, $4)`,

    movieCount: "UPDATE movies SET movie_comment_arr = $1 WHERE movie_id = $2",

    deleteComment: "DELETE FROM comments WHERE comment_id = $1",

    getAllComments: "SELECT * FROM comments",
  },
};

module.exports = { queries };
