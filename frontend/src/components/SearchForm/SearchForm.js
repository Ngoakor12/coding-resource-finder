import { useContext, useEffect, useState } from "react";
import { useParams} from 'react-router-dom';
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
  const {filterType} = useParams();
  
  const { searchTerm, setSearchTerm, renderedResources, setRenderedResources, getResourcesAllPages, getPageOfResources } =
  useContext(Context);
  const [suggestions, setSuggestions] = useState(initialSuggestions || "");
  const [data, setData] = useState([])


  useEffect(() => {
    setSearchTerm("")//eslint-disable-next-line
  }, [filterType])

  const loaData = () => {
    getResourcesAllPages()
    .then((resources) => {
      setData(resources);
    })
    .catch((error) => {
      throw error;
    });
  }

  useEffect(() => {
    handleSearch();
    loaData()
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

  function handleSearch() {
    let result = [];
    result = data.filter(({title}) => {
      return (title.toLowerCase().includes(searchTerm.toLocaleLowerCase().trim()));
    });
    
    if (result.length > 0 && searchTerm.trim()) {
      setRenderedResources(result);
    } else if (searchTerm.trim() && !result.length) {
      setRenderedResources([]);
    } else {
      setRenderedResources(data);
      setSuggestions(initialSuggestions);
    }
  }

  const handleClear = () => {
    if(searchTerm !== '') {
      setData(renderedResources)
      getPageOfResources()
      .then((resources) => {
        setRenderedResources(resources)
      })
      .catch((error) => {
        throw error;
      });
    }
    setSearchTerm("")
  }

  return (
    <div className="search-input-wrapper">
      <FilterTabs />
      <div className="search-input-inner-wrapper">
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
          onClick={() => handleClear()}
          title="clear search text"
        >
          {clearSearchIcon}
        </div>
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
