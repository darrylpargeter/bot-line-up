import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import Loading from './Loading';
import '../styles/Teams.css';

const Team = ({ team }) => (
  <div>
    {team.isFetching ? <Loading />
      : (
        <div className="team-wrapper">
          <div className="team-body">
            {team.players.map(player => (
              <Player player={player} key={player.id} />
            ))}
          </div>
        </div>)
    }
  </div>
);


Team.propTypes = {
  team: PropTypes.instanceOf(Object).isRequired,
};

export default Team;
