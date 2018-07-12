import {combineReducers} from 'redux';
import dateFilter from './dateFilter';
import typeFilter from './typeFilter';
import isFetching from './isFetching';
import data from './data';

export default combineReducers({
    typeFilter, dateFilter, isFetching, data
});