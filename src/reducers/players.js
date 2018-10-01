import {
  RECEIVE_TEAM_ENUM,
  REQUEST_TEAM_ENUM,
} from '../constants/action-types';

const initialState = {
  home: { isFetching: false },
  away: { isFetching: false },
};

function updateFetch(item, state) {
  return Object.assign({}, state, {
    [item]: Object.assign({}, state[item], { isFetching: true }),
  });
}

function updatePlayers(item, state, data) {
  return Object.assign({}, state, {
    [item]: Object.assign({}, state[item], {
      isFetching: false,
      players: data,
    }),
  });
}

export default function players(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TEAM_ENUM[0]: // REQUEST_HOME_PLAYERS
      return updateFetch('home', state);
    case REQUEST_TEAM_ENUM[1]: // REQUEST_AWAY_PLAYERS
      return updateFetch('away', state);
    case RECEIVE_TEAM_ENUM[0]: // RECEIVE_HOME_PLAYERS
      return updatePlayers('home', state, action.data);
    case RECEIVE_TEAM_ENUM[1]: // RECEIVE_AWAY_PLAYERS
      return updatePlayers('away', state, action.data);
    default:
      return state;
  }
}
