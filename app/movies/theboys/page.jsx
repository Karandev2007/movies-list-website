"use client";
import { useRouter } from 'next/navigation';

export default function TheBoys() {
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

            <h2 className="text-3xl font-bold mb-6 mt-6">The Boys (2019)</h2>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <img
                    src="https://i0.wp.com/jonathanpongratz.com/wp-content/uploads/2019/08/The-Boys.jpg?fit=404%2C608&ssl=1"
                    alt="The Boys"
                    className="w-64 h-96 object-cover rounded-md"
                />

                <div className="flex-1 space-y-6">
                    <h5 className="text-2xl font-bold">📜 storyline:</h5>
                    <p>
                        In a society where superheroes misuse their abilities, a team of vigilantes called "the boys" is determined to dismantle corrupt heroes. Led by Butcher, this group strives to reveal the sinister aspects of the supes and hold them accountable, all while contending with dangers from both the superheroes and influential organizations.
                    </p>

                    <h5 className="text-2xl font-bold">🎥 streaming platform:</h5>
                    <p>🟦 Amazon Prime Video</p>

                    <a
                        href="https://www.primevideo.com/detail/The-Boys/0KRGHGZCHKS920ZQGY5LBRF7MA"
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
                        <li>Karla Souza as Madelyn Stillwell</li>
                        <li>Jack Quaid as Hughie Campbell</li>
                        <li>Antony Starr as Homelander</li>
                        <li>Erin Moriarty as Starlight</li>
                        <li>Dennis Quaid as Butcher</li>
                    </ul>
                </div>

                {/* trailer */}
                <div>
                    <h5 className="text-2xl font-bold">🎞️ trailer:</h5>
                    <iframe
                        width="320"
                        height="180"
                        src="https://www.youtube.com/embed/M1bhOaLV4FU"
                        title="The Boys Trailer"
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
