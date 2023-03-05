import { createSlice } from "@reduxjs/toolkit";

function generateId() {
  return Number((Math.random() * 1_000_000).toFixed(0));
}

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      const { content, important } = action.payload;

      state.push({
        id: generateId(),
        content,
        important: important ?? false,
      });
    },
    toggleNoteImportance(state, action) {
      const { id } = action.payload;

      const note = state.find((note) => note.id === id);
      note.important = !note.important;
    },
    appendNote(state, action) {
      const { note } = action.payload;

      state.push(note);
    },
    setNotes(state, action) {
      const { notes } = action.payload;

      return notes;
    },
  },
});

const { reducer } = noteSlice;
export { reducer as noteReducer };

export const { createNote, toggleNoteImportance, appendNote, setNotes } =
  noteSlice.actions;
