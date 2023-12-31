"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default async function SignUp() {
  const { push } = useRouter();

  const inputClasses =
    "border rounded-md outline-none focus-within:shadow-fuzz focus-within:shadow-fuzz-blue p-2 text-black";

  async function handleSubmit(e: any) {
    e.preventDefault();
    const formURL = e.target.action;
    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const resp = await fetch("api/user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { accept: "application/json" },
      });
      await resp.json();
      push("/api/auth/signin");
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="flex items-center flex-col text-white">
      <div className="p-2 border rounded-lg bg-indigo-500">
        <h1 className="text-center">Grocery Bag</h1>
        <h3 className="text-center">Welcome to Grocery Bag</h3>
        <form
          className="flex flex-col max-w-md p-2 gap-2"
          method="post"
          onSubmit={handleSubmit}
        >
          <input
            id="username"
            type="text"
            placeholder="username"
            className={inputClasses}
          />
          <input
            id="email"
            type="email"
            placeholder="email"
            className={inputClasses}
          />
          <input
            id="password"
            type="password"
            placeholder="password"
            className={inputClasses}
          />
          <input
            id="confirm"
            type="password"
            placeholder="confirm password"
            className={inputClasses}
          />
          <input
            type="submit"
            value="signup"
            className="border w-fit self-center p-1 rounded shadow shadpw-blue active:shadow-none"
          />
        </form>
      </div>
    </div>
  );
}
