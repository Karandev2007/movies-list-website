import Link from 'next/link'

const movies = [
  { id: 'strangerthings', title: 'Stranger Things', year: 2016, image: 'https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/t/b/f/medium-stranger-things-tv-series-poster-for-room-office-13-inch-original-imafgfzzzvkrenpd.jpeg?q=20&crop=false' },
]

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {movies.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer">
            <img src={movie.image} alt={movie.title} className="w-full h-60 object-cover rounded-md" />
            <h2 className="mt-2 text-xl font-semibold">{movie.title}</h2>
            <p className="mt-1 text-gray-400">{movie.year}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Home