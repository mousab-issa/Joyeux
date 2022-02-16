import {configureStore} from '@reduxjs/toolkit';
// Slices
import authSlice from './auth/auth';

const store = configureStore({
  reducer: {authSlice},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
