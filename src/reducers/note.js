import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote(state, action) {
      state.push(action.payload);
    },
    setNote(state, action) {
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
    setNotes(_state, action) {
      return action.payload;
    },
  },
});

const { reducer } = noteSlice;
export { reducer as noteReducer };

export const { addNote, setNote, setNotes } = noteSlice.actions;
