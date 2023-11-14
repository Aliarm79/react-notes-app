import { MdSearch } from "react-icons/md";

const Search = ({ handleSearch,darkmode }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" />
      <input 
        type="text"
        placeholder="type to search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        style={{backgroundColor:darkmode&&"transparent",color:darkmode&&"black"}}
      />
    </div>
  );
};

export default Search;
