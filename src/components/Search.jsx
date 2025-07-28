const Search = ({ searchTerm, onSearch }) => {
  return (
    <div className='search'>
      <div>
        <img src='./search.svg' alt='Search Icon' />
        <input
          type='text'
          placeholder='Search through thousands of movies'
          value={searchTerm}
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
