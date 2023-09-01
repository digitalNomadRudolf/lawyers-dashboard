import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recentCases: [],
  upcomingAppointments: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setRecentCases: (state, action) => {
      state.recentCases = action.payload;
    },
    setUpcomingAppointments: (state, action) => {
      state.upcomingAppointments = action.payload;
    },
  },
});

export const { setRecentCases, setUpcomingAppointments } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
