import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../appwrite.js';
export function useTrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingError, setTrendingError] = useState('');
  const [isLoadingTrending, setIsLoadingTrending] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadTrendingMovies = async () => {
      setTrendingError('');
      setIsLoadingTrending(true);
      try {
        const movies = await getTrendingMovies();

        if (!isMounted) return;

        setTrendingMovies(movies);
      } catch (error) {
        if (!isMounted) return;
        console.log('Error fetching trending movies', error);
        setTrendingError('Failed to fetch trending movies');
      } finally {
        if (!isMounted) return;
        setIsLoadingTrending(false);
      }
    };
    loadTrendingMovies();
    return () => {
      isMounted = false;
    };
  }, []);

  return { trendingMovies, isLoadingTrending, trendingError };
}
