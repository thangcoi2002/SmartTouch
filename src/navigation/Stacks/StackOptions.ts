import {NativeStackNavigationProp} from '@react-navigation/native-stack/src/types';
import {ParamListBase} from '@react-navigation/native';

type ScreenOptionsProps = Readonly<{
  navigation: NativeStackNavigationProp<ParamListBase>;
}>;

export const StackOptions = ({}: ScreenOptionsProps) => ({
  headerShown: false,
});
