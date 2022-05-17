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
  }

  type Query {
    movies: [Movie]
  }
`;

module.exports = { typeDefs };
