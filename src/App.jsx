// Reactというライブラリを読み込む（これがないとJSXが使えない）
import React from "react";

// 見た目を整えるためのCSSファイルを読み込む
import "./App.css";

// ===== 曲のデータをまとめたリスト（配列） =====
const songs = [
  // 各曲は「タイトル」と「YouTubeのURL」を持つオブジェクト（データのまとまり）
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

// ====== ここから画面を作る関数コンポーネント ======
function App() {
  // return の中に書いたHTMLっぽいコード(JSX)が画面に表示される
  return (
    // 画面全体のデザイン設定（Tailwind CSSで装飾）
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white text-gray-800 flex flex-col items-center p-6">
      {/* タイトル部分 */}
      <h1 className="text-3xl font-bold mb-6 text-pink-600 text-center">
        🎵 SpringMaki Music 🎵
      </h1>

      {/* 説明文 */}
      <p className="mb-4 text-center">
        初音ミクと作ったオリジナル曲たちを紹介しています♪
      </p>

      {/* 曲リスト全体の枠 */}
      <div className="w-full max-w-md space-y-8">
        {/* songsリストを順に読み込んで表示 */}
        {songs.map((song) => (
          // 各曲カード
          <div
            key={song.url} // Reactが要素を区別するためのID
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 border border-pink-200"
          >
            {/* 曲タイトル */}
            <h2 className="text-lg font-semibold text-pink-600 mb-2 text-center">
              {song.title}
            </h2>

            {/* YouTube動画の埋め込み（16:9比率） */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={song.url} // YouTubeのURL
                title={song.title} // 動画のタイトル
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen // 全画面ボタンを許可
                className="absolute top-0 left-0 w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* フッター部分（ページの一番下） */}
      <footer className="mt-10 text-sm text-gray-400">
        © 2025 SpringMaki
      </footer>
    </div>
  );
}

// App関数を他のファイルから使えるようにする（必須）
export default App;
