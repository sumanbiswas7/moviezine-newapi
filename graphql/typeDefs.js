const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    movie_id: String
    movie_name: String!
    movie_director: String!
    movie_release: Int!
    movie_rating: Float
    movie_image: String
    movie_description: String
    movie_type: String
    movie_cast: String
    movie_fk: Int!
  }

  type User {
    user_id: String!
    user_name: String!
    user_email: String
    user_password: String
    user_country: String
  }

  type JoinedMovie {
    user_id: String!
    user_name: String!
    user_email: String
    user_password: String
    user_country: String
    movie_id: String
    movie_name: String!
    movie_director: String!
    movie_release: Int!
    movie_rating: Float
    movie_image: String
    movie_description: String
    movie_type: String
    movie_cast: String
    movie_fk: Int!
  }

  type Query {
    getmovies: [Movie]
    getusers: [User]
    movies: [JoinedMovie]
  }
`;

module.exports = { typeDefs };
