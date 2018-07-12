import cardReducer from '../card/reducers';
import {
  DateFilter,
  receiveISIN,
  requestISIN,
  selectDateFilter,
  selectTypeFilter,
  TypeFilter
} from "../card/actions/index";

it('typeFilter reducer', () => {
  let state = {};

  state = cardReducer(state, selectTypeFilter(TypeFilter.PRICE));
  expect(state.typeFilter).toEqual(TypeFilter.PRICE);

  state = cardReducer(state, selectTypeFilter(TypeFilter.YIELD));
  expect(state.typeFilter).toEqual(TypeFilter.YIELD);
});

it('dateFilter reducer', () => {
  let state = {};

  state = cardReducer(state, selectDateFilter(DateFilter.MAX));
  expect(state.dateFilter).toEqual(DateFilter.MAX);

  state = cardReducer(state, selectDateFilter(DateFilter.MONTH));
  expect(state.dateFilter).toEqual(DateFilter.MONTH);
});


it('isFetching reducer', () => {
  let state = {
    isFetching: false
  };

  state = cardReducer(state, requestISIN());
  expect(state.isFetching).toEqual(true);

  state = cardReducer(state, receiveISIN({data: [], texts: {}}));
  expect(state.isFetching).toEqual(false);
});

it('data reducer', () => {
  let state = {
    data: []
  };

  let data = [{value: 1}];

  state = cardReducer(state, receiveISIN({data: data, texts: {}}));
  expect(state.data).toEqual(data);
});

it('texts reducer', () => {
  let state = {
    texts: {}
  };

  let texts = {
    text: 'text'
  };

  state = cardReducer(state, receiveISIN({data: [], texts: texts}));
  expect(state.texts).toEqual(texts);
});