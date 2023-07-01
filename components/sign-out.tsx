"use client";

import { signOut } from "next-auth/react";
export default function SignOut() {
  return (
    <button
      className="hidden text-stone-400 hover:text-stone-200 transition-all"
      onClick={() => signOut()}
    >
      WELCOME!
    </button>
  );
}
