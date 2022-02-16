import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

// Async Actions
import {
  LoginUser,
  SignUpUser,
  RefreshToken,
  getUserInfo,
  CheckTokenValid,
  LogOut,
} from './asyncActions';
// Models
import {Session, User} from './types';
// initial State
import {initialState} from './initialState';
import {reducerName} from './constatns';

export const authSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    clearState: state => {
      state.isLoading = false;
      state.isInitiLoading = false;
    },
  },
  extraReducers: {
    // Login
    [LoginUser.fulfilled.type]: (state, action: PayloadAction<Session>) => {
      state.isSignedIn = true;
      state.isSignedOut = false;
      state.refreshToken = action.payload.refresh_token;
      state.userToken = action.payload.access_token;
      state.isInitiLoading = false;
      state.isLoading = false;
      if (action.payload.expires_in) {
        state.tokenExpire = new Date(
          Date.now() + action.payload.expires_in,
        ).toISOString();
      }
    },
    [LoginUser.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [LoginUser.rejected.type]: (state, action) => {
      Toast.show({
        type: 'error',
        text1: 'langauges.error',
        text2: 'langauges.errorText',
      });
      state.isLoading = false;
      state.isSignedIn = false;
      state.isSignedOut = true;
      state.isInitiLoading = false;
    },
    // SignUp
    [SignUpUser.fulfilled.type]: (state, action: PayloadAction<any>) => {},
    [SignUpUser.pending.type]: (state, action) => {},
    [SignUpUser.rejected.type]: (state, action: PayloadAction<string>) => {},
    // Refresh Token
    [RefreshToken.fulfilled.type]: (state, action: PayloadAction<any>) => {},
    [RefreshToken.pending.type]: (state, action) => {},
    [RefreshToken.rejected.type]: (state, action: PayloadAction<string>) => {},
    // get user info
    [getUserInfo.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isInitiLoading = false;
    },
    [getUserInfo.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [getUserInfo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isSignedIn = false;
      state.isSignedOut = true;
      state.isInitiLoading = false;
      Toast.show({
        type: 'error',
        text1: 'langauges.error',
        text2: 'langauges.errorText',
      });
    },
    // Check if token is valid
    [CheckTokenValid.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.userToken = action.payload.access_token;
      state.user = action.payload;
      state.isLoading = false;
      state.isInitiLoading = false;
    },
    [CheckTokenValid.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [CheckTokenValid.rejected.type]: (state, action: PayloadAction<string>) => {
      Object.assign(state, initialState);
      state.isLoading = false;
      state.isSignedIn = false;
      state.isSignedOut = true;
      state.isInitiLoading = false;
    },
    // LogOut
    [LogOut.fulfilled.type]: (state, action: PayloadAction<any>) => {
      Object.assign(state, initialState);
      state.isLoading = false;
      state.isSignedIn = false;
      state.isSignedOut = true;
      state.isInitiLoading = false;
    },
    [LogOut.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [LogOut.rejected.type]: (state, action: PayloadAction<string>) => {
      Object.assign(state, initialState);
      state.isLoading = false;
      state.isSignedIn = false;
      state.isSignedOut = true;
      state.isInitiLoading = false;
    },
  },
});

export const {clearState} = authSlice.actions;

export default authSlice.reducer;
