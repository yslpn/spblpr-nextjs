import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { Inspiration } from "../../../.contentlayer/generated";

const InspirationCardClasses =
  "w-full flex flex-col gap-2 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl dark:hover:bg-slate-700 transition-shadow dark:transition-colors";

export default function InspirationPostCard({ post }: { post: Inspiration }) {
  return (
    <Link
      key={post.slug}
      href={`/inspiration/${post.slug}/`}
      className={InspirationCardClasses + " group overflow-hidden p-0"}
    >
      <figure className="overflow-hidden bg-slate-200 dark:bg-slate-700">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={800}
          height={450}
          className="aspect-14/9 border-b border-b-slate-200 object-cover transition-transform duration-700 group-hover:scale-110 dark:border-b-slate-700"
          loading="lazy"
        />
      </figure>
      <div className="flex flex-col gap-2 p-4 text-pretty sm:p-6 sm:pt-4">
        <h2 className="font-bold">{post.title}</h2>
        {post.description && (
          <p className="line-clamp-3 overflow-hidden text-sm font-light tracking-wide text-ellipsis">
            {post.description}
          </p>
        )}
      </div>
    </Link>
  );
}
