import React, { useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { Context } from "../../AppContext";
import { clearSearchIcon } from "../../svgs";
import Chip from "../Chip/Chip";

const initialSuggestions = [
  { text: "JavaScript", isSelected: false },
  { text: "React", isSelected: false },
  { text: "Python", isSelected: false },
  { text: "Java", isSelected: false },
  { text: "Node", isSelected: false },
  { text: "SQL", isSelected: false },
];

export default function SearchForm() {
  const {
    allResources,
    searchTerm,
    setSearchTerm,
    setRenderedResources,
    resourceFilter,
    setResourceFilter,
  } = useContext(Context);
  const [suggestions, setSuggestions] = useState(initialSuggestions || "");

  const filters = ["project", "topic"];

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
          }
          setSearchTerm(suggestion.text.toLocaleLowerCase());
          return { text: suggestion.text, isSelected: true };
        }
        return { text: suggestion.text, isSelected: false };
      })
    );
  }

  function handleSearch() {
    let result = [];
    result = allResources.filter(({ title }) => {
      return title
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase().trim());
    });

    if (result.length > 0 && searchTerm.trim()) {
      setRenderedResources(result);
    } else if (searchTerm.trim() && !result.length) {
      setRenderedResources([]);
    } else {
      setRenderedResources(allResources);
      setSuggestions(initialSuggestions);
    }
  }

  function handleInputSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  function handleClickSearchTerm() {
    setSearchTerm("");
  }

  function handleClickSearchWithSuggestion(suggestion) {
    return () => {
      searchWithSuggestion(suggestion.text);
    };
  }

  function handleClickFilterChip(filter) {
    setResourceFilter(resourceFilter === filter ? "all" : filter);
  }

  return (
    <div className="search-input-wrapper">
      <div className="search-input-inner-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search a resource..."
          onInput={handleInputSearchTerm}
          value={searchTerm}
        />
        <div
          className="clear-button"
          onClick={handleClickSearchTerm}
          title="clear search text"
        >
          {clearSearchIcon}
        </div>
      </div>
      <div className="chips-wrapper">
        {suggestions.map((suggestion) => {
          return (
            <Chip
              key={suggestion.text}
              title={suggestion.text}
              isActive={suggestion.isSelected}
              onClick={handleClickSearchWithSuggestion(suggestion)}
            />
          );
        })}
      </div>
      <div className="chips-wrapper" style={{ alignItems: "center" }}>
        <h4 style={{ fontSize: "14px" }}>Filters:</h4>
        {filters.map((filter) => {
          return (
            <Chip
              key={nanoid()}
              title={filter.charAt(0).toUpperCase() + filter.slice(1)}
              isActive={resourceFilter === filter}
              onClick={() => handleClickFilterChip(filter)}
            />
          );
        })}
      </div>
    </div>
  );
}
