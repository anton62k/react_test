import React from 'react';
import configureStore from 'redux-mock-store';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TypeFilter } from "../card/actions/index";
import TypeGroup from "../card/TypeGroup";

configure({adapter: new Adapter()});

const middlewares = [];
const mockStore = configureStore(middlewares);

it('TypeGroup', () => {
  let initialState = {
    typeFilter: TypeFilter.YIELD
  };
  const store = mockStore(initialState);

  let container = shallow(<TypeGroup store={store} items={[]}/>);
  expect(container.prop('filter')).toEqual(initialState.typeFilter);
});