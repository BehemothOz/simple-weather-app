import { combineReducers } from 'redux';
import theme from './theme';
import selectedCity from './city';
import weather from './weather';
import loading from './loading';

export default combineReducers({
  theme,
  selectedCity,
  weather,
  loading
});
