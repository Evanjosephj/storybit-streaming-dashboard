'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/types/movie';

interface MovieRowProps {
  movies: Movie[];
  categoryTitle: string;
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  return (
    <div className="px-10 py-6">
      <h2 className="text-2xl font-bold text-white mb-4">{categoryTitle}</h2>
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {movies.map((movie) => (
          <Link 
            key={movie.id} 
            href={`/movie/${movie.id}`}
            className="flex-shrink-0 hover:scale-105 transition-transform"
          >
            <div className="relative w-48 h-72">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}