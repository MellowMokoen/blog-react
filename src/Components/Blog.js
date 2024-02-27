import React from "react";

export default function Blog() {
  return (
    <div>
      <div className="text-gray">Blog</div>
      <h1 className="text-3xl font-bold">Best of the week</h1>
      <ul>
        <li>Trending</li>
        <li>Popular</li>
        <li>Latest</li>
      </ul>

      <input
        type="search"
        className="rounded-full outline outline-2 outline-offset-2"
        placeholder="Read about..."
      />
    </div>
  );
}
