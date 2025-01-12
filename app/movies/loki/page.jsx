"use client"
import { useRouter } from 'next/navigation'

export default function Loki() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* main header */}
      <h1 className="text-4xl font-bold text-center mb-8">grue movies</h1>

      {/* back button added here */}
      <button
        onClick={() => router.back()}
        className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg"
      >
        &larr; back
      </button>

      {/* title for the movie */}
      <h2 className="text-3xl font-bold mb-6 mt-6">loki (2021)</h2>

      {/* Movie content block */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* movie poster image */}
        <img
          src="https://i.gadgets360cdn.com/large/loki_poster_1622796985059.jpeg"
          alt="loki poster"
          className="w-64 h-96 object-cover rounded-md"
        />

        {/* storyline section */}
        <div className="flex-1 space-y-6">
          <h5 className="text-2xl font-bold">📜 storyline:</h5>
          <p>
            after stealing the tesseract during the events of avengers: endgame, loki creates a new timeline and is captured by the time variance authority (tva). loki must work with agent mobius to fix the timeline and prevent chaos across the multiverse, while discovering a deeper conspiracy.
          </p>

          {/* Streaming information */}
          <h5 className="text-2xl font-bold">🎥 streaming platform:</h5>
          <p>🟥 disney+ hotstar</p>

          {/* Watch button */}
          <a
            href="https://www.hotstar.com/in/shows/loki/1260063451"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg">
              watch now
            </button>
          </a>
        </div>
      </div>

      {/* cast and trailer sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Cast section */}
        <div>
          <h5 className="text-2xl font-bold">🎬 cast:</h5>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Tom Hiddleston as Loki</li>
            <li>Owen Wilson as Mobius M. Mobius</li>
            <li>Sophia Di Martino as Sylvie</li>
            <li>Gjokar Nunez as B-15</li>
            <li>Wunmi Mosaku as Hunter C-20</li>
          </ul>
        </div>

        {/* Trailer Section */}
        <div>
          <h5 className="text-2xl font-bold">🎞️ trailer:</h5>
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/nW948Va-l10"
            title="loki trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-4 rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
