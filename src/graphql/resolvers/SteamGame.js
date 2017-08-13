'use strict';

const axios = require('axios');

const SteamGameController = {
  index: (args) => {
    const URL = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key=47106407E0E1AB8092EA0C4597C1EF10&steamid=${args.steamid}&appid=${args.appid}';

    return axios.get(URL)
        .then((response) => {
          const __gameStats = [];
          const gameStats = response.data.playerstats.stats;

          gameStats.map();
        })
        .catch((error) => {
          return { error: error }
        });
  }
}


module.exports = SteamGameController;
