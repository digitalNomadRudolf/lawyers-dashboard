import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import authReducer from "../features/auth/authSlice";
import userProfileReducer from "../features/userProfile/userProfileSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    auth: authReducer,
    userProfile: userProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
