import Config from '../config';

export const REQUEST_GAMES = 'REQUEST_GAMES';
export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const REQUEST_PLAYER = 'REQUEST_PLAYER';
export const RECEIVE_PLAYER = 'RECEIVE_PLAYER';
export const LOAD_TOOLTIP = 'LOAD_TOOLTIP';
export const HIDE_TOOLTIP = 'HIDE_TOOLTIP';

export const { TOKEN, API_URL } = Config;

export const RECEIVE_TEAM_ENUM = ['RECEIVE_HOME_PLAYERS', 'RECEIVE_AWAY_PLAYERS'];
export const REQUEST_TEAM_ENUM = ['REQUEST_HOME_PLAYERS', 'REQUEST_AWAY_PLAYERS'];

export const SHOW_TEAM_INFO = 'SHOW_TEAM_INFO';
export const HIGHLIGHT_PLAYER = 'HIGHLIGHT_PLAYER';
export const UNHIGHLIGHT_PLAYER = 'UNHIGHLIGHT_PLAYER';
