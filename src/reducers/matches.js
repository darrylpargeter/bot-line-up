import {
  REQUEST_GAMES,
  RECEIVE_GAMES,
} from '../constants/action-types';

const teamObject = {
  name: '',
  homeTeam: false,
  formation: '',
};

const initialState = {
  isFetching: false,
  date: '',
  location: '',
  home: teamObject,
  away: teamObject,
};

export default function matches(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GAMES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_GAMES:
      return Object.assign({}, state, {
        isFetching: false,
        location: action.data.location,
        date: action.data.date,
        home: action.data.teams[0],
        away: action.data.teams[1],
      });
    default:
      return state;
  }
}
