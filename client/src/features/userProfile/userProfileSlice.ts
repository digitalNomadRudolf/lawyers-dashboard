import { createSlice } from "@reduxjs/toolkit";
import authSlice from "../auth/authSlice";
import { UserProfile } from "../../types/UserProfile";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserProfileState } from "../../types/UserProfile";

const initialState: UserProfileState = {
  userProfile: null,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
    clearUserProfile: (state) => {
      state.userProfile = null;
    },
  },
});

export const { setUserProfile, clearUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
