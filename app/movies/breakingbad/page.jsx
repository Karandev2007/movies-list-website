"use client"
import { useRouter } from 'next/navigation'

export default function BreakingBad() {
    const router = useRouter() // router for back nav, nothing fancy

    return (
        <div className="min-h-screen bg-black text-white p-8">
            {/* movie website title */}
            <h1 className="text-4xl font-bold text-center mb-8">grue movies</h1>

            {/* back button setup */}
            <button
                onClick={() => router.back()}
                className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg"
            >
                &larr; back
            </button>

            {/* movie name */}
            <h2 className="text-3xl font-bold mb-6 mt-6">breaking bad (2008)</h2>

            {/* movie layout with image and text */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">

                {/* poster image */}
                <img
                    src="https://images.indianexpress.com/2018/01/breaking-bad-759.jpg"
                    alt="breaking bad poster"
                    className="w-64 h-96 object-cover rounded-md"
                />

                {/* description & watch button */}
                <div className="flex-1 space-y-6">
                    <h5 className="text-2xl font-bold">📜 storyline:</h5>
                    <p>
                        walter white, a chemistry teacher with cancer, turns into a meth maker with jesse pinkman to make cash fast.
                    </p>

                    {/* streaming platform info */}
                    <h5 className="text-2xl font-bold">🎥 streaming:</h5>
                    <p>🟥 netflix</p>

                    {/* external link for netflix */}
                    <a
                        href="https://www.netflix.com/title/70143836"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg">
                            watch now
                        </button>
                    </a>
                </div>
            </div>

            {/* cast and trailer grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

                {/* Cast info block */}
                <div>
                    <h5 className="text-2xl font-bold">🎬 cast:</h5>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Bryan Cranston - Walter White</li>
                        <li>Aaron Paul - Jesse Pinkman</li>
                        <li>Anna Gunn - Skyler White</li>
                        <li>Dean Norris - Hank Schrader</li>
                        <li>Bob Odenkirk - Saul Goodman</li>
                    </ul>
                </div>

                {/* Trailer block with video embed */}
                <div>
                    <h5 className="text-2xl font-bold">🎞️ trailer:</h5>
                    <iframe
                        width="315"
                        height="180"
                        src="https://www.youtube.com/embed/HhesaQXLuRY"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="mt-4 rounded-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
