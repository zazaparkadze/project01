import { notFound } from "next/navigation";

export default async function getUserTodos(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
    { next: { revalidate: 3600 }, cache: "force-cache" }
  );
  if (!res.ok) notFound();

  return res.json();
}
