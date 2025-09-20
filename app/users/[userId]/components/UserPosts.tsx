type Props = {
  promise: Promise<Post[]>;
};

export async function UserPosts({ promise }: Props) {
  const posts = await promise;

  const content = posts.map((post) => (
    <section key={post.id}>
      <p className="text-amber-200 text-2xl">{post.title}</p>
      <br />
      <p>{post.body}</p>
      <hr />
    </section>
  ));

  return content;
}
