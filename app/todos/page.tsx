import { notFound } from "next/navigation";
import Link from "next/link";

async function TodosPage() {
  const users: User[] = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  if (!users.length) notFound();
  return (
    <div>
      <p className="text-4xl text-amber-400">TodosPage</p>
      {users.map((user) => (
        <p key={user.id} className="text-2xl text-amber-300">
          <Link href={`todos/${user.id}`}>{user.username}</Link>
        </p>
      ))}
    </div>
  );
}

export default TodosPage;
