const INITIAL_STATE = [
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

export function noteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_NOTE": {
      const { content, important } = action.payload;

      const newNote = {
        id: generateId(),
        content,
        important: important ?? false,
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

export function createNote({ content, important }) {
  return {
    type: "ADD_NOTE",
    payload: {
      content,
      important,
    },
  };
}

export function toggleNoteImportance(id) {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: { id },
  };
}
