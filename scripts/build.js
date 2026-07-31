import fs from "fs";

const news = [
  {
    title: "AI NEWS Version 3",
    summary: "Version 3の動作確認です。",
    image: "https://placehold.co/1200x700?text=AI+NEWS",
    url: "https://example.com",
    date: new Date().toLocaleDateString("ja-JP")
  },
  {
    title: "2件目の記事",
    summary: "これは2件目の記事です。",
    image: "https://placehold.co/1200x700?text=NEWS2",
    url: "https://example.com",
    date: new Date().toLocaleDateString("ja-JP")
  },
  {
    title: "3件目の記事",
    summary: "これは3件目の記事です。",
    image: "https://placehold.co/1200x700?text=NEWS3",
    url: "https://example.com",
    date: new Date().toLocaleDateString("ja-JP")
  }
];

fs.writeFileSync(
  "data/news.json",
  JSON.stringify(news, null, 2),
  "utf8"
);

console.log("news.json を作成しました");