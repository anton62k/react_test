import React from 'react';
import configureStore from 'redux-mock-store';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DateFilter } from "../card/actions/index";
import DateButton from "../card/DateButton";

configure({adapter: new Adapter()});

const middlewares = [];
const mockStore = configureStore(middlewares);

it('DateButton disabled = false', () => {
  let initialState = {
    dateFilter: DateFilter.MAX
  };
  const store = mockStore(initialState);

  let container = shallow(<DateButton store={store} filter={DateFilter.YEAR} label=""/>);
  expect(container.prop('filter')).toEqual(DateFilter.YEAR);
  expect(container.prop('disabled')).toEqual(false);
});

it('DateButton disabled = true', () => {
  let initialState = {
    dateFilter: DateFilter.YEAR
  };
  const store = mockStore(initialState);

  let container = shallow(<DateButton store={store} filter={DateFilter.YEAR} label=""/>);
  expect(container.prop('filter')).toEqual(DateFilter.YEAR);
  expect(container.prop('disabled')).toEqual(true);
});