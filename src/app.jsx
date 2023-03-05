import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewNote } from "./components/new-note";
import { NoteList } from "./components/note-list";
import { VisibilityFilter } from "./components/visibility-filter";
import { setFilter } from "./reducers/filter";
import { addNote, setNotes } from "./reducers/note";
import { createNote, getNotes } from "./services/notes";

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
      dispatch(setNotes(notes));
    });
  }, [dispatch]);

  const newNote = async (content) => {
    const note = await createNote(content);

    dispatch(addNote(note));
  };

  const updateFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <h1>Notes</h1>
      <h2>New Note</h2>
      <NewNote onSubmit={newNote} />
      <div style={{ marginTop: 16 }}>
        <VisibilityFilter onChange={updateFilter} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
}
