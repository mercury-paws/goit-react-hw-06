import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialstate: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase());
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
