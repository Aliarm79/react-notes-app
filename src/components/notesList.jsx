import AddNotes from "./AddNotes";
import Notes from "./note";

const NotesList = ({ notes, changeNotes, deleteNotes }) => {
  return (
    <div className="notes-list">
      {notes &&
        notes.map((item) => {
          return <Notes {...item} key={item.id} deleteNotes={deleteNotes} />;
        })}
      <AddNotes changeNotes={changeNotes} />
    </div>
  );
};

export default NotesList;
