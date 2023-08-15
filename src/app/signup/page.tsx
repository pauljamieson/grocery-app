"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default async function SignUp() {
  const { push } = useRouter();
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
    <div className="flex justify-center">
      <form
        className="flex flex-col max-w-md"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <label htmlFor="confirm">Configm Password</label>
        <input id="confirm" type="password" />
        <input type="submit" />

        <Link href={"/"}>Cancel</Link>
      </form>
    </div>
  );
}
