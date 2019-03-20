import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    heros: state.heros
  };
}

class SquadStats extends Component {
  strength() {
    let strength = 0;
    this.props.heros.forEach(h => strength += h.strength);
    return strength;
  }

  intelligence() {
    let intelligence = 0;
    this.props.heros.forEach(h => intelligence += h.intelligence);
    return intelligence;
  }

  speed() {
    let speed = 0;
    this.props.heros.forEach(h => speed += h.speed);
    return speed;
  }

  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
          <div>
            <b>Overal strength:</b> { this.strength() }
          </div>
          <div>
            <b>Overal intelligence:</b> { this.intelligence() }
          </div>
          <div>
            <b>Overal speed:</b> { this.speed() }
          </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(SquadStats);