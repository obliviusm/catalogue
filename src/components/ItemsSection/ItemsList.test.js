import React from 'react';
import { mount } from 'enzyme'
import ItemsList from './ItemsList';

it('renders list of categories', () => {
  const items = [
    { id: 'shoe-id', name: 'Shoes' },
    { id: 'hat-id', name: 'Hat' }
  ]
  const component = mount(
    <ItemsList items={items}/>
  )
  expect(component).toMatchSnapshot()
});
