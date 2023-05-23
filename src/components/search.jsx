import { MdSearch } from "react-icons/md";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
