export function noteReducer(state = [], action) {
  switch (action.type) {
    case "ADD_NOTE": {
      const { note } = action.payload;

      const newNote = {
        important: false,
        ...note,
      };

      return state.concat(newNote);
    }
    case "TOGGLE_IMPORTANCE": {
      const { id } = action.payload;

      const note = state.find((note) => note.id === id);
      const updatedNote = { ...note, important: !note.important };

      return state.map((note) => (note.id === id ? updatedNote : note));
    }
    default: {
      return state;
    }
  }
}
