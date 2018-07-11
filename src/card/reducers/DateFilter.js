import {ACTION_SELECT_DATE_FILTER, DateFilter} from "../actions/index";

const dateFilter = (state = DateFilter.WEEK, action) => {

    switch (action.type) {

        case ACTION_SELECT_DATE_FILTER:
            return action.filter;

        default:
            return state;
    }

};

export default dateFilter;