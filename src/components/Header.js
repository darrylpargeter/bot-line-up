import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/Header.css';

const mapStateToProps = state => (
  {
    home: state.matches.home,
    away: state.matches.away,
    teamInfo: state.teamInfo,
  }
);

const ConnectedHeader = ({
  home,
  away,
  teamInfo,
  onClick,
}) => {
  const homeTite = `${home.name} ${teamInfo.show && teamInfo.side === 'home' ? '-' : '+'}`;
  const awayTite = `${away.name} ${teamInfo.show && teamInfo.side === 'away' ? '-' : '+'}`;

  return (
    <div className="fixture-header">
      <div className="home" onClick={() => onClick('home')} role="button">
        <h1>{homeTite}</h1>
      </div>
      <div className="away" onClick={() => onClick('away')} role="button">
        <h1>{awayTite}</h1>
      </div>
    </div>
  );
};

const Header = connect(mapStateToProps)(ConnectedHeader);

ConnectedHeader.propTypes = {
  home: PropTypes.instanceOf(Object).isRequired,
  away: PropTypes.instanceOf(Object).isRequired,
  teamInfo: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Header;
