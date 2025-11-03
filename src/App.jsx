// Reactというライブラリを読み込む
import React from "react";
import "./App.css";

const songs = [
  { title: "歌が生まれるとき", url: "https://www.youtube.com/embed/mHNuhgddM80" },
  { title: "ひとりごと (feat. 初音ミク)", url: "https://www.youtube.com/embed/NZ209ci95Q8" },
  { title: "情熱は消えない (feat. 初音ミク)", url: "https://www.youtube.com/embed/AZu5eG7Al8s" },
  { title: "Don't Worry, Be Easy (feat. 初音ミク)", url: "https://www.youtube.com/embed/umErr5H7pM0" },
  { title: "誰も聴かない曲 (feat. 初音ミク)", url: "https://www.youtube.com/embed/_Myk7FuE6sk" },
];

function App() {
  return (
    <div className="app-container">
      <h1>スプリング・マキ</h1>
      <p className="subtitle">初音ミクと作ったオリジナル曲たちを紹介しています♪</p>

      <div className="w-full max-w-md mx-auto space-y-8">
        {[...songs].reverse().map((song) => (
          <div key={song.url} className="song-card">
            <h2 className="song-title">{song.title}</h2>
            <div className="video-wrapper">
              <iframe
                src={song.url}
                title={song.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <footer>© 2025 Spring Maki</footer>
    </div>
  );
}

export default App;
