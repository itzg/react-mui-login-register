import React from 'react';
import TestRenderer from 'react-test-renderer';

import LoginRegisterError from '../../src/components/LoginRegisterError';

test('typical', () => {

  const rendered = TestRenderer.create(<LoginRegisterError message='This is the error'/>);

  expect(rendered.root.findByType('div').children).toEqual(['This is the error']);
});