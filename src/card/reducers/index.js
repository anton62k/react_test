import {combineReducers} from 'redux';
import dateFilter from './DateFilter';
import typeFilter from './TypeFilter';

export default combineReducers({
    typeFilter, dateFilter
});