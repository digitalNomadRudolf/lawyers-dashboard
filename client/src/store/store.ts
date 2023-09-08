import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import authReducer from "../features/auth/authSlice";
import userProfileReducer from "../features/userProfile/userProfileSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  userProfile: userProfileReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

// An enhanced reducer with configuration to persist all the above reducers state to localStorage
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

/* const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    auth: authReducer,
    userProfile: userProfileReducer,
  },
}); */

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// persistStore persists and rehydrates the state
// With this function our store will be saved to the localStorage and, even after browser refresh,
// our data will still remain
export const persistor = persistStore(store);

export default store;
