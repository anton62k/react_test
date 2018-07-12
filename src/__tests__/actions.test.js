import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  DateFilter, fetchISIN, RECEIVE_ISIN, REQUEST_ISIN, SELECT_DATE_FILTER, SELECT_TYPE_FILTER, selectDateFilter,
  selectTypeFilter,
  TypeFilter
} from "../card/actions/index";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('should dispatch selectDateFilter', ()=>{
  const store = mockStore({});

  store.dispatch(selectDateFilter(DateFilter.YEAR));

  const actions = store.getActions();
  expect(actions).toEqual([{ type: SELECT_DATE_FILTER, filter: DateFilter.YEAR }]);

});

it('should dispatch selectTypeFilter', ()=>{
  const store = mockStore({});

  store.dispatch(selectTypeFilter(TypeFilter.PRICE));

  const actions = store.getActions();
  expect(actions).toEqual([{ type: SELECT_TYPE_FILTER, filter: TypeFilter.PRICE }]);
});

it('should dispatch fetchISIN', ()=>{
  const store = mockStore({typeFilter: TypeFilter.YIELD, dateFilter: DateFilter.MAX});

  return store.dispatch(fetchISIN()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({ type: REQUEST_ISIN });
    expect(actions[1].type).toEqual(RECEIVE_ISIN);
    expect(actions[1].data).not.toEqual(null);
  });
});