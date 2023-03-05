import { useDispatch } from "react-redux";
import { setNote } from "../reducers/note";
import { updateNote } from "../services/notes";

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

  const toggleImportance = async (id) => {
    const note = notes.find((note) => note.id === id);
    const noteUpdates = { ...note, important: !note.important };
    const updatedNote = await updateNote(id, noteUpdates);

    dispatch(setNote(updatedNote));
  };

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onToggle={toggleImportance} />
      ))}
    </ul>
  );
}
