import React from "react";
import "./App.css";

const songs = [
  {
    title: "歌が生まれるとき",
    url: "https://www.youtube.com/embed/mHNuhgddM80",
  },
  {
    title: "ひとりごと (feat. 初音ミク)",
    url: "https://www.youtube.com/embed/NZ209ci95Q8",
  },
  {
    title: "情熱は消えない (feat. 初音ミク)",
    url: "https://www.youtube.com/embed/AZu5eG7Al8s",
  },
  {
    title: "Don't Worry, Be Easy (feat. 初音ミク)",
    url: "https://www.youtube.com/embed/umErr5H7pM0",
  },
  {
    title: "誰も聴かない曲 (feat. 初音ミク)",
    url: "https://www.youtube.com/embed/_Myk7FuE6sk",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white text-gray-800 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-pink-600 text-center">
        🎵 SpringMaki Music 🎵
      </h1>
      <p className="mb-4 text-center">
        初音ミクと作ったオリジナル曲たちを紹介しています♪
      </p>

      <div className="w-full max-w-md space-y-8">
        {songs.map((song) => (
          <div
            key={song.url}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 border border-pink-200"
          >
            <h2 className="text-lg font-semibold text-pink-600 mb-2 text-center">
              {song.title}
            </h2>
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={song.url}
                title={song.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-10 text-sm text-gray-400">
        © 2025 SpringMaki
      </footer>
    </div>
  );
}

export default App;
