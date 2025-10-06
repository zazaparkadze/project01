import getUserTodos from "@/lib/getUserTodos";
import getAllUsers from "@/lib/getAllUsers";
import getUser from "@/lib/getUser";
import Home from "@/ui/Home";
import { clsx } from "clsx";
import type { Metadata } from "next";

export async function generateMetadata({ params }: Params) {
  const { userId } = await params;
  const user = await getUser(userId);

  if (!user)
    return {
      title: `no user found`,
      description: `no user found`,
    };

  const metadata: Metadata = {
    title: `todos of ${user.name}`,
    description: `todos of ${user.name}`,
  };
  return metadata;
}

export default async function pageTodos({ params }: Params) {
  const { userId } = await params;
  const todosData: Promise<Todo[]> = getUserTodos(userId);

  const todos = await todosData;
  if (!todos.length) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-9">
        <p className="text-4xl text-red-500">No user - No list </p>
        <Home filename={__filename} />
      </div>
    );
  }

  const content = (
    <div
      className="flex flex-col items-center min-h-screen gap-9
     [&>*:nth-child(21)]:order-[-1] [&>*:nth-child(21)]:my-3 [&>*:nth-child(21)]:w-[100vw] [&>*:nth-child(21)]:justify-center "
    >
      {todos.map((todo) => (
        <section
          key={todo.id}
          className="[&>*:nth-child(2)]:text-red-500 w-[70vw] flex flex-col"
        >
          <p className="text-amber-300 bg-transparent text-center text-2xl">
            {todo.id}
          </p>
          <p className="text-2xl">Title: {todo.title} </p>
          <p
            className={clsx(
              {
                "text-white text-2xl font-bold": todo.completed === false,
                "text-fuchsia-900 text-2xl font-bold": todo.completed === true,
              },
              "bg-amber-500 whitespace-nowrap overflow-x-hidden overflow-ellipsis text-center"
            )}
          >
            Completed: {todo.completed ? "Yes" : "In progress"}
          </p>
        </section>
      ))}
      <div className="flex items-center">
        <Home filename={__filename} />
      </div>
    </div>
  );
  return content;
}

export async function generateStaticParams() {
  const users: User[] = await getAllUsers();
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
