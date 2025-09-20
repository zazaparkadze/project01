import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import getAllUsers from "@/lib/getAllUsers";
import Home from "@/ui/Home";
import type { Metadata } from "next";
import { UserPosts } from "./components/UserPosts";
import { Suspense } from "react";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: Params) {
  const { userId } = await params;
  const userData = getUser(userId);

  const user = await userData;

  if (!user.name) {
    return {
      title: "user not found",
      desctiption: "no user,",
    };
  }

  const metadata: Metadata = {
    title: `${user.name}`,
    description: `Page of ${user.name}`,
  };
  return metadata;
}

export default async function UserPage({ params }: Params) {
  const { userId } = await params;
  const userData: Promise<User> = getUser(userId);
  const postsData: Promise<Post[]> = getUserPosts(userId);
  const user = await userData;

  if (!user) notFound();

  const contant = (
    <>
      <p className="text-3xl text-amber-300">{user.name}</p>
      <br />
      <hr />
      <Suspense fallback={<p>loading...</p>}>
        <UserPosts promise={postsData} />
      </Suspense>
      <div className="flex justify-end m-6 ">
        <Home filename={__filename} />
      </div>
    </>
  );

  return contant;
}
export async function generateStaticParams() {
  const users: User[] = await getAllUsers();
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
