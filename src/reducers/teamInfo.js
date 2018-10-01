import { SHOW_TEAM_INFO } from '../constants/action-types';

const initialState = {
  side: '',
  show: false,
};

export default function teamInfo(state = initialState, action) {
  switch (action.type) {
    case SHOW_TEAM_INFO:
      return Object.assign({}, state, {
        side: action.side,
        show: state.show && state.side === action.side ? false : true,
      });
    default:
      return state;
  }
}
