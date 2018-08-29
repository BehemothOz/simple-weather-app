import { combineReducers } from 'redux';
import theme from './theme';
import counter from './counter';

export default combineReducers({
  theme,
  counter: counter
});
