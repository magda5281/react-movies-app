import { useTrendingMovies } from '../hooks/useTrendingMovies.js';
import Spinner from './Spinner';

const TrendingList = () => {
  const { trendingMovies, trendingError, isLoadingTrending } =
    useTrendingMovies();

  return (
    <section className='trending'>
      <h2>Trending movies</h2>

      {isLoadingTrending ? (
        <Spinner />
      ) : trendingError ? (
        <p className='text-red-500'>{trendingError}</p>
      ) : (
        <ul>
          {trendingMovies.map((movie, index) => {
            return (
              <li key={movie.$id}>
                <p>{index + 1}</p>
                <img src={movie.poster_url} alt={movie.title} />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default TrendingList;
