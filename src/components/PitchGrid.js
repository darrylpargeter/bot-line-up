import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlayerDot from './PlayerDot';
import Player from './Player';
import {
  loadToolTip,
  hideToolTip,
} from '../actions';
import '../styles/PitchGrid.css';

const mapStateToProps = state => (
  {
    model: state.model,
    matches: state.matches,
  }
);

class PitchGridConnect extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  onMouseLeave() {
    const { model, dispatch } = this.props;
    if (model.show) {
      dispatch(hideToolTip());
    }
  }

  onMouseEnter(player, side, { target: { clientWidth, offsetLeft, offsetTop } }) {
    const widthHalf = window.innerWidth / 2;
    const widthQuator = window.innerWidth / 4;
    const x = window.innerWidth - offsetLeft < 400 || offsetLeft > widthQuator && offsetLeft <= widthHalf ? offsetLeft - clientWidth - 100 : offsetLeft;
    const y = window.innerHeight - offsetTop < 220 ? offsetTop - 160 : offsetTop;
    const cords = [x, y];
    const { model, dispatch } = this.props;

    if (!model.show) {
      dispatch(loadToolTip(player, side, cords));
    }
  }

  getPlayersArray(home, away) {
    if (!home.isFetching && !away.isFetching) {
      const homeList = this.buildClassList(home, 'home');
      const awayList = this.buildClassList(away, 'away');
      const homeDomEl = this.buildDomElements(homeList, home, 'home');
      const awayDomEl = this.buildDomElements(awayList, away, 'away');
      const allDomEls = homeDomEl.concat(awayDomEl);

      return allDomEls;
    }

    return [];
  }

  buildDomElements(classList, { players }, side) {
    return classList.map((className, idx) => {
      const tmp = `${className} center`;
      return <PlayerDot
        key={players[idx].id}
        player={players[idx]}
        className={tmp}
        side={side}
        mouseEnter={this.onMouseEnter}
      />;
    });
  }

  buildClassList(team, type) {
    const classSet = new Set();
    const count = {};

    const list = team.players.map(player => `${type}-${player.position.toLowerCase()}`);
    list.forEach((className) => {
      if (!classSet.has(className)) {
        classSet.add(className);
        count[className] = 0;
      } else {
        classSet.add(`${className}-${count[className] + 1}`);
        count[className] += 1;
      }
    });

    return Array.from(classSet);
  }

  showHighLight() {
    const { model } = this.props;
    const e = {
      target: document.getElementsByClassName(model.highlight)[0],
    };

    this.onMouseEnter(model.player, model.side, e);
  }

  render() {
    const { model, home, away } = this.props;
    const playersArray = this.getPlayersArray(home, away);
    if (model.highlight) {
      this.showHighLight();
    } else if (!model.show) {
      this.onMouseLeave();
    }
    return (
      <div>
        <div className="pitch-grid">
          <CSSTransition
            in={model.show}
            timeout={200}
            classNames="player-card"
            onMountEnter
            unmountOnExit
          >
            <Player
              mouseLeave={this.onMouseLeave}
              player={model.player}
              side={model.side}
              cords={model.cords}
            />
          </CSSTransition>

          {playersArray}
        </div>
      </div>
    );
  }
}


const PitchGrid = connect(mapStateToProps)(PitchGridConnect);

PitchGridConnect.propTypes = {
  model: PropTypes.instanceOf(Object).isRequired,
  home: PropTypes.instanceOf(Object).isRequired,
  away: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default PitchGrid;
