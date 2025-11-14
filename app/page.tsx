import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';
import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies } from '@/lib/tmdb';

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const nowPlayingMovies = await getNowPlayingMovies();

  return (
    <div className="bg-black min-h-screen">
      <HeroBanner movie={popularMovies[0]} />
      <MovieRow movies={popularMovies} categoryTitle="Popular on Netflix" />
      <MovieRow movies={topRatedMovies} categoryTitle="Top Rated" />
      <MovieRow movies={nowPlayingMovies} categoryTitle="Now Playing" />
    </div>
  );
}