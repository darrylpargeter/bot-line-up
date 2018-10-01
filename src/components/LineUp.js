import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pitch from './Pitch';
import PitchGrid from './PitchGrid';
import '../styles/LineUp.css';

const mapStateToProps = state => (
  {
    home: state.players.home,
    away: state.players.away,
  }
);

const LineUpConntect = ({ home, away }) => (
  <div className="line-up">
    <PitchGrid home={home} away={away} />
    <Pitch />
  </div>
);

const LineUp = connect(mapStateToProps)(LineUpConntect);

LineUpConntect.propTypes = {
  home: PropTypes.instanceOf(Object).isRequired,
  away: PropTypes.instanceOf(Object).isRequired,
};

export default LineUp;
