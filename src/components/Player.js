import React from 'react';
import PropTypes from 'prop-types';
import PlayerTitle from './PlayerTitle';
import '../styles/Player.css';

class Player extends React.Component {
  onMouseEnter() {}
  onMouseLeave() {}

  render() {
    const {
      cords,
      mouseLeave,
      player,
      side,
    } = this.props;
    const location = {
      left: `${cords[0]}px`,
      top: `${cords[1]}px`,
    };
    return (
      <div className="player-card" style={location} onMouseLeave={mouseLeave}>
        <PlayerTitle
          player={player}
          side={side}
          mouseEnter={this.onMouseEnter}
          mouseLeave={this.onMouseLeave}
        />
        <div className="player-card-body">
          <div className="goals">
            <h3>Goals - {player.goals}</h3>
          </div>
          <div className="played">
            <h3>Played - {player.played}</h3>
          </div>
          <div className="yellowCard">
            <h3>{player.yellowCards}</h3>
          </div>
          <div className="redCard">
            <h3>{player.redCards}</h3>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.instanceOf(Object).isRequired,
  cords: PropTypes.instanceOf(Array).isRequired,
  side: PropTypes.string.isRequired,
  mouseLeave: PropTypes.func.isRequired,
};

export default Player;
