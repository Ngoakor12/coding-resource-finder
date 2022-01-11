import { useContext } from "react";
import { Context } from "../../Context";
const SearchForm = () => {
  const { resources, searchTerm, setSearchTerm, setRenderedResources } =
    useContext(Context);

  function handleSearch() {
    let result = [];
    result = resources.filter((data) => {
      return data.title
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase().trim());
    });
    if (result.length > 0 && searchTerm.trim()) {
      setRenderedResources(result);
    } else if (searchTerm.trim() && !result.length) {
      setRenderedResources([]);
    } else {
      setRenderedResources(resources);
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
        value={searchTerm}
      />
    </div>
  );
};

export default SearchForm;
