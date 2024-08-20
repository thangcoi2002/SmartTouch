import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import VectorIcon from './VectorIcon';
import React, {useState} from 'react';
import Constants from '~/common/Constant';

interface TextCustomProps {
  value?: string;
  onChangeText: (name: string, text: string) => void;
  name: string;
  label: string;
  password?: boolean;
  keyboardType?: 'default' | 'email' | 'number';
  Icon?: JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
}

const TextCustom: React.FC<TextCustomProps> = ({
  value,
  onChangeText,
  name,
  label,
  password,
  keyboardType,
  Icon,
}) => {
  const [showPassword, setShowPassword] = useState(password);
  let keyBoard: KeyboardTypeOptions = 'default';

  switch (keyboardType) {
    case 'email':
      keyBoard = 'email-address';
      break;
    case 'number':
      keyBoard = 'numeric';
      break;
    default:
      keyBoard = 'default';
      break;
  }

  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        onChangeText={text => onChangeText(name, text)}
        value={value}
        placeholder={label}
        style={styles.textInput}
        secureTextEntry={showPassword}
        keyboardType={keyBoard}
        placeholderTextColor={Constants.gray}
      />

      {password && (
        <TouchableOpacity
          style={styles.btnShowPass}
          onPress={() => setShowPassword(!showPassword)}>
          <VectorIcon.FeatherVectorIcon
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color={Constants.gray}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#161C22',
    marginVertical: 2,
  },
  textInput: {
    width: '90%',
    fontSize: 16,
    color: '#666',
    overflow: 'hidden',
    marginLeft: 10,
  },
  btnShowPass: {
    position: 'absolute',
    right: 10,
    top: 15,
    zIndex: 10,
    backgroundColor: Constants.white,
    borderRadius: 10,
  },
});

export default TextCustom;
