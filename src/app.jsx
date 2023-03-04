import { createNote, toggleNoteImportance } from "./reducers/note";

export function App(props) {
  const { store } = props;

  function addNote(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    store.dispatch(createNote({ content: formData.get("note") }));

    form.reset();
    form.elements.note.focus();
  }

  function toggleImportance(id) {
    store.dispatch(toggleNoteImportance(id));
  }

  return (
    <div>
      <h1>Notes</h1>
      <h2>New Note</h2>
      <form onSubmit={addNote}>
        <input type="text" name="note" required aria-label="Note" />
        <button type="submit">Save</button>
      </form>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id}>
            {note.content}{" "}
            <button type="button" onClick={() => toggleImportance(note.id)}>
              {note.important ? "make not important" : "make important"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
