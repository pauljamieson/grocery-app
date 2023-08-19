"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  function handleClick() {
    signOut({ redirect: true, callbackUrl: "/" });
  }
  return (
    <div>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
}
