import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h4>Characters</h4>
        <ul className='list-group'>
        {
          this.props.characters.map(c => {
            return (
              <li key={c.id} className='list-group-item'>
                <div className='list-item'>{c.name}</div>
                <div className='list-item right-button'
                  onClick={() => this.props.addCharacterById(c.id)}>
                +
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addCharacterById}, dispatch);
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  {addCharacterById}
)(CharacterList);