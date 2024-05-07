import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contactList.json";

const slice = createSlice({
  name: "contact",
  initialState: {
    contacts: initialContacts,
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
