const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    movie_id: Int
    movie_name: String!
    movie_director: String!
    movie_release: Int!
    movie_rating: Float
    movie_image: String
    movie_description: String
    movie_type: String
    movie_casts: String
    movie_fk: Int!
    movie_like_arr: [Int]
    movie_comment_arr: [Int]
  }

  type User {
    user_id: Int!
    user_name: String!
    user_email: String
    user_password: String
    user_country: String
    user_profile: String
  }

  type MovieUser {
    user_id: Int!
    user_name: String!
    user_email: String
    user_password: String
    user_country: String
    user_profile: String
    movie_id: Int!
    movie_name: String!
    movie_director: String!
    movie_release: Int!
    movie_rating: Float
    movie_image: String
    movie_description: String
    movie_type: String
    movie_casts: String
    movie_fk: Int!
    movie_like_arr: [Int]
    movie_comment_arr: [Int]
  }

  type UserLike {
    user_id: Int
    user_name: String
    user_email: String
    user_password: String
    user_country: String
    user_profile: String
    like_id: Int
    like_movie_fk: Int
    like_user_fk: Int
    like_timestamp: String
  }
  type Comment {
    comment_id: Int
    comment_movie_fk: Int!
    comment_user_fk: Int!
    comment_text: String!
    comment_timestamp: String!
    user_id: Int!
    user_name: String!
    user_email: String
    user_password: String
    user_country: String
    user_profile: String
  }

  input addMovie {
    movie_name: String!
    movie_director: String!
    movie_release: Int!
    movie_rating: Float
    movie_image: String
    movie_description: String
    movie_type: String
    movie_casts: String
    movie_fk: Int!
  }

  input addUser {
    user_name: String!
    user_password: String!
    user_email: String
    user_country: String
    user_profile: String
  }

  input updateUser {
    ID: Int
    user_name: String!
    user_email: String
    user_country: String
    user_profile: String
  }
  input updateMovie {
    ID: Int!
    movie_name: String
    movie_director: String
    movie_release: Int
    movie_rating: Float
    movie_image: String
    movie_description: String
    movie_type: String
    movie_casts: String
  }

  input likeMovie {
    user_id: Int!
    movie_id: Int!
    like_arr: [Int!]
  }
  input commentInput {
    comment_movie_fk: Int!
    comment_user_fk: Int!
    comment_text: String!
    comment_arr: [Int!]
    comment_timestamp: String
  }

  input deleteCommentInput {
    userId: Int!
    commentId: Int!
    commentArr: [Int!]
    movieId: Int!
  }

  type Query {
    getmovies: [Movie]
    getmovie(movieId: Int!): [Movie]
    randommovies(limit: Int!): [Movie]
    getusers: [User]
    movies: [MovieUser]
    likes: [UserLike]
    comments(movieId: Int!): [Comment]
  }

  type Mutation {
    likeMovie(likeData: likeMovie!): String

    addMovie(movie: addMovie!): String
    addUser(user: addUser!): String
    addComment(commentInput: commentInput!): String

    updateUser(user: updateUser!): String
    updateMovie(movie: updateMovie!): String

    deleteMovie(movieId: Int!): String
    deleteComment(delCommentInput: deleteCommentInput!): String
  }
`;

module.exports = { typeDefs };
