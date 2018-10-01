import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from './components/Loading';
import Fixture from './components/Fixture';
import './styles/index.css';
import './styles/App.css';

const mapStateToProps = state => (
  { isFetching: state.matches.isFetching }
);

const ConnectedApp = ({ isFetching }) => (
  <div className="App">
    {isFetching ? <Loading /> : <Fixture />}
  </div>
);

const App = connect(mapStateToProps)(ConnectedApp);

ConnectedApp.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};

export default App;
