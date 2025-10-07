import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

type Props = {
  filename: string;
};

export default function Home({ filename }: Props) {
  return (
    <button
      className={clsx(
        "text-4xl min-w-[200px] px-[10px] py-[4px] border-2  rounded-2xl",
        {
          "text-amber-400  bg-slate-500":
            filename === "/ROOT/app/profiles/page.tsx",
          "text-gray-800  bg-lime-600": filename === "/ROOT/ui/Home.tsx",
          "bg-amber-500 text-blue-900":
            filename === "/ROOT/app/todos/[userId]/page.tsx",
        }
      )}
    >
      <Link href={"/"}>Home</Link>
    </button>
  );
}
