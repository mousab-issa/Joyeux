import {StyleProp, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface FontFamilyType {
  Main: {
    header1: StyleProp<any>;
    header2: StyleProp<any>;
    header3: StyleProp<any>;
    body1: StyleProp<any>;
    body2: StyleProp<any>;
    captions: StyleProp<any>;
  };
}

interface ColorsType {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  error: string;
  borders: string;
  active: string;
  inactive: string;
  text: string;
  textSecondary: string;
  white: string;
  orange: {
    default: string;
    light: string;
  };
  green: {
    default: string;
    light: string;
  };
  red: {
    default: string;
    light: string;
  };
  yellow: {
    default: string;
  };
}

// Theme Type
interface themeType {
  Colors: ColorsType;
  Fonts: FontFamilyType;
}
