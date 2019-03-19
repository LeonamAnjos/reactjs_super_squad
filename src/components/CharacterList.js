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
        <ul>
        {
          this.props.characters.map(c => {
            return (
              <li key={c.id}>
                <div>{c.name}</div>
                <div onClick={() => this.props.addCharacterById(c.id)}>
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