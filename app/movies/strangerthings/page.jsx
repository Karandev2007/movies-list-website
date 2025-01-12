"use client";
import { useRouter } from 'next/navigation';

export default function StrangerThings() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* page title */}
      <h1 className="text-4xl font-bold text-center mb-8">Grue Movies</h1>

      {/* back button */}
      <button
        onClick={() => router.back()}
        className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg"
      >
        &larr; back
      </button>

      <h2 className="text-3xl font-bold mb-6 mt-6">Stranger Things (2016)</h2>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/t/b/f/medium-stranger-things-tv-series-poster-for-room-office-13-inch-original-imafgfzzzvkrenpd.jpeg?q=20&crop=false"
          alt="stranger things"
          className="w-64 h-96 object-cover rounded-md"
        />

        <div className="flex-1 space-y-6">
          <h5 className="text-2xl font-bold">📜 storyline:</h5>
          <p>
            in the small town of hawkins, indiana, a young boy named will byers goes missing, setting off a chain of strange and supernatural events. his friends, along with a mysterious girl named eleven who possesses telekinetic powers, discover that his disappearance is linked to a secretive government lab and a parallel dimension called the "upside down."
          </p>

          <h5 className="text-2xl font-bold">🎥 streaming platform:</h5>
          <p>🟥 Netflix</p>

          <a
            href="https://www.netflix.com/title/80057281"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg">
              watch now
            </button>
          </a>
        </div>
      </div>

      {/* cast and trailer section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <div>
          <h5 className="text-2xl font-bold">🎬 cast:</h5>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Millie Bobby Brown as Eleven</li>
            <li>Finn Wolfhard as Mike Wheeler</li>
            <li>Winona Ryder as Joyce Byers</li>
            <li>David Harbour as Jim Hopper</li>
            <li>Gaten Matarazzo as Dustin Henderson</li>
          </ul>
        </div>

        {/* trailer */}
        <div>
          <h5 className="text-2xl font-bold">🎞️ trailer:</h5>
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/b9EkMc79ZSU"
            title="stranger things trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-4 rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
