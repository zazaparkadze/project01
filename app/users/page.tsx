import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "users",
  description: "users list from jsonplaceholder",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = users.map((user) => (
    <p key={user.id} className="text-2xl text-amber-300">
      <Link href={`users/${user.id}`}>{user.name}</Link>
    </p>
  ));
  return content;
}
