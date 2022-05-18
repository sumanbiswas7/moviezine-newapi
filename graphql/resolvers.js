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
  Mutation: {
    addMovie: async (parents, args, ctx) => {
      const data = args.movie;
      await db.query(queries.addmovie, [
        data.movie_name,
        data.movie_director,
        data.movie_release,
        data.movie_image,
        data.movie_description,
        data.movie_type,
        data.movie_rating,
        data.movie_casts,
        data.movie_fk,
      ]);
      return "Movie added";
    },

    addUser: async (parents, args, ctx) => {
      const data = args.user;

      await db.query(queries.adduser, [
        data.user_name,
        data.user_password,
        data.user_email,
        data.user_profile,
        data.user_country,
      ]);

      return "User added";
    },
    updateUser: async (parents, args, ctx) => {
      const data = args.user;

      await db.query(queries.updateuser, [
        data.user_name,
        data.user_email,
        data.user_country,
        data.user_profile,
        data.ID,
      ]);

      return "User updated";
    },

    updateMovie: async (parents, args, ctx) => {
      const data = args.movie;
      await db.query(queries.updatemovie, [
        data.movie_name,
        data.movie_director,
        data.movie_release,
        data.movie_image,
        data.movie_description,
        data.movie_type,
        data.movie_rating,
        data.movie_casts,
        data.ID,
      ]);
      return "Movie updated";
    },

    deleteMovie: async (parents, args, ctx) => {
      const movie_id = args.movieId;
      await db.query(queries.deletemovie, [movie_id]);
      return "Movie deleted";
    },
  },
};

module.exports = { resolvers };
