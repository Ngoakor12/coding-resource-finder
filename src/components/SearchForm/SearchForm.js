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
        placeholder="Search a resource..."
        onInput={(e) => {
          setSearchTerm(e.target.value);
        }}
        onChange={handleSearch}
        value={searchTerm}
      />
      <div
        className="clear-button"
        onClick={() => setSearchTerm("")}
        title="clear search text"
      >
        <svg
          aria-hidden="true"
          role="img"
          // class="iconify iconify--eva"
          width="18"
          height="18"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchForm;
