"use client";

import { useState } from "react";

//TODO Add debounce to reduce API requests

export default function SearchBar() {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="outline-none w-full m-2 p-1 flex justify-center">
      <input
        type="search"
        placeholder="Find list..."
        className="outline-none border max-w-xl w-full p-1"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      ></input>
    </div>
  );
}
