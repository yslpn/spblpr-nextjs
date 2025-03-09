import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { Resources } from "../../../.contentlayer/generated";

const cardClasses =
  "w-full flex flex-col sm:flex-row gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl dark:hover:bg-slate-700 transition-shadow dark:transition-colors";

export default function ResourcesPostCard({ post }: { post: Resources }) {
  return (
    <Link
      key={post.slug}
      href={`/resources/${post.slug}/`}
      className={cardClasses + " group items-center overflow-hidden"}
    >
      <figure className="size-36 shrink-0 overflow-hidden rounded-lg bg-slate-200 shadow-lg sm:size-24 dark:bg-slate-700">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </figure>
      <div className="flex flex-col gap-2 p-4">
        <h2 className="font-bold">{post.title}</h2>
        <p className="line-clamp-2 overflow-hidden text-sm font-light tracking-wide text-ellipsis">
          {post.description}
        </p>
      </div>
    </Link>
  );
}
