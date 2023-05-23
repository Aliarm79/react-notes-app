const Header = ({ darkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => {
          darkMode((darkMode) => {
            return !darkMode;
          });
        }}
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
