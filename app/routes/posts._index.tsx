import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main className="flex flex-col max-w-full items-center px-4 md:px-8 py-16">
      <div className="max-w-1200 w-full flex flex-col gap-8 py-10">
        <h1 className="text-6xl font-semibold">Latest News</h1>
      </div>
      <ul className="max-w-1200 w-full grid gap-8 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <li
            key={post.slug}
            className={`${
              index === 0
                ? `col-span-1 md:col-span-2 lg:col-span-3 p-6 rounded-lg shadow-lg bg-[url('/${post.banner}')]`
                : `p-4 rounded-md shadow-sm bg-[url('/${post.banner}')]`
            }`}
          >
            {index === 0 ? (
              <Link
                to={post.slug}
                className={`text-blue-600 underline bg-[url('/${post.banner}')]`}
              >
                <h2 className="text-4xl font-bold">{post.title}</h2>
                <p className="mt-4 text-lg">{post.excerpt}</p>
              </Link>
            ) : (
              <Link to={post.slug} className="text-blue-600 underline">
                {post.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
