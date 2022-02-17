import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

export interface TextInputTypes {
  prefix?: string | null;
  label?: string;
  type?: KeyboardTypeOptions;
  placeHolder?: string;
  onChange: (c: string) => any;
}
