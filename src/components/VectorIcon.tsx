import React from 'react';
import { Platform, StyleProp, TextStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import colors from '~/constants/colors';

interface VectorIconProps {
  name: string;
  size: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const IonVectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <Ionicons
      name={Platform.OS === 'ios' ? `ios-${props.name}` : `md-${props.name}`}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const OctIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <Octicons
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const SimpleLineIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <SimpleLineIcons
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const MaterialVectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <MaterialIcons
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const MaterialCommunityVectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const AntDesignVectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <AntDesign
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const FontAwesomeVectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <FontAwesome
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const FontAwesome5VectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <FontAwesome5
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const EntypoVectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <Entypo
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const ZocialVectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <Zocial
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const FontistoVectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <Fontisto
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const FeatherVectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <Feather
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const EvilIconsVectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <EvilIcons
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

const FoundationVectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <Foundation
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || colors.darkBlue}
    />
  );
}

export default {
  IonVectorIcon,
  MaterialVectorIcon,
  MaterialCommunityVectorIcon,
  AntDesignVectorIcon,
  FontAwesomeVectorIcon,
  FontAwesome5VectorIcon,
  SimpleLineIcon,
  OctIcon,
  FeatherVectorIcon,
  EntypoVectorIcon,
  ZocialVectorIcon,
  FontistoVectorIcon,
  EvilIconsVectorIcon,
  FoundationVectorIcon,
};
