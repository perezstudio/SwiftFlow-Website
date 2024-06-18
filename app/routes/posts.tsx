import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { fetchAllPosts } from "~/utils/airtable.server";
import { BlogPost } from "~/types/types";

export const loader: LoaderFunction = async () => {
  const posts = await fetchAllPosts();
  return json({ posts });
};

export default function Posts() {
  const { posts } = useLoaderData<BlogPost>();
  return (
    <main className="flex flex-col max-w-full items-center px-4 py-8 gap-8">
      <div className="max-w-1200 w-full flex flex-col py-4 md:py-10">
        <h1 className="text-4xl md:text-6xl font-semibold">Latest News</h1>
      </div>
      <ul className="max-w-1200 w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Link
            to={post.slug}
            className={`${
              index === 0
                ? `col-span-1 md:col-span-2 lg:col-span-3 p-4 md:p-6 rounded-lg bg-custom-light-gray dark:bg-custom-dark`
                : `p-4 rounded-lg bg-custom-light-gray dark:bg-custom-dark`
            }`}
          >
            <li key={post.slug}>
              {index === 0 ? (
                <div className="flex flex-col gap-4 md:gap-8">
                  <img src={post.banner} alt="test" className="rounded-lg" />
                  <div className="flex flex-col gap-2 md:gap-4">
                    <h2 className="text-xl md:text-6xl font-bold">
                      {post.title}
                    </h2>
                    <p>{post.excerpt}</p>
                    <p className="text-sm">{post.date}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <img src={post.thumbnail} alt="test" className="rounded-lg" />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p className="text-sm">{post.date}</p>
                  </div>
                </div>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

// export default function Posts() {
//   const posts = useLoaderData<BlogPost[]>();
//
//   return (
//     <div>
//       <h1>Blog Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
