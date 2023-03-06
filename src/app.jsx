import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewNote } from "./components/new-note";
import { NoteList } from "./components/note-list";
import { VisibilityFilter } from "./components/visibility-filter";
import { setFilter } from "./reducers/filter";
import { addNewNote, initializeNotes } from "./reducers/note";

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
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div>
      <h1>Notes</h1>
      <h2>New Note</h2>
      <NewNote onSubmit={(content) => dispatch(addNewNote(content))} />
      <div style={{ marginTop: 16 }}>
        <VisibilityFilter onChange={(filter) => dispatch(setFilter(filter))} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
}
