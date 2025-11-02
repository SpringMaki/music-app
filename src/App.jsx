import React from "react";

const songs = [
  { title: "歌が生まれるとき", youtube: "https://youtu.be/mHNuhgddM80" },
  { title: "ひとりごと (feat. 初音ミク)", youtube: "https://youtu.be/NZ209ci95Q8" },
  { title: "情熱は消えない (feat. 初音ミク)", youtube: "https://www.youtube.com/watch?v=AZu5eG7Al8s" },
  { title: "Don't Worry, Be Easy (feat. 初音ミク)", youtube: "https://www.youtube.com/watch?v=umErr5H7pM0" },
  { title: "誰も聴かない曲 (feat. 初音ミク)", youtube: "https://www.youtube.com/watch?v=_Myk7FuE6sk" },
];

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>🎵 SpringMakiMusic 🎵</h1>
      <p>自作曲の紹介ページへようこそ！</p>
      <ul>
        {songs.map((song, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <strong>{song.title}</strong><br />
            <a href={song.youtube} target="_blank" rel="noopener noreferrer">
              ▶ YouTubeで聴く
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
