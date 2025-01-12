"use client";
import { useRouter } from 'next/navigation';

export default function BreakingBad() {
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

            <h2 className="text-3xl font-bold mb-6 mt-6">Breaking Bad (2008)</h2>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <img
                    src="https://images.indianexpress.com/2018/01/breaking-bad-759.jpg"
                    alt="breaking bad"
                    className="w-64 h-96 object-cover rounded-md"
                />

                <div className="flex-1 space-y-6">
                    <h5 className="text-2xl font-bold">📜 storyline:</h5>
                    <p>
                        breaking bad follows walter white, a high school chemistry teacher diagnosed with cancer, who turns to cooking methamphetamine with former student jesse pinkman to secure his family's financial future.
                    </p>

                    <h5 className="text-2xl font-bold">🎥 streaming platform:</h5>
                    <p>🟥 Netflix</p>

                    <a
                        href="https://www.netflix.com/title/70143836"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg">
                            Watch Now
                        </button>
                    </a>
                </div>
            </div>

            {/* cast and trailer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                <div>
                    <h5 className="text-2xl font-bold">🎬 cast:</h5>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Bryan Cranston as Walter White</li>
                        <li>Aaron Paul as Jesse Pinkman</li>
                        <li>Anna Gunn as Skyler White</li>
                        <li>Dean Norris as Hank Schrader</li>
                        <li>Bob Odenkirk as Saul Goodman</li>

                    </ul>
                </div>

                {/* trailer */}
                <div>
                    <h5 className="text-2xl font-bold">🎞️ trailer:</h5>
                    <iframe
                        width="320"
                        height="180"
                        src="https://www.youtube.com/embed/HhesaQXLuRY"
                        title="breaking bad trailer"
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
