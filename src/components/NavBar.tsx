"use client";

import { loginIcon } from "@/assets/icons";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <Image
        onClick={() => signIn()}
        src={loginIcon}
        alt={"login"}
        width="32"
        height="32"
      ></Image>
    </div>
  );
}
