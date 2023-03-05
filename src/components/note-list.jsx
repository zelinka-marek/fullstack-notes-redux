import { useDispatch } from "react-redux";
import { toggleNoteImportance } from "../reducers/note";

function NoteItem(props) {
  const { note, onToggle } = props;

  return (
    <li key={note.id}>
      {note.content}{" "}
      <button type="button" onClick={() => onToggle(note.id)}>
        {note.important ? "make not important" : "make important"}
      </button>
    </li>
  );
}

export function NoteList(props) {
  const { notes } = props;

  const dispatch = useDispatch();

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onToggle={(id) => dispatch(toggleNoteImportance({ id }))}
        />
      ))}
    </ul>
  );
}
