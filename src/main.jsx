import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { App } from "./app";
import { createNote, noteReducer } from "./reducers/note";
import "./styles/index.css";

const store = createStore(noteReducer);

store.dispatch(createNote({ content: "The app state is in redux store" }));
store.dispatch(createNote({ content: "state changes are made with actions" }));

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
