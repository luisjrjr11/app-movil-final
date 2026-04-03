import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

test('renderiza texto correctamente', () => {
  const { getByText } = render(<Text>Prueba integración</Text>);

  expect(getByText('Prueba integración')).toBeTruthy();
});