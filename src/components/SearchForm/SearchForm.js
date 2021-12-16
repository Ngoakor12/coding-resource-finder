const SearchForm = (props) => {
  return (
    <div className="search-input-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="search a resource..."
        value={props.searchTerm}
        onInput={props.setSearchTerm}
        onChange={props.handleSearch}
      />
    </div>
  );
};

export default SearchForm;
