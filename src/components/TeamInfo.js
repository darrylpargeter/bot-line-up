import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlayerTitle from './PlayerTitle';
import {
  highLightPlayer,
  unhighLightPlayer,
} from '../actions';
import '../styles/TeamInfo.css';

class TeamInfoConnect extends React.Component {
  constructor(props) {
    super(props);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter(player) {
    const { dispatch, side } = this.props;
    dispatch(highLightPlayer(player, side));
  }

  mouseLeave() {
    const { dispatch } = this.props;
    dispatch(unhighLightPlayer());
  }

  render() {
    const { side, players } = this.props;
    const style = `${side}-team team-list`;
    const wrapperStyle = `team-wrapper ${side}-side`;
    return (
      <div className={wrapperStyle}>
        <div className={style}>
          {players.players.map(player => (
            <PlayerTitle
              player={player}
              side={side}
              key={player.id}
              teamInfo=""
              mouseEnter={this.mouseEnter}
              mouseLeave={this.mouseLeave}
            />
          ))}
        </div>
      </div>
    );
  }
}

TeamInfoConnect.propTypes = {
  dispatch: PropTypes.func.isRequired,
  side: PropTypes.string.isRequired,
  players: PropTypes.instanceOf(Object).isRequired,
};

const TeamInfo = connect()(TeamInfoConnect);

export default TeamInfo;
