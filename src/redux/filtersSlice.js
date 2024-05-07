import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialstate: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = state.name
        .toLowerCase()
        .includes(action.payload.toLowerCase());
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
