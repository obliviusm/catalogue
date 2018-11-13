import React from 'react';
import { mount } from 'enzyme'
import ItemCard from './ItemCard';

it('renders item card', () => {
  const item = {
    name: 'Iron',
    price: '$ 100,000',
    description: 'Best of the best'
  }
  const component = mount(<ItemCard item={item}/>)
  expect(component).toMatchSnapshot()
});
