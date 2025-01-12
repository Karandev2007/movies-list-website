"use client"
import { useRouter } from 'next/navigation'

export default function MoonKnight() {
    const router = useRouter() // basic router setup

    return (
        <div className="min-h-screen bg-black text-white p-8">
            {/* Title section */}
            <h1 className="text-4xl font-bold text-center mb-8">grue movies</h1>

            {/* Back button */}
            <button
                onClick={() => router.back()}
                className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg"
            >
                &larr; back
            </button>

            {/* Movie title */}
            <h2 className="text-3xl font-bold mb-6 mt-6">moon knight (2022)</h2>

            {/* Main movie info layout */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">

                {/* Image of the movie */}
                <img
                    src="https://m.media-amazon.com/images/M/MV5BNDAzNmYwZjgtNDc3YS00ZDMyLTk0MjktMTg4MGNmNGU3MjlhXkEyXkFqcGc@._V1_.jpg"
                    alt="Moon Knight Poster"
                    className="w-64 h-96 object-cover rounded-md"
                />

                {/* Movie description section */}
                <div className="flex-1 space-y-6">
                    <h5 className="text-2xl font-bold">📜 storyline:</h5>
                    <p>
                        stephen grant, a mild-mannered gift shop employee, discovers he has dissociative identity disorder and shares a body with mercenary marc spector. as they uncover secrets about a cult led by khonshu, stephen must embrace his life as moon knight.
                    </p>

                    {/* Streaming information */}
                    <h5 className="text-2xl font-bold">🎥 streaming platform:</h5>
                    <p>🟥 disney+ hotstar</p>

                    {/* Watch button */}
                    <a
                        href="https://www.hotstar.com/in/shows/moon-knight/1260089681"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg">
                            watch now
                        </button>
                    </a>
                </div>
            </div>

            {/* Cast and trailer section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

                {/* Cast details */}
                <div>
                    <h5 className="text-2xl font-bold">🎬 cast:</h5>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Oscar Isaac as Stephen Grant / Marc Spector</li>
                        <li>Ethan Hawke as Arthur Harrow</li>
                        <li>May Calamawy as Layla El-Faouly</li>
                        <li>Francis Ford Coppola as Khonshu</li>
                        <li>Selena Kyle as Ta-Weret</li>
                    </ul>
                </div>

                {/* Embedded trailer */}
                <div>
                    <h5 className="text-2xl font-bold">🎞️ trailer:</h5>
                    <iframe
                        width="320"
                        height="180"
                        src="https://www.youtube.com/embed/x7Krla_UxRg"
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
