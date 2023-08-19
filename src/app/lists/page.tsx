import GroceryLists from "@/components/GroceryLists";
import SearchBar from "@/components/SearchBar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { signIn } from "next-auth/react";

export default async function Lists() {
  /* const session = await getServerSession();
  console.log(session);
  if (session === null) return redirect("/auth/login");*/

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col items-center border-2 rounded w-full max-w-md">
        <h1>My Lists</h1>
        <SearchBar />
        <GroceryLists />
      </div>
    </div>
  );
}
