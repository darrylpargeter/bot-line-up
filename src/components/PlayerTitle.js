import React from 'react';
import PropTypes from 'prop-types';

const PlayerTitle = ({
  player,
  side,
  teamInfo,
  mouseLeave,
  mouseEnter,
}) => {
  const positionClassList = `position ${side}-colour`;
  const nameColourClass = `name ${side}-lighter`;
  const mainClass = `player-card-title ${teamInfo ? 'team-info' : ''}`

  return (
    <div
      className={mainClass}
      onMouseEnter={e => mouseEnter(player, e)}
      onMouseLeave={mouseLeave}
    >
      <div className={positionClassList}>
        <h4>{player.position}</h4>
      </div>
      <div className={nameColourClass}>
        <h4>{player.name}</h4>
      </div>
    </div>
  );
};

PlayerTitle.propTypes = {
  player: PropTypes.instanceOf(Object).isRequired,
  side: PropTypes.string.isRequired,
  teamInfo: PropTypes.string,
  mouseEnter: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
};

PlayerTitle.defaultProps = {
  teamInfo: '',
};

export default PlayerTitle;
