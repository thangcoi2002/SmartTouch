import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';

const TestComponent = () => {
  const [text, setText] = useState('Hello, World!');

  return (
    <View>
      <Text>{text}</Text>
      <Button title="Change Text" onPress={() => setText('Text Changed!')} />
    </View>
  );
};

test('renders initial text and updates text on button press', () => {
  const {getByText} = render(<TestComponent />);

  expect(getByText('Hello, World!')).toBeTruthy();

  const button = getByText('Change Text');
  fireEvent.press(button);

  expect(getByText('Text Changed!')).toBeTruthy();
});
