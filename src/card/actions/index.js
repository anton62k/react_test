
export const ACTION_SELECT_DATE_FILTER = 'ACTION_SELECT_DATE_FILTER';
export const ACTION_SELECT_TYPE_FILTER = 'SELECT_TYPE_FILTER';
export const ACTION_SET_ISIN = 'ACTION_SET_ISIN';

export const setIsin = (data) => ({
    type: ACTION_SET_ISIN,
    data
});

export const setDateFilter = (filter) => ({
    type: ACTION_SELECT_DATE_FILTER,
    filter
});

export const setTypeFilter = (filter) => ({
    type: ACTION_SELECT_TYPE_FILTER,
    filter
});

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