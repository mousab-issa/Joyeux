import {Platform} from 'react-native';
import Constants from '../constants';
import {themeType} from './types';

export const theme: themeType = {
  Colors: {
    primary: '#00A89B',
    primaryDark: '#011511',
    primaryLight: '#CDE8E6',
    secondary: '#40968D',
    secondaryLight:'#457C78',
    inactive: '#FFFFFF',
    active: '#6DBE4B',
    error: '#F0385E',
    text: '#333F48',
    textSecondary: '#A1AABB',
    borders: '#EAF4F3',
    orange: {
      default: 'string',
      light: 'string',
    },
    white: '#FFFFFF',
    green: {
      default: '#457C78',
      light: 'string',
    },
    red: {
      default: '#F44E4E',
      light: 'string',
    },
    yellow: {
      default: '#FAAE1D',
    },
  },
  // Typograhpy used throughout the App
  Fonts: {
    Main: {
      header1: {
        fontSize: Constants.ResponsiveSize.f38,
        fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
      },
      header2: {
        fontSize: Constants.ResponsiveSize.f24,
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
      },
      header3: {
        fontSize: Constants.ResponsiveSize.f20,
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
      },
      body1: {
        fontSize: Constants.ResponsiveSize.f14,
        fontWeight: '400',
      },
      body2: {
        fontSize: Constants.ResponsiveSize.f12,
        fontWeight: '400',
      },
      captions: {
        fontSize: Constants.ResponsiveSize.f10,
        fontWeight: '400',
      },
    },
  },
};
export const MainGradient = ['#F44E4E', '#F44E4E', '#FCAE27', '#FCAE27'];

export const SecondaryGradient = [
  theme.Colors.primary,
  theme.Colors.primary,
  '#00897E',
  '#00897E',
];
