import _ from "lodash";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Dimensions, Platform } from 'react-native';

const { height: D_HEIGHT, width: D_WIDTH } = (() => {
  const { width, height } = Dimensions.get('window');
  if (width === 0 && height === 0) {
    return Dimensions.get('screen');
  }
  return { width, height };
})();

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export const IS_IPHONE_X = (() => {
  if (Platform.OS === 'web') {
    return false;
  }
  return (
    (Platform.OS === 'ios' &&
      ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
        (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))) ||
    (D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
    (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT)
  );
})();

class Logger {
  private logs: object[];

  constructor() {
    this.logs = [];
  }

  /**
   * Runs only on development environment
   * @returns {void}
   */
  debug(...args: any[]) {
    if (process.env.NODE_ENV !== "development") return;

    // Convert arguments to cleaned array
    const newArgs = [...args];

    const filePath = newArgs[0];
    // const fileName = filePath.replace(/^.*[\\/]/, '');
    const fileName = filePath;

    newArgs[0] = "%c" + fileName;
    newArgs.splice(1, 0, "color: #1c6ef7; font-weight: bold;");

    this.logs.push({
      type: "DEBUG",
      date: new Date(Date.now()).toISOString(),
      log: newArgs,
    });

    console.log(...newArgs);
  }

  /**
   * Runs only on production environment
   * @returns {void}
   */
  silly(...args: any[]) {
    if (process.env.NODE_ENV !== "production") return;

    // Convert arguments to cleaned array
    const newArgs = [...args];

    const filePath = newArgs[0];
    // const fileName = filePath.replace(/^.*[\\/]/, '');
    const fileName = filePath;

    newArgs[0] = "%c" + fileName;
    newArgs.splice(1, 0, "color: #1c6ef7; font-weight: bold;");

    this.logs.push({
      type: "DEBUG",
      date: new Date(Date.now()).toISOString(),
      log: newArgs,
    });
  }

  /**
   * Runs anywhere
   * @returns {void}
   */
  error(...args: any[]) {
    // Convert arguments to cleaned array
    const newArgs = [...args];

    newArgs[0] = "%c" + newArgs[0];
    newArgs.splice(1, 0, "color: red; font-weight: bold;");

    this.logs.push({
      type: "ERROR",
      date: new Date(Date.now()).toISOString(),
      log: newArgs,
    });

    console.error(...newArgs);
  }
}
export const logger = new Logger();


export const SetAsyncItem = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const getAsyncItem = async (key: string) => {
  try {
    return AsyncStorage.getItem(key);
  } catch (e) {
    console.error(e);
  }
};

export const removeAsyncItem = async (key: string) => {
  try {
    return AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};


