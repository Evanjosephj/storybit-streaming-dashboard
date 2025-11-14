import Image from 'next/image';
import Link from 'next/link';
import { getMovieById } from '@/lib/tmdb';

export default async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = await getMovieById(id);

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative h-[60vh] w-full">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="px-10 py-8">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
        
        <div className="flex gap-4 mb-6">
          <span className="text-green-500">⭐ {movie.vote_average.toFixed(1)}</span>
          <span>{movie.runtime} min</span>
          <span>{new Date(movie.release_date).getFullYear()}</span>
        </div>

        <div className="flex gap-2 mb-6">
          {movie.genres.map((genre) => (
            <span key={genre.id} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
              {genre.name}
            </span>
          ))}
        </div>

        <p className="text-lg max-w-3xl">{movie.overview}</p>
      </div>
    </div>
  );
}