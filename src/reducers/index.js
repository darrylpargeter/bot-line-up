import { combineReducers } from 'redux';
import matches from './matches';
import players from './players';
import model from './model';
import teamInfo from './teamInfo';

const rootReducer = combineReducers({
  matches,
  players,
  model,
  teamInfo,
});

export default rootReducer;
