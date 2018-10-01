import {
  REQUEST_GAMES,
  RECEIVE_GAMES,
  RECEIVE_TEAM_ENUM,
  REQUEST_TEAM_ENUM,
  LOAD_TOOLTIP,
  HIDE_TOOLTIP,
  SHOW_TEAM_INFO,
  HIGHLIGHT_PLAYER,
  UNHIGHLIGHT_PLAYER,
  API_URL,
  TOKEN,
} from '../constants/action-types';

// TODO: refactor and split into there own files
export const highLightPlayer = (player, side) => ({ type: HIGHLIGHT_PLAYER, player, side });
export const unhighLightPlayer = () => ({ type: UNHIGHLIGHT_PLAYER });

export const showTeamInfo = side => ({ type: SHOW_TEAM_INFO, side });

export const loadToolTip = (player, side, cords) => ({
  type: LOAD_TOOLTIP,
  player,
  side,
  cords,
});
export const hideToolTip = () => ({ type: HIDE_TOOLTIP });

// players sync actions
export const requestPlayers = action => ({ type: action });
export const receviePlayers = (team, json) => ({
  type: team,
  data: json,
});

function buildURLs(teams) {
  const urls = teams.map(team => (
    team.players.map(player => `${API_URL}players?playerId=${player.playerId}`)
  ));

  return urls;
}

function mergeTeamList(currentList, newData) {
  return currentList.players.map((player, idx) => (
    Object.assign({}, player, newData[idx])
  ));
}

function getData(urls, team, teamData, dispatch) {
  dispatch(requestPlayers(REQUEST_TEAM_ENUM[team]));
  Promise.all(urls.map(url =>
    fetch(`${url}&token=${TOKEN}`).then(
      resp => resp.json(),
      error => console.log(error)
    )))
    .then(json => (
      dispatch(receviePlayers(RECEIVE_TEAM_ENUM[team],
        mergeTeamList(teamData[team], json)))
    ));
}


export function fetchPlayers(json) {
  return (dispatch) => {
    const urlsList = buildURLs(json.teams);
    urlsList.map((urls, idx) => getData(urls, idx, json.teams, dispatch));
  };
}

// Matches sync actions
export const requestGames = fixture => ({ type: REQUEST_GAMES, payload: fixture });
export const recevieGames = json => ({
  type: RECEIVE_GAMES,
  data: json,
});

// matches async actions
export function fetchMatches(fixture) {
  return (dispatch) => {
    dispatch(requestGames(fixture));

    return fetch(`${API_URL}fixtures?fixtureId=${fixture}&token=${TOKEN}`, {
    })
      .then(
        response => response.json(),
        error => console.error(error)
      )
      .then(async (json) => {
        dispatch(fetchPlayers(json));
        return dispatch(recevieGames(json));
      });
  };
}
