import React from 'react';
import TestRenderer from 'react-test-renderer';
import ReactMuiLoginRegister, {
  PROVIDER_TWITTER, PROVIDER_GITHUB, PROVIDER_FACEBOOK
} from '../src';
import ProviderChoices from '../src/ProviderChoices';

test('render default', () => {
  const component = TestRenderer.create(
      <ReactMuiLoginRegister transitionTimeout={0}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('expected default provider buttons', () => {
  const testRenderer = TestRenderer.create(
      <ReactMuiLoginRegister transitionTimeout={0}/>,
  );

  const testInstance = testRenderer.root;

  const providerChoices = testInstance.findByType(ProviderChoices);
  const providerButtons = providerChoices.findAll(instance => instance.type.name === "ProviderButton");
  expect(providerButtons).toHaveLength(3);

  const providers = providerButtons.map(b => b.props.provider);
  expect(providers).toEqual(expect.arrayContaining([PROVIDER_GITHUB, PROVIDER_FACEBOOK, PROVIDER_TWITTER]));
});

test('expected with given providers', () => {
  const testRenderer = TestRenderer.create(
      <ReactMuiLoginRegister transitionTimeout={0}
                             providers={[PROVIDER_FACEBOOK, PROVIDER_GITHUB]}
      />,
  );

  const testInstance = testRenderer.root;

  const providerChoices = testInstance.findByType(ProviderChoices);
  const providerButtons = providerChoices.findAll(instance => instance.type.name === "ProviderButton");
  expect(providerButtons).toHaveLength(2);

  const providers = providerButtons.map(b => b.props.provider);
  expect(providers).toEqual(expect.arrayContaining([PROVIDER_GITHUB, PROVIDER_FACEBOOK]));
});
