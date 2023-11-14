import { useEffect, useState } from "react";
import NotesList from "./components/notesList";
import { nanoid } from "nanoid";
import Search from "./components/search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("react-notes-app-data")) || []
  );
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const changeNotes = (value, color) => {
    const date = new Date();
    const newNoteList = [
      ...notes,
      {
        id: nanoid(),
        name: value,
        date: date.toLocaleDateString(),
        bgcolor: color,
      },
    ];
    setNotes(newNoteList);
  };
  const deleteNotes = (id) => {
    const newNotes = notes.filter((item) => {
      return item.id !== id;
    });
    setNotes(newNotes);
  };
  const filteredNotes = notes.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className={`${darkMode && "darkMode"}`}>
      <div className={`container`}>
        <Header darkMode={setDarkMode} />
        <Search handleSearch={setSearchText} darkmode={darkMode} />

        <NotesList
          notes={filteredNotes}
          changeNotes={changeNotes}
          deleteNotes={deleteNotes}
        />
      </div>
    </div>
  );
};

export default App;
