import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import invariant from "tiny-invariant";
import { marked } from "marked";
import "~/styles/markdown.css";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.slug, "params.slug is required");

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json({ html, post });
};

export default function PostSlug() {
  const { html, post } = useLoaderData<typeof loader>();
  console.log(html);
  return (
    <main className="w-full flex flex-col items-center px-4 md:px-8">
      <div className="max-w-3xl w-full py-8 md:py-10 lg:py-20 flex flex-col gap-1 md:gap-2">
        <div>
          <span className="bg-custom-primary px-2 py-1 text-xs rounded-full text-white">
            {post.category}
          </span>
        </div>
        <span className="text-sm">{post.date}</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {post.title}
        </h1>
        <p className="text-xl lg:text-2xl">{post.excerpt}</p>
      </div>
      <div className="max-w-1200 w-full">
        {post.type === "video" ? (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${post.videoUrl}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-80 md:h-[36rem] lg:h-[42rem] rounded-xl"
            ></iframe>
          </div>
        ) : (
          <img
            src={`/${post.banner}`}
            alt="banner image"
            className="rounded-xl"
          />
        )}
      </div>
      <div className="max-w-3xl w-full py-8 md:py-10 lg:py-20 markdown">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  );
}
