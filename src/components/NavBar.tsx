"use client";

import Link from "next/link";
import {
  FaUser,
  FaRectangleList,
  FaCirclePlus,
  FaRightToBracket,
} from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

interface NavBarProps {
  authenticated: boolean;
}

export default function NavBar({ authenticated }: NavBarProps) {
  return (
    <div className="flex flex-nowrap  whitespace-nowrap gap-3">
      {!authenticated ? (
        <Link
          id="lists-link"
          className=" p-1 rounded border border-gray-400 hover:bg-gray-400"
          href={"/auth/login"}
        >
          <FaRightToBracket size={28} />
          <Tooltip anchorSelect="#lists-link" place="bottom">
            Login
          </Tooltip>
        </Link>
      ) : (
        <>
          <Link
            id="lists-link"
            className=" p-1 rounded border border-gray-400 hover:bg-gray-400"
            href={"/lists"}
          >
            <FaRectangleList size={28} />
            <Tooltip anchorSelect="#lists-link" place="bottom">
              My Lists
            </Tooltip>
          </Link>
          <Link
            id="create-list"
            className=" p-1 rounded border border-gray-400 hover:bg-gray-400"
            href={"/list/create"}
          >
            <FaCirclePlus size={28} />
            <Tooltip anchorSelect="#create-list" place="bottom">
              Create List
            </Tooltip>
          </Link>
          <Link
            id="profile-link"
            className=" p-1 rounded border border-gray-400 hover:bg-gray-400"
            href={"/profile"}
          >
            <FaUser size={28} />
            <Tooltip anchorSelect="#profile-link" place="bottom">
              Profile
            </Tooltip>
          </Link>
        </>
      )}
    </div>
  );
}
