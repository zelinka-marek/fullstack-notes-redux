import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote(state, action) {
      state.push(action.payload);
    },
    toggleNoteImportance(state, action) {
      const note = state.find((note) => note.id === action.payload);
      note.important = !note.important;
    },
    setNotes(_state, action) {
      return action.payload;
    },
  },
});

const { reducer } = noteSlice;
export { reducer as noteReducer };

export const { addNote, toggleNoteImportance, setNotes } = noteSlice.actions;
