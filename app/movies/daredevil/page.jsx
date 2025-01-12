"use client"
import { useRouter } from 'next/navigation';

export default function Daredevil() {
const router = useRouter()

return (
    <div className="min-h-screen bg-black text-white p-8">
        {/* main title of the page */}
        <h1 className="text-4xl font-bold text-center mb-8">Grue Movies</h1>
        
        {/* back button with inline event */}
        <button 
            onClick={() => router.back()} 
            className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg font-semibold"
        >
            ← back
        </button>

        {/* movie title and year */}
        <h2 className="text-3xl font-bold mb-6 mt-6">Daredevil (2015)</h2>

        {/* layout with flexbox */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* poster image with fixed size */}
            <img src="https://upload.wikimedia.org/wikipedia/en/1/1b/Daredevil_season_1_poster.jpg"
                alt="daredevil poster"
                className="w-64 h-96 object-cover rounded-md"
            />
            
            {/* movie details section */}
            <div className="flex-1 space-y-6">
                <h5 className="text-2xl font-bold">📜 storyline:</h5>
                <p>
                    blinded as a young boy, matt murdock fights crime as a lawyer by day and the vigilante daredevil at night. he battles kingpin and more...
                </p>

                <h5 className="text-2xl font-bold">🎥 streaming:</h5>
                <p>🟥 Disney+ hotstar</p>

                {/* watch button with basic link */}
                <a href="https://www.hotstar.com/in/shows/marvels-daredevil/1260091261" 
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg font-semibold">
                        watch now
                    </button>
                </a>
            </div>
        </div>

        {/* split section for cast and trailer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* cast list */}
            <div>
                <h5 className="text-2xl font-bold">🎬 cast:</h5>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Charlie Cox as Matt Murdock</li>
<li>Deborah Ann Woll as Karen Page</li>
<li>Eldon Henson as Foggy Nelson</li>
<li>Vincent D'Onofrio as Kingpin</li>
<li>Rosario Dawson as Claire Temple</li>

                </ul>
            </div>

            {/* video trailer */}
            <div>
                <h5 className="text-2xl font-bold">🎞️ trailer:</h5>
                <iframe 
                    width="315" 
                    height="175" 
                    src="https://www.youtube.com/embed/jAy6NJ_D5vU"
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