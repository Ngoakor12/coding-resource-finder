import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { clearSearchIcon } from "../../svgs";
import FilterTabs from "../FilterTabs";

const initialSuggestions = [
  { text: "JavaScript", isSelected: false },
  { text: "React", isSelected: false },
  { text: "Python", isSelected: false },
  { text: "Java", isSelected: false },
  { text: "Node", isSelected: false },
  { text: "SQL", isSelected: false },
];

function SearchForm() {
  const { resources, searchTerm, setSearchTerm, setRenderedResources } =
    useContext(Context);
  const [suggestions, setSuggestions] = useState(initialSuggestions || "");

  useEffect(() => {
    handleSearch();
    //eslint-disable-next-line
  }, [searchTerm]);

  function searchWithSuggestion(text) {
    setSuggestions(
      suggestions.map((suggestion) => {
        if (text === suggestion.text) {
          if (suggestion.isSelected) {
            setSearchTerm("");
            return { text: suggestion.text, isSelected: false };
          } else {
            setSearchTerm(suggestion.text.toLocaleLowerCase());
            return { text: suggestion.text, isSelected: true };
          }
        } else {
          return { text: suggestion.text, isSelected: false };
        }
      })
    );
  }

  function searchWithFilter(filterType) {
    // reset initialSuggestions
    setSuggestions(initialSuggestions);
    // query 
    setSearchTerm(filterType)
  }

  function handleSearch() {
    let result = [];
    result = resources.filter(({title,type}) => {      
      return (
        type.toLowerCase().includes(searchTerm.toLocaleLowerCase().trim())      /** try to filter by type first, cause 'titles' can contain 'types' as well */
        || title.toLowerCase().includes(searchTerm.toLocaleLowerCase().trim())  /** else try to filter by title */
      );
    });
    
    if (result.length > 0 && searchTerm.trim()) {
      setRenderedResources(result);
    } else if (searchTerm.trim() && !result.length) {
      setRenderedResources([]);
    } else {
      setRenderedResources(resources);
      setSuggestions(initialSuggestions);
    }
  }

  return (
    <div className="search-input-wrapper">
      <FilterTabs handleFilter={searchWithFilter}/>
      <input
        type="text"
        className="search-input"
        placeholder="Search a resource..."
        onInput={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
      />
      <div
        className="clear-button"
        onClick={() => setSearchTerm("")}
        title="clear search text"
      >
        {clearSearchIcon}
      </div>
      <div className="search-suggestions">
        {suggestions.map((suggestion) => {
          return (
            <p
              key={suggestion.text}
              className={`search-suggestion ${
                suggestion.isSelected ? "active" : ""
              }`}
              onClick={() => {
                searchWithSuggestion(suggestion.text);
              }}
            >
              {suggestion.text}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default SearchForm;
