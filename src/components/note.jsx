import { MdDeleteForever } from "react-icons/md";
const Notes = ({ id, name, date, deleteNotes, bgcolor }) => {
  return (
    <div
      className="notes text"
      style={{
        background: `linear-gradient(250deg, ${bgcolor} 0%, ${bgcolor}75 100%)`,
      }}
    >
      <span >{name}</span>
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
