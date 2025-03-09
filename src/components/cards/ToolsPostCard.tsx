import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { Tools } from "../../../.contentlayer/generated";

const cardClasses =
  "w-full flex gap-3 sm:gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl dark:hover:bg-slate-700 transition-shadow dark:transition-colors";

export default function ToolsPostCard({ post }: { post: Tools }) {
  return (
    <Link
      key={post.slug}
      href={`/tools/${post.slug}/`}
      className={cardClasses + " group items-center overflow-hidden"}
    >
      <figure className="size-16 shrink-0 overflow-hidden rounded-xl bg-slate-200 shadow-lg sm:size-24 dark:bg-slate-700">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </figure>
      <div className="flex flex-col gap-2 p-2 sm:p-4">
        <h2 className="text-sm font-bold text-balance sm:text-base">
          {post.title}
        </h2>
        <span className="mt-auto hidden text-sm font-bold text-slate-500 sm:flex">
          View tool &rarr;
        </span>
      </div>
    </Link>
  );
}
