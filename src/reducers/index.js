import { combineReducers } from 'redux';
import characters from './characters_reducer';
import heros from './heros_reducer';

const rootReducers = combineReducers({
  characters,
  heros,
});

export default rootReducers;