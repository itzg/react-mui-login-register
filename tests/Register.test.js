import React from 'react';
import TestRenderer from 'react-test-renderer';

import Register from '../src/Register';
import LoginRegisterError from '../src/components/LoginRegisterError';

test('with an error message', () => {

  const rendered = TestRenderer.create(<Register registerFailed='Error message'/>);

  const errorComponent = rendered.root.findByType(LoginRegisterError);
  expect(errorComponent).toBeDefined();
  expect(errorComponent.findByType('div').children).toEqual(['Error message']);
});