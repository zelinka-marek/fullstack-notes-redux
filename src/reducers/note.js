import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    content: "reducer defines how redux store works",
    important: true,
    id: 1,
  },
  {
    content: "state of store can contain any data",
    important: false,
    id: 2,
  },
];

function generateId() {
  return Number((Math.random() * 1_000_000).toFixed(0));
}

const noteSlice = createSlice({
  name: "notes",
  initialState,
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
  },
});

const { reducer } = noteSlice;
export { reducer as noteReducer };

export const { createNote, toggleNoteImportance } = noteSlice.actions;
