const { ApolloServer } = require("apollo-server");
const { db } = require("./database/database");
const { resolvers } = require("./graphql/resolvers");
const { typeDefs } = require("./graphql/typeDefs");

const server = new ApolloServer({
  resolvers,
  typeDefs,
  cors: {
    origin: "*",
    credentials: true,
  },
});

const PORT = process.env.PORT || 3999;
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});
