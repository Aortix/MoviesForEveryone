import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './../components/filter';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filter />, div);
});

it('renders without crashing', () => {
    shallow(<Filter />);
  });

//Random text