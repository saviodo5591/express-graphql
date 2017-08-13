'use strict';

const GraphQL = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
} = GraphQL;


// import the queries
const SteamGameQuery = require('./queries/SteamGame');


// lets define our root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    games: SteamGameQuery.index(),
  },
});


//export the schema
module.exports = new GraphQLSchema({
  query: RootQuery,
});
