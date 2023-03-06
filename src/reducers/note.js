import { createSlice } from "@reduxjs/toolkit";
import { createNote, getNotes, updateNote } from "../services/notes";

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote(state, action) {
      state.push(action.payload);
    },
    setNote(state, action) {
      return state.map((note) =>
        note.id === action.payload.id ? action.payload.note : note
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

export function initializeNotes() {
  return async (dispatch) => {
    const notes = await getNotes();

    dispatch(setNotes(notes));
  };
}

export function addNewNote(content) {
  return async (dispatch) => {
    const note = await createNote(content);

    dispatch(addNote(note));
  };
}

export function toggleNoteImportance(id) {
  return async (dispatch, getState) => {
    const { notes } = getState();

    const note = notes.find((note) => note.id === id);
    const noteUpdates = { ...note, important: !note.important };

    const updatedNote = await updateNote(id, noteUpdates);

    dispatch(setNote({ id, note: updatedNote }));
  };
}
