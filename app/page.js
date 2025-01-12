import Link from 'next/link';

// Movie data array (could be expanded later)
const movies = [
    {
        title: 'Stranger Things',
        year: 2016,
        image: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F520a57d8-e283-48db-bba5-718a45d679a4_1600x900.jpeg',
        path: '/movies/strangerthings',
    },
    {
        title: 'Breaking Bad',
        year: 2008,
        image: 'https://images.indianexpress.com/2018/01/breaking-bad-759.jpg',
        path: '/movies/breakingbad',
    },
    {
        title: 'The Boys',
        year: 2019,
        image: 'https://assets.aboutamazon.com/dims4/default/0815d77/2147483647/strip/true/crop/2548x1434+1+0/resize/2640x1486!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F34%2F65%2Ffb00aebc49a7985bc9571d042264%2Ffull-width-mobile-first-hero-2550x1434.jpg',
        path: '/movies/theboys',
    },
    {
        title: 'Loki',
        year: 2019,
        image: 'https://infinitefreetime.com/wp-content/uploads/2021/07/loki-lede-1.jpg',
        path: '/movies/loki',
    },
    {
        title: 'Moon Knight',
        year: 2022,
        image: 'https://images.justwatch.com/backdrop/300537705/s640/moon-knight',
        path: '/movies/moonknight',
    },
    {
        title: 'Daredevil',
        year: 2015,
        image: 'https://resizing.flixster.com/E3VgF4evZBZb2TbqnunQbhyfluM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11408531_b_h9_aa.jpg',
        path: '/movies/daredevil',
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            {/* Main Title */}
            <h1 className="text-4xl font-bold text-center mb-8">Grue Movies</h1>

            {/* Movie Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Mapping through movie data */}
                {movies.map((movie, index) => (
                    <Link key={index} href={movie.path} className="group">
                        <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
                            {/* Movie Image */}
                            <img
                                src={movie.image}
                                alt={movie.title + ' Poster'}
                                className="w-full h-60 object-cover rounded-md"
                            />
                            {/* Movie Title */}
                            <h2 className="mt-4 text-2xl">{movie.title}</h2>
                            {/* Release Year */}
                            <p className="text-gray-400">{movie.year}</p>
                            {/* Check Out Button */}
                            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg">
                                Check Out
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}