import { createStore } from "redux";

function noteReducer(state = [], action) {
  switch (action.type) {
    case "ADD_NOTE": {
      return state.concat(action.payload);
    }
    default: {
      return state;
    }
  }
}

const store = createStore(noteReducer);

const notes = [
  {
    content: "The app state is in redux store",
    important: false,
    id: 1,
  },
  {
    content: "state changes are made with actions",
    important: false,
    id: 2,
  },
];

for (const note of notes) {
  store.dispatch({ type: "ADD_NOTE", payload: note });
}

export function App() {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id}>
            {note.content} {note.important && <strong>important</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
}
