import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewNote } from "./components/new-note";
import { NoteList } from "./components/note-list";
import { VisibilityFilter } from "./components/visibility-filter";
import { setFilter } from "./reducers/filter";
import { createNote, setNotes } from "./reducers/note";
import { getNotes } from "./services/notes";

export function App() {
  const dispatch = useDispatch();

  const notes = useSelector(({ notes, filter }) => {
    if (filter === "all") {
      return notes;
    }

    return filter === "important"
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important);
  });

  useEffect(() => {
    getNotes().then((notes) => {
      dispatch(setNotes({ notes }));
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Notes</h1>
      <h2>New Note</h2>
      <NewNote onSubmit={(data) => dispatch(createNote(data))} />
      <div style={{ marginTop: 16 }}>
        <VisibilityFilter onChange={(filter) => dispatch(setFilter(filter))} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
}
