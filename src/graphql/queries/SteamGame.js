'use strict';

const GraphQL = require('graphql');
const {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} = GraphQL;


const SteamGameType = require('../types/SteamGame');

const SteamGameResolver = require('../resolvers/SteamGame');


module.exports = {
  index() {
    return {
      type: new GraphQLList(SteamGameType),
      description: 'This will return all the users stats found in the game',
      args: {
        steamid: {
          type: GraphQLString,
          description: 'Please enter a steamid',
        },
        appid: {
          type: GraphQLString,
          description: 'Please enter an appid',
        }
      },
      resolve(parent, args, context, info) {
        return SteamGameResolver.index(args);
      }
    }
  },
};
