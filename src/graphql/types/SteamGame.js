'use strict';

const GraphQL = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = GraphQL;


const SteamGameType = new GraphQL.GraphQLObjectType({
  name: 'SteamGame',
  description: 'Steam Game Type, for all the users stats present in the game',

  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Name of the stat',
    },
    value: {
      type: GraphQLInt,
      description: 'Current value of the stat',
    }
  })
})


module.exports = SteamGameType;
