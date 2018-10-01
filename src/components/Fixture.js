import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import LineUp from './LineUp';
import TeamInfo from './TeamInfo';
import { showTeamInfo } from '../actions';
import '../styles/Fixture.css';

const mapStateToProps = state => (
  {
    teamInfo: state.teamInfo,
    players: state.players,
  }
);

class FixtureConnect extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(side) {
    const { dispatch } = this.props;
    dispatch(showTeamInfo(side));
  }

  render() {
    const {
      teamInfo,
      players,
    } = this.props;
    return (
      <div className="wrapper">
        { teamInfo.show ? (
          <TeamInfo
            side={teamInfo.side}
            players={players[teamInfo.side]}
          />) : ''}
        <LineUp />
        <Header onClick={this.onClick} />
      </div>
    );
  }
}

FixtureConnect.propTypes = {
  teamInfo: PropTypes.instanceOf(Object).isRequired,
  players: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const Fixture = connect(mapStateToProps)(FixtureConnect);

export default Fixture;
