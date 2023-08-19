import { getServerSession } from "next-auth";
import NavBar from "./NavBar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AppBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-between p-2 items-center border-b border-black h-20">
      <h1 className="font-bold whitespace-nowrap">GROCERY BAG</h1>
      <NavBar authenticated={session?.user ? true : false} />
    </div>
  );
}
