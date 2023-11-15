import { useState } from "react";

const AddNotes = ({ changeNotes }) => {
  const [newNote, setNewNote] = useState("");
  const [color, setColor] = useState("");
  console.log(color);
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
      changeNotes(newNote,color);
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
        <input
          className="color-input"
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button className="save" onClick={handleAddNotes}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
