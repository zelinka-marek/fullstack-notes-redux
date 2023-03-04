import { useDispatch, useSelector } from "react-redux";
import { NewNote } from "./components/new-note";
import { NoteList } from "./components/note-list";
import { createNote } from "./reducers/note";

export function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  function addNote({ content }) {
    dispatch(createNote({ content }));
  }

  return (
    <div>
      <h1>Notes</h1>
      <h2>New Note</h2>
      <NewNote onSubmit={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}
