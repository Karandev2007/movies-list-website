import Link from 'next/link';

const movies = [
  {
    title: 'Stranger Things',
    year: 2016,
    image: 'https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/t/b/f/medium-stranger-things-tv-series-poster-for-room-office-13-inch-original-imafgfzzzvkrenpd.jpeg?q=20&crop=false',
    path: '/movies/strangerthings',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold text-center mb-8">Grue Movies</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <Link key={movie.title} href={movie.path} className="group">

            <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-60 object-cover rounded-md"
              />
              <h2 className="mt-4 text-2xl">{movie.title}</h2>
              <p className="text-gray-400">{movie.year}</p>

              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg">Check Out</button>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}