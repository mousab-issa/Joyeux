import {AuthState} from './types';

export const initialState: AuthState = {
  isSignedIn: false,
  isSignedOut: true,
  isNewUser: false,
  userToken: undefined,
  tokenExpire: undefined,
  refreshToken: undefined,
  user: undefined,
  session: undefined,
  isLoading: true,
  isInitiLoading: true,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};
