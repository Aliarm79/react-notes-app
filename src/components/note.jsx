import { MdDeleteForever } from "react-icons/md";
const Notes = ({ id, name, date, deleteNotes }) => {
  return (
    <div className="notes">
      <span>{name}</span>
      <div className="note-footer">
        <span>{date}</span>
        <MdDeleteForever
          className="icon"
          onClick={() => {
            deleteNotes(id);
          }}
        />
      </div>
    </div>
  );
};

export default Notes;
