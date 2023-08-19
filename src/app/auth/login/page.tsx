"use client";

import { signOut, useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const inputClasses =
    "border rounded-md outline-none focus-within:shadow-fuzz focus-within:shadow-fuzz-blue p-2 text-black";

  const { status, data: session } = useSession();
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();
    const formURL = e.target.action;
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const resp = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { accept: "application/json" },
      });
      const result = await signIn("credentials", {
        ...data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (status === "loading") return null;
  if (status === "authenticated") router.push("/");

  return (
    <div className="flex items-center flex-col text-white mt-4">
      <div className="p-2 border rounded-lg bg-indigo-500">
        <h1 className="text-center">Welcome to Grocery Bag</h1>
        <br />
        <form
          className="flex flex-col max-w-md p-2 gap-2"
          method="post"
          onSubmit={handleSubmit}
        >
          <input
            className={inputClasses}
            id="username"
            type="text"
            placeholder="Username"
          />

          <input
            className={inputClasses}
            id="password"
            type="password"
            placeholder="password"
          />

          <input
            type="submit"
            value="Login"
            className="border w-fit self-center p-1 rounded shadow shadpw-blue active:shadow-none"
          />
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="text-yellow-300" href="/signup">
            Sign Up
          </Link>{" "}
          here.
        </p>
      </div>
    </div>
  );
}
