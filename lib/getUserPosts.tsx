export default async function GetUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 }, cache: "force-cache" }
  );
  if (!res.ok) return undefined;
  return res.json();
}
