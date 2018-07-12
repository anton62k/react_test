import { combineReducers } from 'redux';
import dateFilter from './dateFilter';
import typeFilter from './typeFilter';
import isFetching from './isFetching';
import data from './data';
import texts from './texts';

export default combineReducers({
  typeFilter, dateFilter, isFetching, data, texts,
});
