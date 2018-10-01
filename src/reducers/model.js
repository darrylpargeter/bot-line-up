import {
  LOAD_TOOLTIP,
  HIDE_TOOLTIP,
  HIGHLIGHT_PLAYER,
  UNHIGHLIGHT_PLAYER,
} from '../constants/action-types';

const initialState = {
  show: false,
  highlight: false,
  cords: [0, 0],
  player: {},
  side: 'home',
};

export default function model(state = initialState, action) {
  switch (action.type) {
    case HIGHLIGHT_PLAYER:
      return Object.assign({}, state, {
        highlight: action.player.id,
        player: action.player,
        side: action.side,
      });
    case UNHIGHLIGHT_PLAYER:
      return Object.assign({}, state, {
        highlight: false,
        show: false,
      });
    case LOAD_TOOLTIP:
      return Object.assign({}, state, {
        player: action.player,
        cords: action.cords,
        side: action.side,
        show: true,
      });
    case HIDE_TOOLTIP:
      return Object.assign({}, state, {
        show: false,
        player: {},
      });
    default:
      return state;
  }
}
