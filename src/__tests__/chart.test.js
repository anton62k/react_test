import React from 'react';
import configureStore from 'redux-mock-store';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chart from "../card/Chart";

configure({adapter: new Adapter()});

const middlewares = [];
const mockStore = configureStore(middlewares);

it('Chart', () => {
  let initialState = {
    texts: {
      data: [{name: '1', value: 1}],
    }
  };
  const store = mockStore(initialState);

  let container = shallow(<Chart store={store}/>);
  expect(container.prop('data')).toEqual(initialState.data);
});