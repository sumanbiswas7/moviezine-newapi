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
      const {
        movie_name,
        movie_director,
        movie_release,
        movie_rating,
        movie_image,
        movie_description,
        movie_type,
        movie_casts,
        movie_fk,
      } = args.movie;
      await db.query(queries.addmovie, [
        movie_name,
        movie_director,
        movie_release,
        movie_image,
        movie_description,
        movie_type,
        movie_rating,
        movie_casts,
        movie_fk,
      ]);
      return "Movie added";
    },

    addUser: async (parents, args, ctx) => {
      const {
        user_name,
        user_password,
        user_email,
        user_profile,
        user_country,
      } = args.user;

      await db.query(queries.adduser, [
        user_name,
        user_password,
        user_email,
        user_profile,
        user_country,
      ]);

      return "User added";
    },
  },
};

module.exports = { resolvers };
