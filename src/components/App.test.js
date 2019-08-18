import React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => (
  shallow(<App {...props} />)
);

test('should render router', () => {
  const wrapper = setup();
  const routerComponent = wrapper.find('Router');
  expect(routerComponent.length).toBe(1);
});

test('should render routes', () => {
});
