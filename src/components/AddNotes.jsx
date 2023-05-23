import { useState } from "react";

const AddNotes = ({ changeNotes }) => {
  const [newNote, setNewNote] = useState("");
  const remaining = 200;
  const handelChange = (e) => {
    if (remaining - newNote.length > 0) {
      setNewNote(e.target.value);
    } else {
      setNewNote(newNote.substring(0, 200));
    }
  };
  const handleAddNotes = () => {
    if (newNote.trim().length > 0 && remaining - newNote.length >= 0) {
      changeNotes(newNote);
      setNewNote("");
    } else {
      setNewNote("");
    }
  };
  return (
    <div className="new-note">
      <textarea
        cols="30"
        rows="10"
        placeholder="Type to add a note..."
        value={newNote}
        onChange={handelChange}
      ></textarea>
      <div className="new-footer">
        <span>{remaining - newNote.length} remaining</span>
        <button className="save" onClick={handleAddNotes}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
