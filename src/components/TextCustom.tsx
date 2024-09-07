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
import colors from '~/constants/colors';
import {useSelectorApp} from '~/redux/slices/app.slice';

interface TextCustomProps {
  value?: string;
  onChangeText: (name: string, text: string) => void;
  name: string;
  label?: string;
  password?: boolean;
  keyboardType?: 'default' | 'email' | 'number';
  Icon?: JSX.Element;
  readonly?: boolean;
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
  containerStyle,
  readonly,
}) => {
  const {darkMode} = useSelectorApp();
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
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? colors.darkGrayOpacity : colors.white,
          borderWidth: darkMode ? 0 : 1,
          borderColor: colors.borderGray,
        },
        containerStyle,
      ]}>
      {Icon}
      <TextInput
        onChangeText={text => onChangeText(name, text)}
        value={value}
        placeholder={label}
        style={[
          styles.textInput,
          {
            color: darkMode ? colors.white : colors.black,
          },
        ]}
        secureTextEntry={showPassword}
        keyboardType={keyBoard}
        placeholderTextColor={colors.gray}
        readOnly={readonly}
      />

      {password && (
        <TouchableOpacity
          style={styles.btnShowPass}
          onPress={() => setShowPassword(!showPassword)}>
          <VectorIcon.FeatherVectorIcon
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color={colors.gray}
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
    backgroundColor: colors.darkGrayOpacity,
    marginVertical: 2,
  },
  textInput: {
    width: '90%',
    fontSize: 16,
    overflow: 'hidden',
    marginLeft: 10,
  },
  btnShowPass: {
    position: 'absolute',
    right: 10,
    top: 15,
    zIndex: 10,
    borderRadius: 10,
  },
});

export default TextCustom;
