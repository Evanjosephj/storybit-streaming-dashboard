# StoryBit Streaming Dashboard

A Netflix-style streaming dashboard built with Next.js 14, TypeScript, and Tailwind CSS for the StoryBit Frontend Developer Assignment.

## Features
-  Hero banner with featured movie backdrop
-  Scrolling movie rows (Popular, Top Rated, Now Playing)
-  Movie detail pages with ratings, genres, and runtime
-  Responsive design with Tailwind CSS
-  TMDB API integration

## Setup Instructions

1. Clone the repository:

```bash
   git clone https://github.com/Evanjosephj/storybit-streaming-dashboard.git
   cd storybit-streaming-dashboard
```

2. Install dependencies:
```bash
   npm install
```

3. Create a `.env.local` file in the root directory and add your TMDB API key:
```
   TMDB_API_KEY=your_api_key_here
```
   Get your API key from: https://www.themoviedb.org/settings/api

4. Run the development server:
```bash
   npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **API:** The Movie Database (TMDB) API
- **Deployment:** Vercel

## Live Demo
[Deployment link will be added after Vercel deployment]

## Project Structure
```
my-streaming-app/
├── app/
│   ├── components/
│   │   ├── HeroBanner.tsx
│   │   └── MovieRow.tsx
│   ├── movie/[id]/
│   │   └── page.tsx
│   └── page.tsx
├── lib/
│   └── tmdb.ts
├── types/
│   └── movie.ts
└── .env.local
```