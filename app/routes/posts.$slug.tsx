import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchPostBySlug } from "~/utils/airtable.server";
import { BlogPost } from "~/types/types";
import "~/styles/markdown.css";
import { marked } from "marked";

export const loader: LoaderFunction = async ({ params }) => {
  const post = await fetchPostBySlug(params.slug as string);
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  return json(post); // Return the single BlogPost object directly
};

export default function PostSlug() {
  const post = useLoaderData<BlogPost>();

  const contentHtml = marked(post.content);

  return (
    <main className="w-full flex flex-col items-center px-4 md:px-8">
      <div className="max-w-3xl w-full py-8 md:py-10 lg:py-20 flex flex-col gap-1 md:gap-2">
        <div>
          <span className="bg-custom-primary px-2 py-1 text-xs rounded-full text-white">
            {post.category.join(", ")}
          </span>
        </div>
        <span className="text-sm">{post.date}</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {post.title}
        </h1>
        <p className="text-xl lg:text-2xl">{post.excerpt}</p>
      </div>
      <div className="max-w-1200 w-full">
        {post.type === "Video" ? (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${post.video_url}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-80 md:h-[36rem] lg:h-[42rem] rounded-xl"
            ></iframe>
          </div>
        ) : (
          post.banner.length > 0 && (
            <img
              src={post.banner[0].url}
              alt={post.title}
              className="rounded-xl"
            />
          )
        )}
      </div>
      <div className="max-w-3xl w-full py-8 md:py-10 lg:py-20 markdown">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </main>
  );
}
