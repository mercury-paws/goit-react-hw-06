import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contact",
  initialstate: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items = action.payload;
    },
    deleteContact: (state, action) => {
      state.items = items.filter((contact) => contact.id !== contactId);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
