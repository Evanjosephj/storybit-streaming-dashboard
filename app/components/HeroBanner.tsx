import Image from 'next/image';
import { Movie } from '@/types/movie';

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <div className="relative h-[70vh] w-full">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute bottom-20 left-10 text-white max-w-xl">
        <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
        <p className="text-lg">{movie.overview}</p>
      </div>
    </div>
  );
}