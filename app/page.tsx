import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`${inter.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li>Name:</li>
          <li>Zaza Parkadze</li>
        </ol>
        <ul className="text-3xl">
          <li>
            <Link href={"/users"}> Users</Link>
          </li>
          <li>
            <Link href={"/todos"}>Todos</Link>
          </li>
          <li>
            <Link href={"profiles"}>Profiles</Link>
          </li>
        </ul>
        <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        copyright &copy; 2025
      </footer>
    </div>
  );
}
