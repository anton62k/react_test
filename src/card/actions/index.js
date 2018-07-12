import api from '../api/index';

export const SELECT_DATE_FILTER = 'SELECT_DATE_FILTER';
export const SELECT_TYPE_FILTER = 'SELECT_TYPE_FILTER';
export const REQUEST_ISIN = 'REQUEST_ISIN';
export const RECEIVE_ISIN = 'RECEIVE_ISIN';

export const selectDateFilter = filter => ({
  type: SELECT_DATE_FILTER,
  filter,
});

export const selectTypeFilter = filter => ({
  type: SELECT_TYPE_FILTER,
  filter,
});

export const requestISIN = () => ({
  type: REQUEST_ISIN,
});

export const receiveISIN = data => ({
  type: RECEIVE_ISIN,
  data,
});

export const fetchISIN = () => (dispatch, getState) => {
  const state = getState();

  if (!state.isFetching) {
    dispatch(requestISIN());
    return api(state.dateFilter, state.typeFilter)
      .then(response => dispatch(receiveISIN(response)));
  }

  return Promise.resolve();
};

export const TypeFilter = {
  YIELD: 'YIELD',
  PRICE: 'PRICE',
  SPREAD: 'SPREAD',
};

export const DateFilter = {
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  QUARTER: 'QUARTER',
  YEAR: 'YEAR',
  MAX: 'MAX',
};
