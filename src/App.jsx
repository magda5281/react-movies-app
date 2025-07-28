import Search from './components/Search';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import TrendingList from './components/TrendingList.jsx';

import useMovies from './hooks/useMovies.js';

const App = () => {
  const { isLoading, errorMessage, searchTerm, handleSearch, movieList } =
    useMovies();

  return (
    <main>
      <div className='pattern'>
        <div className='wrapper'>
          <header>
            <img src='./hero.png' alt='Hero Banner' />
            <h1>
              Find <span className='text-gradient'>Movies</span> You'll enjoy
              Without the Hassle
            </h1>
            <Search searchTerm={searchTerm} onSearch={handleSearch} />
          </header>
          <TrendingList />
          <section className='all-movies'>
            <h2 className='mt-10'>All Movies</h2>
            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className='text-red-500'>{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
