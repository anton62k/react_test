import React from 'react';
import configureStore from 'redux-mock-store';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from "../card/Header";

configure({adapter: new Adapter()});

const middlewares = [];
const mockStore = configureStore(middlewares);

it('Header', () => {
  let initialState = {
    texts: {
      title: 'title',
      text1: 'text1',
      text2: 'text2'
    }
  };
  const store = mockStore(initialState);

  let container = shallow(<Header store={store}/>);
  expect(container.prop('title')).toEqual(initialState.texts.title);
  expect(container.prop('text1')).toEqual(initialState.texts.text1);
  expect(container.prop('text2')).toEqual(initialState.texts.text2);
});