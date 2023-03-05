export function NewNote(props) {
  const { onSubmit } = props;

  function addNote(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const content = formData.get("note");

    onSubmit(content);

    form.reset();
    form.elements.note.focus();
  }

  return (
    <form onSubmit={addNote}>
      <input type="text" name="note" required aria-label="Note" />
      <button type="submit">Save</button>
    </form>
  );
}
