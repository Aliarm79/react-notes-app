import { useEffect, useState } from "react";
import NotesList from "./components/notesList";
import { nanoid } from "nanoid";
import Search from "./components/search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("react-notes-app-data"))
  );
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const changeNotes = (value) => {
    const date = new Date();
    const newNoteList = [
      ...notes,
      { id: nanoid(), name: value, date: date.toLocaleDateString() },
    ];
    setNotes(newNoteList);
  };
  const deleteNotes = (id) => {
    const newNotes = notes.filter((item) => {
      return item.id !== id;
    });
    setNotes(newNotes);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className={`${darkMode && "darkMode"}`}>
      <div className={`container`}>
        <Header darkMode={setDarkMode} />
        <Search handleSearch={setSearchText} />
        <NotesList
          notes={notes.filter((item) => {
            return item.name.toLowerCase().includes(searchText);
          })}
          changeNotes={changeNotes}
          deleteNotes={deleteNotes}
        />
      </div>
    </div>
  );
};

export default App;
