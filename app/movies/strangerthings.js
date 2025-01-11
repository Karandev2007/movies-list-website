import Link from 'next/link'

const Movie1 = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Movie 1</h1>
      <img src="/images/movie1.jpg" alt="Movie 1" className="w-full h-96 object-cover mt-4" />
      <p className="mt-4 text-white">Description of Movie 1</p>
      <a href="" className="mt-4 text-blue-400">Download</a>
      <Link href="/">Back to Homepage</Link>
    </div>
  )
}

export default Movie1
