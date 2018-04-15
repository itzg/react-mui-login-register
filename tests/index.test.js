import React from 'react';
import renderer from 'react-test-renderer';
import ReactMuiLoginRegister from '../src';

test('render default', () => {
  const component = renderer.create(
      <ReactMuiLoginRegister transitionTimeout={0}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});