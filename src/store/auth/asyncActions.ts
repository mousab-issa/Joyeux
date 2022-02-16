import {createAsyncThunk} from '@reduxjs/toolkit';
//
import {API_END_POINTS} from 'src/config/Api_Endpoints';

import {reducerName} from './constatns';


import {removeAsyncItem, SetAsyncItem} from 'src/lib/helpers/utils';
import axiosInstance from 'src/lib/helpers/axios';

export const SignUpUser = createAsyncThunk(
  `${reducerName}/SignUpUser`,
  async (userId, thunkAPI) => {
    const response = await axiosInstance.post(API_END_POINTS.baseUrl);
    if (response && response.status === 200) {
      return response.data;
    }
    return;
  },
);

export const LoginUser = createAsyncThunk(
  `${reducerName}/LoginUser`,
  async (
    {username, password}: {username: string; password: string},
    thunkAPI,
  ) => {
    try {
      const response = null;
      if (true) {
        if (true) {
          // await SetAsyncItem('USER_TOKEN');
          // await SetAsyncItem(
          //   'TOKEN_EXPIRY',
          //   new Date(Date.now() + response.data.expires_in).toISOString(),
          // );
          // thunkAPI.dispatch(getUserInfo(response.data.access_token));
        }
        // return response.data;
      }
    } catch (error: any) {
      await removeAsyncItem('USER_TOKEN');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getUserInfo = createAsyncThunk(
  `${reducerName}/getUserInfo`,
  async (access_token: string, thunkAPI) => {
    try {
      // const response = await apiMiddleware.GetAuthApi(
      //   END_POINTS.Auth.getUserInfo(),
      //   {
      //     Authorization: `Bearer ${access_token}`,
      //   },
      // );
      // if (response && response.status === 200) {
      //   return response.data;
      // }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const CheckTokenValid = createAsyncThunk(
  `${reducerName}/CheckTokenValid`,
  async (access_token: string, thunkAPI) => {
    try {
      // const response = await apiMiddleware.GetAuthApi(
      //   END_POINTS.Auth.getUserInfo(),
      //   {
      //     Authorization: `Bearer ${access_token}`,
      //   },
      // );
      // if (response && response.status === 200) {
      //   return {...response.data, access_token};
      // }
    } catch (error: any) {
      await removeAsyncItem('USER_TOKEN');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const RefreshToken = createAsyncThunk(
  `${reducerName}/RefreshToken`,
  async (userId, thunkAPI) => {
    // const response = await apiMiddleware.getDataApi(END_POINTS.Mock.posts);
    // if (response) {
    //   return response.data;
    // }
    return;
  },
);

export const LogOut = createAsyncThunk(
  `${reducerName}/LogOut`,
  async (_, thunkAPI) => {
    try {
      // const response = await apiMiddleware.postAuthApi(
      //   END_POINTS.Auth.logout(),
      //   querystring.stringify({
      //     refresh_token: thunkAPI.getState().authSlice.refreshToken,
      //     grant_type: END_POINTS.Auth.refreshToken,
      //     client_id: END_POINTS.Auth.clientId,
      //   }),
      // );
      // if (response && response.status === 200) {
      //   if (response.data.access_token) {
      //     await removeAsyncItem('USER_TOKEN');
      //     thunkAPI.dispatch(clearState());
      //   }
      //   return;
      // }
    } catch (error: any) {
      await removeAsyncItem('USER_TOKEN');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
