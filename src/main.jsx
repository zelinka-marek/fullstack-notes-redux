import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { App } from "./app";
import { noteReducer } from "./reducers/note";
import "./styles/index.css";

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
  store.dispatch({ type: "ADD_NOTE", payload: { note } });
}

const root = createRoot(document.getElementById("root"));

function render() {
  root.render(
    <StrictMode>
      <App store={store} />
    </StrictMode>
  );
}

render();
store.subscribe(render);
