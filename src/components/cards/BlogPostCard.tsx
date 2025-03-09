import Link from "next/link";
import { Blog } from "../../../.contentlayer/generated";

const cardClasses =
  "px-4 py-4 w-full flex flex-col gap-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl dark:hover:bg-slate-700 transition-shadow dark:transition-colors";

export default function BlogPostCard({ post }: { post: Blog }) {
  return (
    <Link
      key={post.slug}
      href={`/blog/${post.slug}/`}
      className={cardClasses + " sm:p-6"}
    >
      <h3 className="text-lg font-bold text-balance">{post.title}</h3>
      {post.description && (
        <p className="line-clamp-3 overflow-hidden text-sm font-light tracking-wide text-balance text-ellipsis">
          {post.description}
        </p>
      )}
      <span className="mt-auto text-sm font-bold text-slate-500">
        Read more &rarr;
      </span>
    </Link>
  );
}
