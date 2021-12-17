const SearchForm = (props) => {
  return (
    <div className="search-input-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="search a resource..."
        onInput={props.setSearchTerm}
        onChange={props.handleSearch}
      />
    </div>
  );
};

export default SearchForm;
