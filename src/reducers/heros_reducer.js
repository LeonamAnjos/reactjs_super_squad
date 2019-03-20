import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions/index';
import { createCharacter } from './helpers';

function heros(state = [], action) {
  switch(action.type) {
    case ADD_CHARACTER:
      return [...state, createCharacter(action.id)];
    case REMOVE_CHARACTER:
      return state.filter((c) => c.id !== action.id);
    default:
      return state;
  }
}

export default heros;