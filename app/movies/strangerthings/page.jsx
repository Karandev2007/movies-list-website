"use client";
import { useRouter } from 'next/navigation';

export default function StrangerThings() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">GrueMovies</h1>

      <button onClick={() => router.back()} className="text-red-600 text-lg mb-4">&larr; Back</button>

      <h2 className="text-3xl font-bold mb-4">Stranger Things (2016)</h2>
      <img
        src="https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/t/b/f/medium-stranger-things-tv-series-poster-for-room-office-13-inch-original-imafgfzzzvkrenpd.jpeg?q=20&crop=false"
        alt="Stranger Things"
        className="w-64 h-96 object-cover rounded-md"
      />

      <h5 className="text-2xl font-bold mt-6">📜 Storyline:</h5>
      <p className="mt-4">
        In the small town of Hawkins, Indiana, a young boy named Will Byers goes missing, setting off a chain of strange and supernatural events. His friends, along with a mysterious girl named Eleven who possesses telekinetic powers, discover that his disappearance is linked to a secretive government lab and a parallel dimension called the "Upside Down."
      </p>

      <h5 className="text-2xl font-bold mt-6">Available On:</h5>
      <p className="mt-2">🟥 Netflix</p>

      <h5 className="text-2xl font-bold mt-6">🎬 Cast:</h5>
      <ul className="list-disc pl-5 mt-2 space-y-2">
        <li>Millie Bobby Brown as Eleven</li>
        <li>Finn Wolfhard as Mike Wheeler</li>
        <li>Winona Ryder as Joyce Byers</li>
        <li>David Harbour as Jim Hopper</li>
        <li>Gaten Matarazzo as Dustin Henderson</li>
      </ul>

      <h5 className="text-2xl font-bold mt-6">📽️ Total Seasons & Episodes:</h5>
      <p className="mt-2">4 Seasons | 34 Episodes</p>

      <a
        href="https://www.netflix.com/title/80057281"
        target="_blank"
      >
        <button className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg">
          Watch on Netflix
        </button>
      </a>
    </div>
  );
}