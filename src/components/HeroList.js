import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

function mapStateToProps(state) {
  return {
    heros: state.heros
  };
}

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Heros</h4>
        <ul className='list-group'>
          {
            this.props.heros.map(h => {
              return (
                <li key={h.id} className='list-group-item'>
                  <div className='list-item'>{h.name}</div>
                  <div className='list-item right-button'
                    onClick={() => this.props.removeCharacterById(h.id)}>
                  -
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { removeCharacterById }
)(HeroList);