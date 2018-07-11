import {ACTION_SELECT_TYPE_FILTER, TypeFilter} from "../actions/index";

const typeFilter = (state = TypeFilter.YIELD, action) => {

    switch (action.type) {

        case ACTION_SELECT_TYPE_FILTER:
            return action.filter;

        default:
            return state;
    }

};

export default typeFilter