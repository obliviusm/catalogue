import React from 'react';
import { mount } from 'enzyme'
import CategoriesList from './CategoriesList';

it('renders list of categories', () => {
  const categories = [
    { id: 'shoe-id', name: 'Shoes' },
    { id: 'hat-id', name: 'Hat' }
  ]
  const component = mount(
    <CategoriesList categories={categories}/>
  )
  expect(component).toMatchSnapshot()
});
