import  characters_json from '../data/characters.json'
import { ADD_CHARACTER } from '../actions/index';

function characters(state = characters_json, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(i => i.id !== action.id);
      return characters;
    default:
      return state;
  }
}

export default characters;