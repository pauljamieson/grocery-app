"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

//TODO Add debounce to reduce API requests

export default function SearchBar() {
  const [userInput, setUserInput] = useState("");


  return (
    <div className="outline-none w-full p-3 flex justify-center max-w-md">
      <input
        type="search"
        placeholder="Find list..."
        className="outline-none border w-full p-1"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      ></input>
    </div>
  );
}
