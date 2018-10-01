import React from 'react';
import PropTypes from 'prop-types';

const PlayerDot = ({
  player,
  className,
  side,
  mouseEnter,
}) => (
  <div key={player.id} className={className}>
    <div
      className={`player-wrapper ${side}-colour ${player.id}`}
      onMouseEnter={e => mouseEnter(player, side, e)}
    >
      <h4>{player.position}</h4>
    </div>
  </div>
);

PlayerDot.propTypes = {
  player: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
  mouseEnter: PropTypes.func.isRequired,
};

export default PlayerDot;
