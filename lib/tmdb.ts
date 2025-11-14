import { Movie, MovieDetail } from '@/types/movie';

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies(): Promise<Movie[]> {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error('Failed to fetch popular movies');
  const data = await res.json();
  return data.results;
}

export async function getTopRatedMovies(): Promise<Movie[]> {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error('Failed to fetch top rated movies');
  const data = await res.json();
  return data.results;
}

export async function getNowPlayingMovies(): Promise<Movie[]> {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error('Failed to fetch now playing movies');
  const data = await res.json();
  return data.results;
}

export async function getMovieById(id: string): Promise<MovieDetail> {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error('Failed to fetch movie details');
  const data = await res.json();
  return data;
}