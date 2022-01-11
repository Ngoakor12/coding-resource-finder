import { useState, useContext } from "react"; 
import { Context } from "../../Context";
const SearchForm = () => {
  const { resources, setResources } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    let result = [];
    result = resources.filter((data) => {
      return data.title
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase().trim());
    });
    if (result.length > 0) {
      setResources(result);
      result = [];
    } else {
      setResources(resources);
    }
  }
  return (
    <div className="search-input-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="search a resource..."
        onInput={(e) => {
          setSearchTerm(e.target.value);
        }}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchForm;
